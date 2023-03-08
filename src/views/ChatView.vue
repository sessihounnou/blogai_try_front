<script>
import axios from "axios";
export default {
  name: "chat",
  data: () => {
    return {
      textareaRow: 1,
      prompt: "",
      prompt_response: [],
    };
  },
  methods: {
    expendTextarea() {
      this.textareaRow++;
      console.log(this.$refs.prompt.cols);
      // this.$refs.prompt.cols = this.$refs.prompt.value.length - 4;
      if (this.$refs.prompt.value.length < 20) {
        this.$refs.prompt.cols++;
      }
      console.log(this.$refs.prompt.value.length);
      let data = {
        prompt: "hello",
      };
      let vm = this;
      this.prompt_response.push(this.$refs.prompt.value);
      axios
        .post("http://localhost:8090/generate", {
          prompt: this.$refs.prompt.value,
        })
        .then(function (response) {
          // this.prompt_response = response;
          console.log(response);
          // this.prompt_response.push(response);
          let cht = response.data;
          let cleanText = cht.replace(/(<([^>]+)>)/gi, "");
          cleanText = cleanText.replace(/\n/g, "").replace(/\t/g, "    ");
          vm.prompt_response.push(cleanText);
          console.log(vm.prompt_response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<template>
  <div class="flex my-8 w-full flex-col items-center justify-center gap-y-2">
    <div
      class="w-[60%] rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100"
    >
      <div v-for="data in prompt_response">
        <div>{{ data }}</div>
        <div>------------------</div>
      </div>
    </div>

    <div
      class="mx-auto flex w-[60%] items-center justify-start gap-x-3 rounded-lg border border-gray-700 bg-gray-700 px-4 py-2"
    >
      <button
        class="inline-flex items-center space-x-2 rounded-full bg-gray-700 font-semibold text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="w-6"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
              fill="currentColor"
            />
          </g>
        </svg>
      </button>
      <textarea
        @keydown.enter="expendTextarea"
        ref="prompt"
        cols="78"
        :rows="textareaRow"
      ></textarea>
      <button
        class="inline-flex items-center space-x-2 rounded-full bg-gray-700 font-semibold text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="w-6"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
              fill="currentColor"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>
</template>

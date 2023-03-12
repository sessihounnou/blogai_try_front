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
      console.log(this.$refs.prompt.cols);
      // this.$refs.prompt.cols = this.$refs.prompt.value.length - 4;

      if (this.$refs.prompt.value.length < 20) {
        this.$refs.prompt.cols++;
        this.textareaRow++;
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
          vm.$refs.prompt.value = "";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<template>
  <div class="flex py-40 w-full flex-col items-center justify-center gap-y-2">
    <div
      class="w-[50%] rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100"
    >
      <div class="mt-4">
        <div class="flex max-h-[400px] w-full flex-col overflow-y-scroll">
          <div v-for="data in prompt_response">
            <button
              class="bg-gray-200 my-2 right group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-gray-100"
            >
              <div
                class="flex flex-col items-start justify-between font-light text-gray-600"
              >
                <span class="text-2xl font-medium text-gray-700 font-light">{{
                  data
                }}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[50%] mb-4 flex items-center">
      <input
        type="text"
        class="w-full rounded-lg border border-gray-400 p-2"
        ref="prompt"
        placeholder="Hello ! Dit moi en quoi je peut être utile pour vous."
        @keydown.enter="expendTextarea"
      />
      <button
        class="ml-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
        @click="expendTextarea"
      >
        Envoyer
      </button>
    </div>
  </div>
</template>

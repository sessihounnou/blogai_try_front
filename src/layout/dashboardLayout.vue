<script>
import HeaderCom from "../components/header.vue";
import TheSidebar from "../components/sidebar.vue";
// import DashboardHeader from "../components/DashboardHeader.vue";

export default {
  name: "DashboardLayout",
  components: {
    // DashboardHeader,
    TheSidebar,
    HeaderCom,
  },
  data() {
    return {
      theopen: true,
    };
  },
};
</script>

<template>
  <div class="flex">
    <!-- side -->
    <div class="hidden sm:block fixed z-50">
      <TheSidebar />
    </div>

    <!-- side -->
    <div class="flex-1 flex flex-colx overflow-hidden">
      <!-- main -->
      <main class="flex-1 bg-body-bg overflow-x-hidden overflow-y-auto">
        <div class="mx-auto">
          <div class="ml-[15%]">
            <header-com />
          </div>
          <div class="ml-[20%] mx-8">
            <slot />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

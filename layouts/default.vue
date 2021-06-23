<template>
  <div>
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
@import "@/assets/css/_style.scss";
@import "@/assets/css/loading.scss";
@import "@/assets/css/modal.scss";
</style>

<script>
import Footer from "@/components/common/layout/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>

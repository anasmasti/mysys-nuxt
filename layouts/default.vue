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
import Footer from "@/components/common/Footer.vue";
import { mapState } from 'vuex';

export default {

  components: {
    Footer,
  },

  mounted() {
     this.$store.dispatch("formation/fetchDomaineData");
     this.$store.dispatch("formation/fetchThemeData");
     this.$store.dispatch("formation/setThemesByDomaine");
    
  },

  fetch({context}) {
     store.dispatch("formation/fetchDomaineData");
     store.dispatch("formation/fetchThemeData");
     store.dispatch("formation/setThemesByDomaine");
  },

   computed: {
    ...mapState("formation", {
      domaines: state => state.domaines,
      themes: state => state.themes,
      formations: state => state.formations,
    }),
  },


  //  created() {

  //   this.ScrollToTopEvent();
  //   // ###### DISPATCH ~ ACTIONS ###### //

  //   // await store.dispatch('FetchFormationData');
  //   // await store.dispatch('SetFormationsByTheme');
  // },
 
  // methods: {
  //   // **** UI EVENTS ****
  //   ScrollToTopEvent() {
  //     document.documentElement.scrollTop = document.body.scrollTop = 0;
  //   },
  //   DisplayBackTopOnScroll() {
  //     let btnTop = document.getElementById("back_to_top");
  //     btnTop.style.display = window.scrollY > 500 ? "inline-block" : "none";
  //   },
  // },
};
</script>

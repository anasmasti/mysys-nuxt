<template>
  <div id="home" class="home">
    <div class="bg_jumbo">
      <NavBarForHome />
      <Landing />
    </div>

    <div>
      {{ formations }}
    </div>
    <Domaine />
    <OurService />

    <div class="d-flex flex-wrap py-5">
      <div class="col-12 col-lg-6 col-xl-6">
        <Expertise />
      </div>
      <div class="col-12 col-lg-6 col-xl-6">
        <Mission />
      </div>
    </div>
    <div class="pt-5">
      <Partenaire />
    </div>

    <div class="py-5">
      <Chiffre />
    </div>

    <Client />

    <div class="line bg_light_2 py-5">
      <hr />
    </div>
    <Contactez />
  </div>
</template>

<script>
import Domaine from "@/components/home/Domaine";
import Jumbotron from "@/components/home/Landing";
import OurService from "@/components/home/OurService";
import Chiffre from "@/components/home/Chiffre";
import Client from "@/components/home/Client";
import Partenaire from "@/components/home/Partenaire";
import Expertise from "@/components/home/Expertise";
import Mission from "@/components/home/Mission";
import NavBarForHome from "@/components/common/NavBarForHome.vue";
import Contactez from "@/components/common/Contactez.vue";
import { mapState } from "vuex";

export default {
  components: {
    NavBarForHome,
    Domaine,
    Jumbotron,
    OurService,
    Partenaire,
    Chiffre,
    Expertise,
    Mission,
    Client,
    Contactez,
  },

  data() {
    return {
      error: null,
    };
  },

  // async created() {
  //   await this.$store.dispatch("formation/setThemesByDomaine");
  //   await this.$store.dispatch("formation/fetchThemeData");
  //   await this.$store.dispatch("formation/fetchDomaineData");

  // },

  // fetch data
  async fetch({ store }) {
    await store.dispatch("formation/fetchDomaineData");
    await store.dispatch("formation/fetchThemeData");
    await store.dispatch("formation/setThemesByDomaine");
  },

  computed: {
    ...mapState("formation", {
      domaines: (state) => state.domaines,
      themes: (state) => state.themes,
      formations: (state) => state.formations,
    }),
  },
};
</script>

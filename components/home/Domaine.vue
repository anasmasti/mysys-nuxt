<template>
  <div id="domaine">
    <div class="container-fluid py-5">
      <div class="main-title">
        <span class="title">Nos Domaines de Formation</span>
      </div>

      <!-- ***************** DOMAINES ***************** -->
      <!-- if -->
      <ul
        v-if="domaines && is_domaineLoaded && domaines.length"
        class="onglet w-auto nav nav-tabs align-items-center"
        id="myTab"
        role="tablist"
      >
        <!-- button-left -->
        <button
          class="icon-btn bg-light"
          id="btnFixedRight"
          @click="ScrollLeft(10)"
        >
          <i class="material-icons">chevron_right</i>
        </button>
        <!-- end-btn-left -->
        <li
          class="col-lg-6 col-md-6 col-12"
          :key="`dom${domIndex}`"
          v-for="(dom, domIndex) in domaines"
          @click="handleAction('formation/setThemesByDomaine', dom.id)"
        >
          <Nuxt-link
            :class="(domIndex === 0 && 'nav-link active') || 'nav-link'"
            :id="`domaine${dom.id}-tab`"
            :to="`#domaine${dom.id}`"
            data-toggle="tab"
            role="tab"
            :aria-controls="dom.id"
            aria-selected="true"
          >
            <div class="text-center">
              <span class="">
                {{ dom.name || "--" }}
              </span>
            </div>
          </Nuxt-link>
        </li>
        <!-- button-right -->
        <button
          class="icon-btn bg-light"
          id="btnFixedLeft"
          @click="ScrollLeft(-10)"
        >
          <i class="material-icons">chevron_left</i>
        </button>
        <!-- end-btn-right -->
      </ul>
      <!-- else -->
      <ul
        v-else-if="!domaines && !is_domaineLoaded && !domaines.length"
        class="onglet w-100 nav nav-tabs align-items-center text-center"
        id="myTab"
        role="tablist"
      >
        <li class="col-12 loading p-0">
          <img src="~/assets/img/loading2.gif" class="loading_img_sm" />
        </li>
      </ul>
      <!-- else -->
      <ul
        v-else-if="!is_domaineLoaded && has_domaineError && domaineError"
        class="onglet w-100 nav nav-tabs text-center"
        id="myTab"
        role="tablist"
      >
        <li
          class="w-100 d-flex flex-nowrap align-items-center justify-content-center"
        >
          <i class="material-icons">error</i>
          <span>{{ domaineError }}</span>
        </li>
      </ul>
      <!-- END-DOMAINES -->

      <!-- ***************** THEMES ***************** -->
      <div
        v-if="is_domaineLoaded && domaines && domaines.length"
        class="tab-content"
        id="myTabContent"
      >
        <!-- theme -->
        <div
          v-for="(domaine, domIndex) in domaines"
          :class="
            (domIndex === 0 && 'tab-pane fade show active') ||
            'tab-pane fade show hide'
          "
          role="tabpanel"
          :aria-labelledby="`domaine${domIndex}-tab`"
          :key="`domaine${domIndex}`"
        >
          <div :id="`domaine${domIndex}`">
            <!-- THEMES -->
            <Theme :themes_by_domaine="themes_by_domaine" />
            <!-- END-THEMES -->
          </div>
          <!-- end-theme -->
        </div>
        <!-- tab-pane -->
      </div>
      <!-- tab-content -->
      <!-- LOADING .. -->
      <div v-else-if="!is_domaineLoaded && !has_domaineError" class="loading">
        <img
          :src="require('~/assets/img/loading.gif')"
          class="loading_img_sm"
          alt="loading pic"
        />
      </div>
      <!-- LOADING .. -->
      <!-- EMPTY .. -->
      <div
        v-else-if="is_domaineLoaded && !has_domaineError && !domaines"
        class="p-5"
      >
        <li
          class="w-100 d-flex flex-nowrap align-items-center justify-content-center"
        >
          <i class="material-icons">error</i>
          <span class="font-s8">{{ "Aucun thème pour l'instant!" }}</span>
        </li>
      </div>
      <!-- ERROR .. -->
      <div v-else-if="!is_domaineLoaded && has_domaineError" class="p-5">
        <li
          class="w-100 d-flex flex-nowrap align-items-center justify-content-center"
        >
          <i class="material-icons">error</i>
          <span class="font-s8">{{ "Veuillez réessayer ultérierement!" }}</span>
        </li>
      </div>
      <!-- ERROR .. -->
      <!-- *** END-THEMES *** -->
    </div>
    <!-- end-container-fluid -->
  </div>
</template>

<style lang="scss">
@import "~/assets/css/domaine.scss";
</style>

<script>
import { mapState } from "vuex";
import Theme from "@/components/home/Theme";

export default {
  components: {
    Theme,
  },

  computed: {
    ...mapState("formation", {
      //main data
      domaines: (state) => state.domaines,
      themes_by_domaine: (state) => state.themes_by_domaine,
      //is loaded
      is_domaineLoaded: (state) => state.is_domaineLoaded,
      is_themeLoaded: (state) => state.is_themeLoaded,
      is_themesByDomaineLoaded: (state) => state.is_themesByDomaineLoaded,
      // is errors
      domaineError: (state) => state.domaineError,
      themeError: (state) => state.themeError,
      //has errors
      has_domaineError: (state) => state.domaineError,
      has_themeError: (state) => state.has_themeError,
    }),
  }, // computed

  methods: {
    handleAction(action, targetId = null) {
      this.$store.dispatch(action, targetId);
    },
    // scroll
    ScrollLeft(valToScroll) {
      let myTab = document.getElementById("myTab");
      let amount = 0;
      let scrollInterv = setInterval(function () {
        myTab.scrollLeft += valToScroll;
        amount += valToScroll;
        (amount === 200) | (amount === -200) && clearInterval(scrollInterv);
      }, 10);
    },
  }, // METHODS
};
</script>

<template>
  <div id="home" class="home">
    <div class="bg_jumbo">
      <NavBarForHome />
      <Landing />
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
export default {
  // data() {
  //   return {
  //     // error: null,
  //   };
  // },
  // mounted() {},
  // created() {
  //   document.title = "MySYS";
  // },
  // methods: {}, // mounted
};
</script>
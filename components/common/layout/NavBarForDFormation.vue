<template>
<div>
  <nav class="navbar navbar-expand-md navbar-dark bg-transparent border-0 text_light navforformation mx-lg-4">
    <NuxtLink class="navbar-brand" to="/">
      <img class="navbar-brand" height="35" src="@/assets/img/logos/logo_light.png" alt="mysys-logo">
    </NuxtLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-between align-items-center font_navbar" id="navbarSupportedContent">
      <ul class="navbar-nav text-md-center ">
        <li class="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
          <NuxtLink class="nav-link" to="/"><i class="fa fa-home"></i></NuxtLink>
        </li>
        <li class="nav-item active mr-5" data-toggle="collapse" data-target=".navbar-collapse.show">
          <NuxtLink class="nav-link" to="/formation/all"><i class="fa fa-chevron-left"></i> Formations</NuxtLink>
        </li>
      </ul>
      <ul class="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap mr-3">
        <li class="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
          <a class="nav-link" data-target="#inscriptionModal33" data-toggle="modal"><i class="fa fa-envelope"></i> S'Inscrire</a>
        </li>
        <li class="nav-item active" data-toggle="collapse" data-target=".navbar-collapse.show">
          <NuxtLink class="nav-link" to="/contact"><i class="fa fa-paper-plane"></i> Contact</NuxtLink>
        </li>
        <li class="nav-item ml-3"><a class="nav-link" href=""><i class="fa fa-facebook mr-1"></i></a> </li>
        <li class="nav-item"><a class="nav-link" href=""><i class="fa fa-twitter mr-1"></i></a> </li>
        <li class="nav-item"><a class="nav-link" href=""><i class="fa fa-linkedin mr-1"></i></a> </li>
      </ul>
    </div>
  </nav>

</div>
</template>

<style>
.navforformation{position:relative;z-index:2 !important; margin-bottom:-70px !important}
</style>

<script>
export default {
 
}
</script>


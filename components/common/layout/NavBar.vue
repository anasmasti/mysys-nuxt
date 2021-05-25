<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-transparent border-0 text_light p-3 mx-lg-4">
      <NuxtLink class="navbar-brand" to="/">
        <img
          class="navbar-brand"
          height="35"
          src="@/assets/img/logos/logo_black.png"
          alt="mysys-logo"
        />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-between align-items-center font_navbar" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mx-auto text-md-center text-left">
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NuxtLink class="nav-link" to="/">Accueil</NuxtLink>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NuxtLink class="nav-link" to="/formation/all"
              >Nos Formations</NuxtLink
            >
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NuxtLink class="nav-link" to="/all-services">Nos Services</NuxtLink>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NuxtLink class="nav-link" to="/about">À Propos</NuxtLink>
          </li>
          <li class="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
            <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
          </li>
        </ul>
        <ul class="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap mr-3">
          <li class="nav-item">
            <a class="nav-link" href=""><i class="fa fa-facebook mr-1"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=""><i class="fa fa-twitter mr-1"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href=""><i class="fa fa-linkedin mr-1"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
 
};
</script>


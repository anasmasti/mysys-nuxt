<template>
  <div class="t-cards">
    <!-- card -->
    <div class="t-card" :key="formIndex" v-for="(form, formIndex) in formations">
      <!-- card-header -->
      <div class="t-card-header">
          
        <img class="t-card-img" :src="form.url_img" alt="card-img">

        <span class="t-card-title">{{ form.name ? form.name.substring(0, 70) : "--" }}</span>
        <span class="t-card-desc">
          {{ form.description ? form.description.substring(0, 70) + ".." : "--" }}
        </span>
        <span class="mt-2" :class="form.certif ? 'badge badge-success' : 'badge badge-warning'">
          {{ form.certif ? "Certifiante" : "Non certifiante" }}
        </span>
      </div>
      <!-- card-content -->
      <div class="t-card-content">
        <NuxtLink :to="'detail/' + form.id">
          <h1 class="title h5 font-weight-bold">{{ form.name }}</h1>
        </NuxtLink>
        <span class="description font-s4">
          {{ form.description ? form.description.substring(0, 100) + ".." : "--" }}
        </span>
        <small class="text-secondary w-100 align-middle py-1">
          <!-- <i class="material-icons">person_pin</i> -->
          <span class="font-s3">Formateur : </span>
          <strong class="font-s3">
            {{ form.professeur ? form.professeur : "--" }}
          </strong>
        </small>
        
        <div class="d-block">
          <NuxtLink :to="'detail/' + form.id" class="font-s3">
            En savoir plus
          </NuxtLink>
        </div>
      </div>    
    
    </div>
    <!-- end-card -->

  </div>
  <!-- end-cards -->

</template>

<style lang="scss">
  @import '@/assets/css/allformation.scss';
</style>

<script>
export default {
  components: {
  },
  props: {
    formations: {type: Array, required: true}
  },
}
</script>




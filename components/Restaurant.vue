<template>
  <section id="markers">
    <l-marker v-for="restau in restaurants" :key="restau.id" :lat-lng="restau.loc" :icon="iconResto" ></l-marker>
  </section>
</template>

<script>
import restaurants from "./../constants/restaurants.json"
import {icon} from "leaflet"
export default {
  data() {
    return {
      restaurants : restaurants,
      iconResto: icon({
        iconUrl: "./img/iconResto.png",
        iconSize: [35, 55],
        iconAnchor: [35, 55],
      }),
    }
  }
}
</script>

<style>

</style>

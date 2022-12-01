<template>
  <l-marker id="arrival"  :icon="iconArrivee" :lat-lng="locArrivee"></l-marker>
</template>

<script>
import {icon} from "leaflet"
export default {
  data() {
    return{
      iconArrivee: icon({
        iconUrl: "./img/iconArrivee.png",
        iconSize: [35, 55],
        iconAnchor: [35, 55],
      }),
      locArrivee : [48.8917697268483, 2.2247726384151627],
    }
  }
}
</script>

<style>

</style>

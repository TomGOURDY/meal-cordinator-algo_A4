<template>
  <div id="map-wrap">
    <client-only>
      <l-map :zoom=15 :center="[this.latUser,this.longUser]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker id="myPosition"  :icon="iconPosition" :lat-lng="[this.latUser,this.longUser]"></l-marker>
        <Restaurant/>
      </l-map>
    </client-only>
</div>
</template>

<script>
import {icon} from "leaflet"

export default {

  data() {
    return{
      latUser: 0,
      longUser: 0,
      iconPosition: icon({
        iconUrl: "./img/iconPosition.png",
        iconSize: [35, 35],
        iconAnchor: [35, 35],
      }),
      iconArrivee: icon({
        iconUrl: "./img/iconArrivee.png",
        iconSize: [35, 55],
        iconAnchor: [35, 55],
      }),
    }
  },
  mounted() {
    console.log('Test')
    this.getLocation()
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            console.log(position);
            this.latUser = position.coords.latitude;
            this.longUser = position.coords.longitude;
          },
          (err) => {
            console.log(err);
          },
          {
            enableHighAccuracy: true,
            timeout: 3000,
            maximumAge: 60000,
          }
        );
      }
    },
  }
}
</script>

<style>
#map-wrap {
  height: 94vh;
  width: 70%;
  margin-top: 2vh;
}

#myPosition {
  background-color: aquamarine;
}
</style>

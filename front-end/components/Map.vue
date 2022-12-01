<template>
  <div id="map-wrap">
    <client-only>
      <l-map :zoom=15 :center="[this.latUser,this.longUser]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker id="myPosition"  :icon="iconPosition" :lat-lng="[this.latUser,this.longUser]"></l-marker>
        <ArrivalMarker/>
        <Restaurant/>
        <l-polyline id="myPath" :color="color" :lat-lngs="myCoords"></l-polyline>
      </l-map>
    </client-only>
</div>
</template>

<script>
import {icon} from "leaflet"

export default {

  data() {
    return{
      latUser: 1,
      longUser: 1,
      iconPosition: icon({
        iconUrl: "./img/iconPosition.png",
        iconSize: [35, 35],
        iconAnchor: [35, 35],
      }),
      color: '#000',
      myCoords: [
        [0,0],
        [0,0],
        [0,0],
      ]
    }
  },
  mounted ()  {
    this.getLocation()
    console.log(this.myCoords)
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            this.latUser = position.coords.latitude;
            this.longUser = position.coords.longitude;
            console.log(this.latUser + ',' + this.longUser);
            this.getRealDistance();
            this.myCoords = [
                [this.latUser, this.longUser],
                [48.895399960735304, 2.2242185663116274],
                [48.8917697268483, 2.2247726384151627],
            ]
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
    getRealDistance() {
      // Radius in Km
      const radiusEarthKm = 6371;
      // Convert degrees to radians
      // Lats
      let radiusLatFrom = this.latUser * (Math.PI /180);
      let radiusLatRestau = this.myCoords[1][0]* (Math.PI /180);
      let radiusLatTo = this.myCoords[2][0] * (Math.PI /180);

      // Longs
      let radiusLongFrom = this.longUser * (Math.PI /180);
      let radiusLongRestau = this.myCoords[1][1] * (Math.PI /180);
      let radiusLongTo = this.myCoords[2][1] * (Math.PI /180);

      let deltaLongToRestau = radiusLongRestau - radiusLongFrom;
      let deltaLongToArrival = radiusLongFrom - radiusLongTo;
      // Distances
      let distanceCalcToRestau = Math.acos(Math.sin(radiusLatFrom)*Math.sin(radiusLatRestau) + Math.cos(radiusLatFrom)*Math.cos(radiusLatRestau)*Math.cos(deltaLongToRestau));
      let distanceToRestau = radiusEarthKm * distanceCalcToRestau;
      let finalDistanceToRestau = Math.floor(distanceToRestau * 1000)/1000
      console.log(`${finalDistanceToRestau} km de distance entre vous et le restaurant`)

      let distanceCalcToArrival = Math.acos(Math.sin(radiusLatTo)*Math.sin(radiusLatRestau) + Math.cos(radiusLatTo)*Math.cos(radiusLatRestau)*Math.cos(deltaLongToArrival));
      let distanceToArrival = radiusEarthKm * distanceCalcToArrival;
      let finalDistanceToArrival = Math.floor(distanceToArrival * 1000)/1000
      console.log(`${finalDistanceToArrival} km de distance entre le restaurant et le point de rendez-vous`)

      let totalDistance = Math.floor((distanceToRestau + distanceToArrival) * 1000)/1000;
      console.log(`${totalDistance} km de distance au total`)
    }
  }
}
</script>

<style>
#map-wrap {
  height: 94vh;
  width: 60%;
  margin-top: 2vh;
}
</style>

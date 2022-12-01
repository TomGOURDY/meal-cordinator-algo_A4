<template>
 <div id="restau-list">
  <div class="restaubox" v-for="restau in restaurants" :key="restau.id">
    <h2>{{restau.name}}</h2>
    <h3>{{restau.type}}</h3>
    <p>{{restau.adresse}}</p>
  </div>
 </div>
</template>

<script>
import restaurants from "./../constants/restaurants.json"
export default {
  data() {
    return {
      restaurants : restaurants,
    }
  }
}

</script>

<style>
#restau-list {
  height: 94vh;
  width: 15%;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.restaubox {
  margin-left: 5px;
  font-size: 14px;
}

.restaubox h2 {
  font-size: 16px;
  color: darkslategray;
}

.coord {
  color: gray;
}
</style>

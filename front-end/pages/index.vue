<template>
  <section id="app">
    <RestaurantList/>
    <Map/>
    <Room/>
  </section>
</template>

<script>
import io from 'socket.io-client';

export default {
  data() {
    return{
      socket: io('http://localhost:3001', {autoConnect:false}),
    }
  },
  mounted(){
    this.socket.connect()
  },
  methods: {
    changeArrivee() {
      this.socket.emit('changeArrivee', {

      }, (resp) => {
        console.log('Test')
      })
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#app {
  display: flex;
  flex-direction: row;
  position: relative;
}
</style>

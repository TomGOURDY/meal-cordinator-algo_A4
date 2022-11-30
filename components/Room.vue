<template>
  <div id="room">
    <h1>Room Name</h1>
    <div id="participants">
      <div class="personCard">
        <h2>Name</h2>
        <div class="color"></div>
      </div>
      <div class="personCard">
        <h2>Name</h2>
        <div class="color"></div>
      </div>
      <div class="personCard">
        <h2>Name</h2>
        <div class="color"></div>
      </div>
      <div class="personCard">
        <h2>Name</h2>
        <div class="color"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#room {
  height: 94vh;
  width: 15%;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
}

#participants {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h1 {
  margin-left: 25px;
  font-size: 30px;
}

.personCard {
  padding: 15px;
  margin: 15px 25px;
  background-color: darkslategray;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
}

.personCard h2 {
  font-size:15px;
  color: aliceblue;
}

.color {
  width: 25px;
  border-radius: 25px;
  background-color: aquamarine;
}

</style>

<template>
  <div id="timeDisplay-cont">
      <h2 id="time">T = {{this.time}}s</h2>
  </div>
</template>

<script>
import store from '../store/index'
export default {
name:"TimeDisplay",
computed: {
  time:{
    get(){
      return store.getters.time / 100;
    }
  }
}
}
</script>

<style>
#timeDisplay-cont{
    background-color: #a2b9bc;
    height: 18.4vh;
}
#time{
  line-height: 18.4vh;
}
</style>
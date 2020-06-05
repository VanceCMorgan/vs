<template>
<div id ="speedSelect-cont">
  <label for="speedSelect">Speed: </label>
  <select id="speedSelect" class="inputOpt" v-model="speed">
      <option value="Fast">Fast</option>
      <option value="Medium">Medium</option>
      <option value="Slow">Slow</option>
    </select>
</div>
</template>

<script>
import store from '../store/index'
export default {
    name:"SpeedSelect",
    computed: {
      speed: {
        get(){
          return store.getters.speed;
        },
        set(value){
          store.commit('setSpeed',value);
        }
      }
    }
}
</script>

<style>
#speedSelect-cont{
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items:center;
}
select:hover{
  cursor:pointer;
}

</style>
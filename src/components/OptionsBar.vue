<template>
  <div id="optionsBar-cont">
    <div id="optInner">
      <numInput/>
      <AlgoSelect/>
      <OrderSelect/>
      <SpeedSelect/>
    </div>
  </div>
</template>

<script>
import numInput from './numInput.vue'
import AlgoSelect from './AlgoSelect'
import OrderSelect from './OrderSelect.vue'
import SpeedSelect from './SpeedSelect.vue'

export default {
name:"OptionsBar",
components:{
        'numInput': numInput,
        'AlgoSelect': AlgoSelect,
        'OrderSelect': OrderSelect,
        'SpeedSelect': SpeedSelect,
    }
}

</script>

<style>
#optionsBar-cont{
    background-color: rgb(89, 26, 206);
    display: flex;
    justify-content: space-around;
    min-height: 5vh;
    padding: 0.2rem;
}
#optInner input{
    outline: none;
    height:35px;
    padding: 0px;
}
#optInner select{
    outline: none;
    height:35px;
    text-align: center;
    padding: 0px;
}
#optInner{
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: auto;
}
label{
  color: white;
}
input{
  height: 80px;
}
@media only screen and (max-width: 900px) {
  body {
    background-color: lightblue;
  }
  #optionsBar-cont{
    justify-content: space-between;
    margin-left:0.5rem;
    margin-right:0.5rem;
  }
  #optInner{
    width: 100%;
}
}
</style>
<template>
  <div id="canvas-cont">
     <div id="columns">
        <div class="bar-cont" v-bind:key="column.id" v-for="column in columnList">
             <div class="bar" @mouseleave="leaveBar()" @mouseover="barHover(column.value)" :style="{ height: column.value + '%' }" v-anime="{ translateY: -10,duration: 3000, loop: false }"></div>
      </div>
          <div id="hoverDisplay">
            <p id="hoverVal"></p>
          </div>
  </div>
     
  </div>
</template>

<script>
import store from '../store/index'
export default {
name:"cavas",
mounted() {
  var bars = document.getElementsByClassName('bar');
  for(var i =0; i< bars.length; i++){
    var barVal = this.columnList[i].value + "%";
    bars[i].style.height = barVal; 
  }
    const targets = this.$el;
    this
      .$anime
      .timeline()
      .add({
        targets,
        easing: 'easeOutExpo',
      })
      .add({
        targets,
        easing: 'easeOutExpo',
      });
},
computed: {
  num(){
    return store.getters.num;
  },
  columnList(){
    return store.getters.columns;
  }
},
methods: {
  barHover(val){
    var el = document.getElementById('hoverDisplay');
    el.style.display = "block";
    el.style.position = "absolute";
    el.style.left = event.clientX+'px';
    el.style.top = event.clientY-200+'px';
    document.getElementById('hoverVal').textContent = val;
  },
  leaveBar(){
    document.getElementById('hoverDisplay').style.display = "none";
  }
}
}
</script>

<style>
#canvas-cont{
    height: 70vh;
    width: 100%;
    background-color: #a2b9bc;
    margin: auto;
    text-align: center;
}
#spin{
    width: 20%;
    position: relative;
    top: 300px;
    left: 40%;
    background-color: #6b5b95;
}
#columns{
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
    position: relative;
    height: 65vh;  
    top: 5vh;
}
.bar{
    position: absolute;
    bottom: 0px;
    width: 80%;
    background-color: rgb(89, 26, 206);
}
.bar:hover{
    background-color: rgb(65, 12, 163);
    cursor: pointer;
}
.bar-cont{
  position: relative;
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: space-around;
}
#hoverDisplay{
  background-color: rgba(128, 128, 128, 0.792);
  border: white solid 2px;
  border-radius: 15px;
  color: white;
  display: none;
  padding: 1rem;
}
</style>
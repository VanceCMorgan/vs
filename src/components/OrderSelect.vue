<template>
  <div class="order" id="orderSelect-cont">
    <p id="orderLabel">Order: </p>
    <p>
      <input class="inputOpt orderOpt" id="ASC" type="radio" v-model="order" value="ASC">
     <font-awesome-icon @click="changeOrder()" id="left" class="arrow" size="2x" icon="angle-left" />
      <input class="inputOpt orderOpt" id="DESC" type="radio" v-model="order" value="DESC">
     <font-awesome-icon @click="changeOrder()" id="right" class="arrow" size="2x" icon="angle-right" />
   </p>
  </div>
</template>

<script>
import store from '../store/index'
export default {
    name:"OrderSelect",
    computed: {
      order: {
        get(){
          return store.getters.order;
        },
        set(value){
            store.commit('setOrder',value);
        }
    },
      playState: {
          get(){
            return store.getters.playState;
          },
          set(value){
              store.commit('setPlayState',value);
          }
      }
  },
    methods: {
      changeOrder(){
        if(document.getElementById('ASC').checked && this.playState != "play"){
          this.order = "DESC";
          document.getElementById('ASC').checked = false;
          document.getElementById('DESC').checked = true;
          document.getElementById('right').style.display = "none";
          document.getElementById('left').style.display = "inline-block";
        }else if(this.playState != "play"){
          this.order = "ASC";
          document.getElementById('ASC').checked = true;
          document.getElementById('DESC').checked = false;
          document.getElementById('left').style.display = "none";
          document.getElementById('right').style.display = "inline-block";
        }
      }
    }
}
</script>

<style>
#orderSelect-cont{
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items:center;
}
.order{
  color: white;
}
.orderOpt{
  display: none;
}
.arrow{
  margin: 0 !important;
  line-height: 5vh;
  position: relative;
  padding-left:0.15rem;
}
.arrow:hover{
  color: #2c3e50;
  transform:scale(1.5);
  cursor:pointer;
}
#left{
  display: none;
}
@media only screen and (max-width: 900px) {
  .arrow{
    padding-left: 0rem;
  }
}

</style>
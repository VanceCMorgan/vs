<template>
  <div id="numInput-cont">
      <label for="nInput">N: </label>
      <input class="inputOpt" id="nInput" type="number" max="200" min="10" @change="onChange" v-model="num" />
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name: 'numInput',
  mounted(){
    this.num = 10;
    var theCols =[];
    for(var i=0;i<10;i++){
      theCols.push({
        id:i,
        value: Math.floor(Math.random() * 99) + 2
      });
    }
    this.columns = theCols;
  },
  computed: {
    num: {
      get(){
        return store.getters.num;
      },
      set(value){
        if(value > 0 && value < 151){
          store.commit('changeNum',value);
        }
      }
    },
    columns:{
      get(){
        return store.getters.columns;
      },
      set(value){
        store.commit('setColumns',value)
      }
    }
  },
  methods:{
    onChange(){
      var parsedobj = JSON.parse(JSON.stringify(this.columns))
      if(parsedobj.length < this.num){
        for(var i=parsedobj.length;i< this.num;i++){
          this.columns.push({
            id:i,
            value: Math.floor(Math.random() * 99) + 2
          });
        }
      }else{
        for(var j=parsedobj.length;j > this.num;j--){
          this.columns.pop();
      }
      }
      }        
  }
}
</script>

<style>
.inputOpt{
  text-align: center;
  border-radius: 10px;
  font-size: large;
  padding-left:0.3rem;
}
#nInput{
  border:none !important;
}
#numInput-cont{
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items:center;
}
@media only screen and (max-width: 400px) {
  .inputOpt{
    font-size:small;
    max-width: fit-content;
  }
}
</style>
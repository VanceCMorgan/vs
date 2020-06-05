<template>
<div id ="algoSelect-cont">
  <label for="algoSelect">Algorithm: </label>
  <select class="inputOpt"  id="algoSelect" v-model="algorithm">
      <option value="BubbleSort">Bubble O(1)</option>
      <option value="QuickSort">Quick O(logn)</option>
  <!--    <option value="InsertSort">Insertion O(1)</option>
          <option value="MergeSort">Merge O(n)</option>
  -->
    </select>
</div>
</template>

<script>
import store from '../store/index'
export default {
    name:"AlgoSelect",
    computed: {
      algorithm: {
        get(){
          return store.getters.algorithm;
        },
        set(value){
            store.commit('setAlgorithm',value);
        }
      }
  }
}
</script>

<style>
#algoSelect-cont{
  min-height: 5vh;
  display: flex;
  justify-content: center;
  align-items:center;
}
select:hover{
  cursor:pointer;
}
</style>
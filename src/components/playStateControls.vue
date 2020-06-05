<template>
  <div id="playStateCtrl-cont">
    <div id="inner">
      <font-awesome-icon @click="playAlgo" size="2x" class="opt" icon="play" />
      <font-awesome-icon @click="newArray" size="2x" class="opt" icon="redo" />
      <font-awesome-icon @click="pauseAlgo" size="2x" class="opt" icon="pause" />
    </div>
  </div>
</template>

<script>
import store from '../store/index'
export default {
  name:"playStateControls",
  data: function () {
    return {
      sorted: []
    }
  },
  computed: {
        num:{
          get(){
            return store.getters.num;
          }
        },
        columns:{
          get(){
            return store.getters.columns;
          },
          set(value){
            store.commit('setColumns',value)
          }
        },
        speed: {
          get(){
            return store.getters.speed;
          }
        },
        algorithm: {
          get(){
            return store.getters.algorithm;
          }
        },
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
        },
        time: {
          get(){
            return store.getters.time;
          },
          set(value){
            store.commit('setTime',value);
          }
        }
  },
  methods:{
    newArray(){
      var newArray = [];
      for(var i=0;i<this.num;i++){
        newArray.push({
          id: i,
          value: Math.floor(Math.random() * 99) + 2
        });
      }
      document.getElementsByClassName('bar').forEach(element => {
        element.style.backgroundColor = "rgb(89, 26, 206)";
      });
      this.columns = newArray;
      this.time =0;
      this.playState="done";
      document.getElementById('innerGreen').style.width = 0 + '%';
      document.getElementById('ASC').disabled = false;
      document.getElementById('DESC').disabled = false;
      document.getElementById('algoSelect').disabled = false;
      document.getElementById('nInput').disabled = false;
      this.sorted = [];},
    async playAlgo(){
      if(this.playState!= "done" || this.time==0){
        this.playState = "play";
      }
      //disable order
      document.getElementById('ASC').disabled = true;
      document.getElementById('DESC').disabled = true;
      document.getElementById('algoSelect').disabled = true;
      document.getElementById('nInput').disabled = true;
      switch (this.algorithm) {
        case "QuickSort":
          this.quickSort(this.columns,0,this.columns.length-1);
          break;
        case "MergeSort":
          this.mergeSort(this.columns,0,this.columns.length-1);
          break;
        case "InsertSort":
          this.insertSort(this.columns);
          break;
        case "BubbleSort":
          this.bubbleSort(this.columns);
          break;
        default:
          console.log("NOT A VALID ALGORITHM");
          break;
      }},
    pauseAlgo(){
      this.playState = "pause";
      console.log(this.playState);},
    async quickSort(array,low,high){
      this.timer(this.playState);
      if (low < high && this.playState == "play")  
      {  
        /* pi is partitioning index, arr[p] is now  
        at right place */
        var pi = this.partition(array, low, high);
        if(pi){
          document.getElementsByClassName('bar')[pi].style.backgroundColor="limegreen";
        }
        await this.sleep();

        // Separately sort elements before  
        // partition and after partition  
        await this.quickSort(array, low, pi - 1);  
        await this.quickSort(array, pi + 1, high);
      }},
    mergeSort(arr,l,r){
      //this.timer(this.playState); //start timer
      console.log("current: ");
      console.log(arr);
      if (l < r) 
      { 
          // Same as (l+r)/2, but avoids overflow for 
          // large l and h 
          var m = Math.floor(l+(r-l)/2); 
    
          // Sort first and second halves 
          //this.mergeSort(arr, l, m); 
          //this.mergeSort(arr, m+1, r);
          this.merge(arr, l, m, r); 
      } 
     
     },
    merge(arr,l,m,r){
      var i, j, k; 
      var n1 = m - l + 1; 
      var n2 =  r - m; 
      console.log("n2:"+n2);    
      /* create temp arrays */
      var L = [n1];
      var R = [n2]; 
    
      /* Copy data to temp arrays L[] and R[] */
      for (i = 0; i < n1; i++) 
          console.log(arr[l + i].value);
          L[i] = arr[l + i].value; 
      for (j = 0; j < n2-1; j++) 
          console.log(arr[m + 1+ j].value);
          console.log("attempted index"+(m+1+j));
          R[j] = arr[m + 1+ j].value; 
    
      /* Merge the temp arrays back into arr[l..r]*/
      i = 0; // Initial index of first subarray 
      j = 0; // Initial index of second subarray 
      k = l; // Initial index of merged subarray 
      while (i < n1 && j < n2) 
      { 
          if (L[i].value <= R[j].value) 
          { 
              console.log(L[i].value);
              arr[k].value = L[i].value; 
              i++; 
          } 
          else
          { 
              console.log(R[j].value);
              arr[k].value = R[j].value; 
              j++; 
          } 
          k++; 
      } 
    
      /* Copy the remaining elements of L[], if there 
        are any */
      while (i < n1) 
      { 
          console.log("finishingup: "+L[i].value);
          arr[k].value = L[i].value; 
          i++; 
          k++; 
      } 
    
      /* Copy the remaining elements of R[], if there 
        are any */
      while (j < n2) 
      { 
          console.log("finishingup: "+R[j].value);
          arr[k].value = R[j].value; 
          j++; 
          k++; 
      }
      },
    async insertSort(){  

      if(this.playState=="play"){
        this.doneSort();
      }},
    async bubbleSort(){
      var n = this.columns.length;
      var i, j;  
      if(this.playState=="play"){
       this.timer(this.playState);
      }
      for (i = 0; i < n-1; i++){ //for each element in the array
        var length = (this.sorted.length/this.num)*100;
        if(this.playState=="play"){
          document.getElementById('innerGreen').style.width = length + '%';
        }
        if(this.order == "ASC" && this.playState == "play"){ 
          for (j = 0; j < n-i-1; j++) {
            var prevPercentage = (this.sorted.length/this.num)*100;
            var compPercentage = (prevPercentage+(j/(n-i-1)*100)/this.num);
            if(this.playState=="play"){
              document.getElementById('innerGreen').style.width = compPercentage + '%';
            }
            if ((this.columns[j].value > this.columns[j+1].value)  && this.playState == "play")  {
                document.getElementsByClassName('bar')[j].style.backgroundColor="limegreen";
                document.getElementsByClassName('bar')[j+1].style.backgroundColor="red";
                var temp = this.columns[j];
                this.$set(this.columns,j,this.columns[j+1]);
                this.$set(this.columns,j+1,temp);
                await this.sleep();            
            }
          }
            this.sorted.push(document.getElementsByClassName('bar')[j]);
            }else if(this.order == "DESC"  && this.playState == "play"){
              for (j = 0; j < n-i-1; j++) {
              var prevPercentageDesc = (this.sorted.length/this.num)*100;
              var compPercentageDesc = (prevPercentageDesc+(j/(n-i-1)*100)/this.num);
              document.getElementById('innerGreen').style.width = compPercentageDesc + '%';
                  if ((this.columns[j].value < this.columns[j+1].value)  && this.playState == "play")  {
                      document.getElementsByClassName('bar')[j].style.backgroundColor="limegreen";
                      document.getElementsByClassName('bar')[j+1].style.backgroundColor="red";
                      var temp2 = this.columns[j];
                      this.$set(this.columns,j,this.columns[j+1]);
                      this.$set(this.columns,j+1,temp2);
                      await this.sleep();         
                  }
              }
            this.sorted.push(document.getElementsByClassName('bar')[j]);
          }
      }
      if(this.playState=="play"){
        this.doneSort();
      }
      },
    sleep(){
          var ms;
          switch (this.speed) {
            case "Slow":
              ms=1000;
              break;
            case "Medium":
              ms=100;
            break;
            case "Fast":
              ms=20;
            break;
            default:
              break;
          }
          return new Promise(resolve => setTimeout(resolve, ms));
        },
    async timer(opt){
          if(opt == "play"){
            var current = this.time;
            this.time = current+1;
            await this.tick();//wait 1 second (chang to milisecond)
            this.timer(this.playState); //call sell with current state
          }
        },
    tick(){
          if(this.playState == "play"){
            return new Promise(resolve => setTimeout(resolve, 10));
          }
        },
    doneSort(){
          console.log("done!");
          console.log(this.columns);
          //make all green
          document.getElementsByClassName('bar').forEach(element => {
            element.style.backgroundColor = "green";
          });
          this.playState = "done";
          document.getElementById('innerGreen').style.width = 100 + '%';
          this.sorted = [];
          document.getElementById('algoSelect').disabled = false;
          document.getElementById('nInput').disabled = false;
          document.getElementById('ASC').disabled = false;
          document.getElementById('DESC').disabled = false;
        },
    partition(arr,low,high){
        var pivot = arr[high]; // pivot  
        var i = (low - 1); // Index of smaller element 
        var myResult = this.checkDone(this.order);
        if(myResult != "Done"){
        for (var j = low; j <= high - 1; j++)  
        {  
          if(this.order == "ASC"){
            // If current element is smaller than the pivot  
            if (arr[j].value < pivot.value)  
            {   
              document.getElementsByClassName('bar')[j].style.backgroundColor="red";
              if(i>0){
                document.getElementsByClassName('bar')[i].style.backgroundColor="limegreen";
              }
                i++; // increment index of smaller element  
                var t = arr[i];
                this.$set(this.columns,i,arr[j]);
                this.$set(this.columns,j,t);
            } 
          }else{
            // If current element is smaller than the pivot  
            if (arr[j].value > pivot.value)  
            {   
              document.getElementsByClassName('bar')[j].style.backgroundColor="red";
              if(i>0){
                document.getElementsByClassName('bar')[j].style.backgroundColor="limegreen";
              }
                i++; // increment index of smaller element  
                var t2 = arr[i];
                this.$set(this.columns,i,arr[j]);
                this.$set(this.columns,j,t2);
            } 
          }
        }
          var t3 = arr[i + 1];
          this.$set(this.columns,i+1,arr[high]);
          this.$set(this.columns,j,t3);
          var dblCheck = this.checkDone(this.order);
          if(dblCheck == "Done"){
            this.doneSort();
          }else{
            return (i + 1);  
          }
        }else{
          this.doneSort();
        }  
      },
    checkDone(order){
          var holder= this.columns
          var vals = [];
          var sorts = [];
          var good = 0;
          var sorted = holder.concat().sort(function(a,b){
            if(order == "ASC"){
              return a.value-b.value;
            }else{
              return b.value-a.value;
            }
          });
          this.columns.forEach(element => {
            vals.push(element.value);
          });
          sorted.forEach(element => { ///nest inside 3
            sorts.push(element.value);
          });
        vals.forEach((v,index) => {
          if(sorts[index]==v){
            good++;
          }
        });
        if(good == vals.length){
          return "Done";
        }else{
          var perCentage = ( good / vals.length ) *100;
          document.getElementById('innerGreen').style.width = perCentage+ '%';
          return perCentage;
        }
      },}
}
</script>

<style>
#playStateCtrl-cont{
    background-color: #a2b9bc;
    vertical-align: middle;
    height: fit-content;
}
#inner{
    display:flex;
    justify-content: space-between;
    width: 50%;
    margin: auto !important;
}
.opt:hover{
  transform: scale(1.5);
  cursor: pointer;
}
svg{
  margin: 0.75rem !important;
}
</style> 
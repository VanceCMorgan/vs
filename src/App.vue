<template>
  <div id="app">
    <OptionsBar/>
    <PlayStateControls/>
    <Canvas/>
    <ProgressBar/>
    <TimeDisplay/>
  </div>
</template>

<script>
import OptionsBar from './components/OptionsBar.vue'
import PlayStateControls from './components/playStateControls.vue'
import TimeDisplay from './components/TimeDisplay.vue'
import Canvas from './components/Canvas.vue'
import ProgressBar from './components/ProgressBar.vue'
export default {
  name: 'App',
  components: {
    OptionsBar,
    PlayStateControls,
    Canvas,
    ProgressBar,
    TimeDisplay
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0px;
}
</style>

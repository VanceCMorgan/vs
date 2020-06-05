<template>
<div id ="progressBar-cont">
    <div id="progInner">
        <div id="innerGreen"></div>
    </div>
</div>
</template>

<script>
export default {
name:"ProgressBar"
}
</script>

<style>
#progressBar-cont{
    display: flex;
    justify-content: space-around;
    background-color: #a2b9bc;
    z-index: 10;
}
#progInner{
    text-align: center;
    align-content: center;
    height: 0.5vh;
    background-color: #878f99;
    width: 90%;
}
#innerGreen{
    background-color: green;
    width: 0%;
    height:100%;
}
</style>
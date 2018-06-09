<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "../node_modules/leaflet/dist/leaflet.css";
body {
  margin: 0px;
  height: 100%;
  font-family: Helvetica, Verdana, sans-serif;
}
.container{
  height: 100%;
  display: flex;
}

#app{
  height: 100%;
}
.left_div {
  width:50%;
  
}

.right_div{
  width:50%;
}
</style>

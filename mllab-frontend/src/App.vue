<template>
  <div id="app">
    <div class="side">
      <a href="#">Dashboard</a>
      <a href="#">Dashboard</a>
    </div>
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

.side{
  top: 0;
  left: 0;
  height:100%;
  width:150px;
  float:left;
}

.side a {
  padding: 5px 10px 5px 10px;
  text-decoration: none;
  display: block;
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

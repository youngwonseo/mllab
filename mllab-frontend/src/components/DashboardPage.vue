<template>
  <div class="container">
    <div class="left_div">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      </l-map>
    </div>
    <div class="right_div">
      <ul class="list-group">
        <li class="list-group-item">First item</li>
        <li class="list-group-item">Second item</li>
        <li class="list-group-item">Third item</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
export default {
  name: 'Dashboard',
  data () {
    return {
      zoom:13,
      center: L.latLng(35.136151, 129.101697),
      url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(35.136151, 129.101697),
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  created() {
      console.log('hhh')
  }
}
</script>

<style scoped>
.list-group {
  padding-left: 0;
  margin-bottom: 20px;
}
ol, ul {
  margin-top: 0;
  margin-bottom: 10px;
}
</style>

<template>
  <div class="container">
    <div class="left_div">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker
          v-for="device in devices"
          :key="device.id"
          :visible="device.visible"
          :draggable="device.draggable"
          :lat-lng="device.position"
          @click="alert(device)">
          <l-popup :content="device.tooltip" />
          <l-tooltip :content="device.tooltip" />
        </l-marker>
      </l-map>
    </div>
    <div class="right_div">
      <div class="list-group">
        <div v-for="device in getDevices" v-bind:key="device.id" class="list-item">
          {{device.id}}
          <chart
            :options="device.data"
            :init-options="initOptions"
            ref="bar"
            theme="ovilia-green"
            auto-resize/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts'
import '../../node_modules/vue-echarts/node_modules/echarts/lib/chart/line'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/component/polar'

import { LMap, LTileLayer, LMarker, LPolyline, LLayerGroup, LTooltip, LPopup, LControlZoom, LControlAttribution, LControlScale, LControlLayers } from 'vue2-leaflet'
export default {
  name: 'Dashboard',
  computed: {
    getDevices () {
      return this.devices
    }
  },
  data () {
    return {
      zoom: 13,
      center: [35.171398, 129.128879],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      devices: [
        {
          id: '111111',
          position: {lat: 35.171398, lng: 129.128879},
          name: '디바이스1',
          type: 'Raspberry Pi',
          tooltip: 'hi',
          draggable: true,
          visible: true,
          data: this.getBar()
        },
        {
          id: '111112',
          position: {lat: 35.136151, lng: 129.101697},
          name: '디바이스2',
          type: 'Raspberry Pi',
          tooltip: 'hi',
          draggable: true,
          visible: true,
          data: this.getBar()
        },
        {
          id: '111113',
          position: {lat: 35.136151, lng: 129.101697},
          name: '디바이스3',
          type: 'Raspberry Pi',
          tooltip: 'hi',
          draggable: true,
          visible: true,
          data: this.getBar()
        }
      ]
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPolyline,
    LLayerGroup,
    LTooltip,
    LPopup,
    LControlZoom,
    LControlAttribution,
    LControlScale,
    LControlLayers,
    'chart': ECharts
  },
  methods: {
    alert (item) {
      // alert('this is ' + JSON.stringify(item));
    },
    getBar () {
      return {
        xAxis: {
          type: 'category'
          // data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          type: 'line',
          smooth: false
        }]
      }
    },
    randomize () {
      return [0, 0, 0].map(v => {
        return Math.round(300 + Math.random() * 700) / 10
      })
    }
  },
  mounted () {
    setInterval(()=>{
      //console.log(this.devices)
      for (var i = 0, n = this.devices.length; i < n; i++) {
        for (var j = 0; j < 1; j++) {
          // console.log(this.devices[i].data.series[j].data.shift())
          this.devices[i].data.series[j].data.shift()
          this.devices[i].data.series[j].data.push(Math.random() * 700)
        }
      }     
    },500)
  }
}
</script>

<style scoped>
.list-group {
  height:100%;
  overflow-y:auto;
  padding-left: 0;
}

.list-item {
  margin: 10px;
  padding: 5px;
  border: 1px solid black;
}

.echarts {
  height: 300px;
}
</style>

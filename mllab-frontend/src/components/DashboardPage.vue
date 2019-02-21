<template>
  <div class="container">
    <div class="left-div">
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
    <div class="right-div">
      <div class="right-top">
        dsd
      </div>
      <div class="list-group">

        <div v-for="device in getDevices" v-bind:key="device.id" class="list-item">
          <div class="">
            {{device.id}}, {{device.name}}, {{device.type}}, {{device.type}}
          </div>
          <div class=""></div>
          <div class=""></div>
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
        },
        {
          id: '111114',
          position: {lat: 35.136151, lng: 129.101697},
          name: '디바이스4',
          type: 'Raspberry Pi',
          tooltip: 'hi',
          draggable: true,
          visible: true,
          data: this.getBar()
        },
        {
          id: '111115',
          position: {lat: 35.136151, lng: 129.101697},
          name: '디바이스5',
          type: 'Raspberry Pi',
          tooltip: 'hi',
          draggable: true,
          visible: true,
          data: this.getBar()
        },
        {
          id: '111116',
          position: {lat: 35.136151, lng: 129.101697},
          name: '디바이스6',
          type: 'Raspberry Pi',
          tooltip: 'hi',
          draggable: true,
          visible: true,
          data: this.getBar()
        },
        {
          id: '111117',
          position: {lat: 35.136151, lng: 129.101697},
          name: '디바이스7',
          type: 'Raspberry Pi',
          tooltip: 'hi',
          draggable: true,
          visible: true,
          data: this.getBar()
        },
        {
          id: '111118',
          position: {lat: 35.136151, lng: 129.101697},
          name: '디바이스8',
          type: 'Raspberry Pi',
          tooltip: 'hi',
          draggable: true,
          visible: true,
          data: this.getBar()
        },
        {
          id: '111119',
          position: {lat: 35.136151, lng: 129.101697},
          name: '디바이스9',
          type: 'Raspberry Pi',
          tooltip: 'hi',
          draggable: true,
          visible: true,
          data: this.getBar()
        },
        {
          id: '111120',
          position: {lat: 35.136151, lng: 129.101697},
          name: '디바이스10',
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
        color: '#28BBAB',
        grid: {
          left: 30,
          top: 30,
          right: 30,
          bottom: 30
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            color: '#ffffff'
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#ffffff'
          }
        },
        series: [{
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0
          ],
          type: 'line',
          smooth: false,
          animation: false
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
    setInterval(() => {
      // console.log(this.devices)
      for (var i = 0, n = this.devices.length; i < n; i++) {
        for (var j = 0; j < 1; j++) {
          // console.log(this.devices[i].data.series[j].data.shift())
          this.devices[i].data.series[j].data.shift()
          this.devices[i].data.series[j].data.push(Math.random() * 700)
        }
      }
    }, 500)
  }
}
</script>

<style scoped>
.container{
  height: 100%;
  display: flex;
}

.left-div {
  width:50%;
}

.right-top{
  position: absolute;
  height: 150px;
}

.right-div{
  height: 100%;
  overflow-y: auto;
  width: 50%;
}

.list-group {
  margin-top: 150px;
  padding-left: 0;
}

.list-item {
  background-color: #31334a;
  margin: 10px;
  padding: 5px;
  border: 1px solid black;
}

.echarts {
  height: 200px;
}
</style>

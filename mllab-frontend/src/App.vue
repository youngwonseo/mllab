<template>
  <el-container>
    <!-- <el-header>Header</el-header> -->
    <el-container>
      <el-aside width="200px">MLLAB</el-aside>
      <el-container>
        <el-main>
          <router-view/>
        </el-main>
        <!-- <el-footer>Footer</el-footer> -->
      </el-container>
    </el-container>
  </el-container>
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
  background-color:#202234;
}

.el-header, .el-footer {
    color: #fff;
    text-align: center;
    line-height: 60px;
}

.el-aside {
  color: #fff;
  background-color:#31334a;
  text-align: center;
  line-height: 50px;
}

.el-main {
  padding: 0px;
  color: #fff;
  text-align: center;
}

body > .el-container {
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

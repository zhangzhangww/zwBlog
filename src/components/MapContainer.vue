<script setup>
import { onMounted, onUnmounted } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";

let map = null;
const district = ref(null);
const polygons = ref([]);
const citySelect = ref(null);
const districtSelect = ref(null);
const areaSelect = ref(null);
const citycode = ref(null);

const weather1 = ref({
  province: "",
  city: "",
  weather: "",
  temperature: "",
  windDirection: "",
  windPower: "",
  humidity: "",
  reportTime: "",
});

onMounted(() => {
  window._AMapSecurityConfig = {
    securityJsCode: "d1274601b70408880591022cf50737e9",
  };
  AMapLoader.load({
    key: "68b88fbfa919c7dded550e13ac4a1bee", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      "AMap.Scale",
      "AMap.AutoComplete",
      "AMap.PlaceSearch",
      "AMap.Geolocation",
      "AMap.Weather",
      "AMap.DistrictSearch",
    ], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      map = new AMap.Map("container", {
        // 设置地图容器id
        viewMode: "3D", // 是否为3D地图模式
        zoom: 11, // 初始化地图级别
       
      });
      map.addControl(new AMap.Scale());
      map.addControl(new AMap.Geolocation());

      var weather = new AMap.Weather();
      //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
      const getWeather = (city) => {
        weather.getLive(city, function (err, data) {
          weather1.value = data;
        });
      };
      getWeather("金水区");

      var autoOptions = {
        input: "tipinput",
      };
      var auto = new AMap.Autocomplete(autoOptions);
      var placeSearch = new AMap.PlaceSearch({
        map: map,
      }); //构造地点查询类
      auto.on("select", select); //注册监听，当选中某条记录时会触发
      function select(e) {
        placeSearch.setCity(e.poi.adcode);
        placeSearch.search(e.poi.name); //关键字查询查询
        getWeather(e.poi.name);
      }
      // <下属行政区查询---------------------------------------------------------------------------------------------------------------------->
     

      // <下属行政区查询---------------------------------------------------------------------------------------------------------------------->
    })
    .catch((e) => {
      console.log(e);
    });
  // <下属行政区查询---------------------------------------------------------------------------------------------------------------------->



  // <下属行政区查询---------------------------------------------------------------------------------------------------------------------->
});

onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <div class="mapbox">

    <div id="container"></div>
    <div id="myPageTop">
      <div>请输入关键字：</div>
      <input type="text" id="tipinput">
      <button @click="seacher(autoOptions.input)">搜索</button>
    </div>
  
    <div class="info">
      <div class="shark">
        <h4>实时天气({{ weather1.province }}--{{ weather1.city}})</h4>
        <p>城市/区：{{weather1.city }}</p>
        <p>天气：{{weather1.weather }}</p>
        <p>温度：{{weather1.temperature }}</p>
        <p>风向：{{weather1.windDirection }}</p>
        <p>风力：{{weather1.windPower }}级</p>
        <p>空气湿度：{{weather1.humidity }}</p>
        <p>发布时间：{{weather1.reportTime }}</p>
      </div>
    </div>
  </div>

 

</template>

<style scoped>
.mapbox{
  margin-top: 30px;
  position: relative;
}
.info {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  position: fixed;
  top: 16rem;
  background-color: white;
  width: auto;
  min-width: 20rem;
  border-width: 0;
  right: 1rem;
  box-shadow: 0 2px 6px 0 rgba(114, 124, 245, 0.5);
  font-size: 12px;
}
</style>
<style scoped>
#container {
  width: 100%;
  height: 100vh;
}



.button-group {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 12px;
  padding: 10px;
}

.button-group .button {
  height: 28px;
  line-height: 28px;
  background-color: #0d9bf2;
  color: #fff;
  border: 0;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 3px;
  margin-bottom: 4px;
  cursor: pointer;
}
.button-group .inputtext {
  height: 26px;
  line-height: 26px;
  border: 1px;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 3px;
  margin-bottom: 4px;
  cursor: pointer;
}

#tip {
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  font-size: 12px;
  right: 10px;
  top: 20px;
  border-radius: 3px;
  border: 1px solid #ccc;
  line-height: 30px;
}

.amap-info-content {
  font-size: 12px;
}

#myPageTop {
  position: absolute;
  top: 5px;
  left: 10px;
  background: #fff none repeat scroll 0 0;
  border: 1px solid #ccc;
  margin: 10px auto;
  padding: 6px;
  font-family: "Microsoft Yahei", "微软雅黑", "Pinghei";
  font-size: 14px;
}
#myPageTop label {
  margin: 0 20px 0 0;
  color: #666666;
  font-weight: normal;
}
#myPageTop input {
  width: 170px;
}
#myPageTop button {
  margin-left: 12px;
  height: 32px;
  background-color: #0d9bf2;
  color: #fff;
  border: 0;
  outline: none;

  border-radius: 3px;

  cursor: pointer;
}
#myPageTop .column1 {
  padding-left: 0;
}
#myPageTop .column2 {
  padding-left: 25px;
}

.input-textarea {
  color: grey;
  height: 8em;
  overflow: auto;
  border-radius: 0.4rem;
  border: 1px solid #ced4da;
  margin-bottom: 1rem;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  font-weight: 300;
  color: #111213;
}

hr {
  margin: 0.5rem 0;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

label {
  display: inline-block;
  margin-bottom: 0.4rem;
}

label,
.btn {
  margin-left: 0;
  font-size: 1rem;
}

button,
input,
select {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  overflow: visible;
  text-transform: none;
}

[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0 0.5rem 0 0;
}

h4 {
  font-family: inherit;
  line-height: 1.8;
  font-weight: 300;
  color: inherit;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: transparent;
  background-image: none;
  color: #25a5f7;
  border-color: #25a5f7;
  padding: 0.25rem 0.5rem;
  line-height: 1.5;
  border-radius: 1rem;
  -webkit-appearance: button;
  cursor: pointer;
}

.btn:hover {
  color: #fff;
  background-color: #25a5f7;
  border-color: #25a5f7;
}

.btn:hover {
  text-decoration: none;
}

.input-item {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 3rem;
}

.input-item:last-child {
  margin-bottom: 0;
}

.input-item > select,
.input-item > input[type="text"],
.input-item > input[type="date"] {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  width: 1%;
  margin-bottom: 0;
}

.input-item > select:not(:last-child),
.input-item > input[type="text"]:not(:last-child),
.input-item > input[type="date"]:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-item > select:not(:first-child),
.input-item > input[type="text"]:not(:first-child),
.input-item > input[type="date"]:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-item-prepend {
  margin-right: -1px;
}

.input-item-text,
input[type="text"],
input[type="date"],
select {
  height: calc(2.2rem + 2px);
}

.input-item-text {
  width: 6rem;
  text-align: justify;
  padding: 0.4rem 0.7rem;
  display: inline-block;
  text-justify: distribute-all-lines;
  /*ie6-8*/
  text-align-last: justify;
  /* ie9*/
  -moz-text-align-last: justify;
  /*ff*/
  -webkit-text-align-last: justify;
  /*chrome 20+*/
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.input-item-text input[type="checkbox"],
.input-item-text input[type="radio"] {
  margin-top: 0;
}

.input-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
  width: 22rem;
  border-width: 0;
  border-radius: 0.4rem;
  box-shadow: 0 2px 6px 0 rgba(114, 124, 245, 0.5);
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 0.75rem 1.25rem;
}

.input-text {
  line-height: 2rem;
  margin-right: 2rem;
}
</style>

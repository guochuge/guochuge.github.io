/**
 * 把echarts开发成vue插件
 * @param {*} app
 * @param {*} options
 */

// 导入echarts
import echarts from "echarts";
// 导入地图js文件
import 'echarts/map/js/china';

const chinaMap = (id, data) => {
  // 1. 获取容器
  const myChart = echarts.init(document.getElementById(id));
  // 2. 书写配置
  const option = {
    title: {
      text: '国内现存确诊',
      subtext: 'Data from github django_covid19',
      sublink: 'https://github.com/leafcoder/django-covid19',
      left: 'center'
    },
    tooltip: {
      // 悬浮弹框
      trigger: "item",
      enterable: true,
      formatter(item) {
        let data = item.data
        let txt = `地区：${data.name}</br>确诊：${data.value}`
        return txt;
      },
      showDelay: 0,
      transitionDuration: 0.2
    },
    visualMap: {
      // 映射高亮颜色
      orient: "vertical", // 垂直  vertical   水平  horizontal
      type: "piecewise", //  分段/离散
      bottom: 100,
      pieces: [
        // 配置颜色区间
        {
          min: 0,
          max: 0,
          color: "rgb(246,246,246)"
        },
        {
          min: 1,
          max: 9,
          color: "rgb(255,229,219)"
        },
        {
          min: 10,
          max: 99,
          color: "rgb(255,153,133)"
        },
        {
          min: 100,
          max: 999,
          color: "rgb(245,117,103)"
        },
        {
          min: 1000,
          max: 9999,
          color: "rgb(230,69,70)"
        },
        {
          min: 10000,
          color: "rgb(184,9,9)"
        }
      ]
    },
    series: [
      {
        // name: "省",
        type: "map", // 地图 line  bar  map
        map: "china", // 中国地图，需要引入地图china.js
        roam: false,
        zoom: 1.0,
        aspectScale: 0.75,
        top: 40,
        layoutCenter: ["5%", "5%"],
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 8
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: "rgba(0, 255, 236, 0)",
            borderColor: "rgba(0, 0, 0, 0.2)"
          },
          emphasis: {
            // 选中的区域颜色及阴影效果等
            areaColor: "rgba(255, 180, 0, 0.8)",
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0
          }
        },
        data: data
      }
    ]
  };
  // 3. 绘制图表
  myChart.setOption(option);
}

const install = (Vue, options) => {
  Vue.prototype.$myChart = chinaMap
};

export default install;

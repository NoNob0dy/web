#### Basic ECharts Configuration

```vue
<!--EChartsComponent.vue-->
<template>
    <div id="myChart" :style="chart"></div>
</template>

<script>
    export default {
        name: "EChartsComponent",
        data() {
            return {
                chart: {
                    width: "999px",
                    height: "520px",
                    maxHeight: "1000px"
                    /*I don't know why we need to 
                    set the 'max-height' attribute, 
                    which could erase system's warning*/
                }
            }
        }
    };
</script>

<style></style>
```

```Vue
<!--app.vue-->
<template>
  <div id="app">
    <ECharts />
  </div>
</template>

<script>
  import ECharts from "./components/EChartsComponent.vue"
  export default {
    name: "App",
    components: {
      ECharts,
    }
  };
</script>

<style></style>
```

```js
/*./echarts/index.js*/
const EChartsOption = {
    /*ECharts Types*/
}
export default EChartsOption
```

#### ECharts Types

- ```js
  /*bar*/
  option = {
      xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
      },
        yAxis: {},
        series: [{
            type: 'bar',
            data: [23, 24, 18, 25, 27]
            stack: 'Total'
          },{
            type: 'bar',
            data: [16, 14, 9, 13, 14]
            stack: 'Total'
          },
        ]
  }
  ```

- ```js
  /*line*/
  option = {
    	xAxis: {
      	type: 'category',
      	data: ['L', 'O', 'V', 'E']
    	},
    	yAxis: {
      	type: 'value'
    	},
      series: [{
      	data: [1, 3, 1, 4],
          type: 'line'
        }, {
      	data: ['-', 9, 9, '-'],
          type: 'line'
        },
      ]
  };
  ```

- ```js
  /*pie*/
  option = {
  	series: [{
  		type: 'pie',
        	data: [{
            	value: 999,
            	name: 'I love'
          }, {
            	value: 1314,
            	name: 'zfm'
          }]
      }]
  };
  ```

- ```js
  /*scatter*/
  option = {
    	xAxis: {
      	data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu']
    	},
    	yAxis: {},
    	series: [{
        	type: 'scatter',
        	data: [220, 182, 191, 234, 290, 330, 310]
      }]
  };
  ```

```js
/*main.js*/
import Vue from "vue"
import App from "./App.vue"
import * as echarts from 'echarts'
import EChartsOption from "./echarts"

const app = new Vue({
  render: h => h(App),
  mounted() {
    this.$nextTick(() => {
      let ECharts = echarts.init(
          document.getElementById("myChart")
      );
      ECharts.setOption(EChartsOption);
    }) 
  }
});
app.$mount("#app");
```

#### Extremely Annoying

```html
<!DOCTYPE html>
<html lang="zh-CN" style="height: 100%">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>学海无涯</title>
    <script src="./js/echarts.min.js"></script>
    <link rel="stylesheet" href="./css/style.css" />
    <script src="./js/axios.min.js"></script>
</head>

<body style="height: 100%; margin: 0">
    <!-- tab 栏 -->
    <div class="container">
        <div class="tabs">
            <input type="radio" id="week" name="tabs" checked
                   onclick="weekTab()" />
            <label class="tab" for="week">周</label>
            <input type="radio" id="month" name="tabs" 
                   onclick="monthTab()" />
            <label class="tab" for="month">月</label>
            <span class="glider"></span>
        </div>
    </div>
    <div id="container" style="width: 80%; height: 80%; 
                               margin: 40px auto 0"></div>
    <script type="text/javascript">
        var xData = {
            week: [],
            month: []
        }
        var monthData = [], weekData = [];
        var dom = document.getElementById("container");
        var myChart = echarts.init(dom, null, {
                renderer: "canvas",
                useDirtyRect: false,
            });
        var option = {
            title: {
                text: "学习时长统计图",
            },
            legend: {},
            xAxis: {
                // x 轴数据
                type: "category",
                data: []
            },
            yAxis: {
                type: "value",
                name: "分钟",
                axisLabel: {
                    formatter: "{value}",
                },
            },
            series: [
                // y 轴数据
                {
                    data: [],
                    type: "bar",
                },
            ],
        };
        initEcharts();

        async function initEcharts() {
            await axios.get("./data.json").then(res => {
                for (key in res.data["data"]) {
                    xData.month.push(key);
                    let sum = 0, total = 0, cnt = 0;
                    let data = res.data["data"][key];
                    for (let i = 1; i <= data.length; i++) {
                        sum += data[i - 1];
                        if (i % 7 == 0 || i == data.length) {
                            weekData.push(sum);
                            xData.week.push(`
                            	${key}第${++cnt}周
                            `)
                            total += sum
                            sum = 0;
                        }
                    }
                    monthData.push(total);
                }
            })
            if (option && typeof option === "object") {
                // 设置图表
                await weekTab();
            }
            window.addEventListener("resize", myChart.resize);
        }

        function weekTab() {
            option.xAxis.data = xData.week;
            option.series[0].data = weekData;
            myChart.setOption(option);
        }
        function monthTab() {
            option.xAxis.data = xData.month;
            option.series[0].data = monthData;
            myChart.setOption(option);
        }
    </script>
</body>

</html>
```


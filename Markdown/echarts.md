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
            stack: 'x'
          },{
            type: 'bar',
            data: [16, 14, 9, 13, 14]
            stack: 'x'
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

#### 


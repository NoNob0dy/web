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
                    height: "999px"
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
    title: {
        text: 'NationAward',
    },
    grid: {
    	show: true,
        top: '10px',
	},
    xAsix:   {
    
	}
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [ /*......*/ ]
}

export default EChartsOption
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

#### ECharts Series

- ```
  
  ```

- ```
  
  ```

- ```
  
  ```

- ```
  
  ```

- ```
  
  ```

- ```
  
  ```

- ```
  
  ```

  




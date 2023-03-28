<template>
    <div ref="myChart"></div>
</template>

<style></style>

<script>
    import echarts from 'echarts'
    import { ref, nextTick } from 'vue'
    const myChart = ref('myChart');
    const option = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    console.log(myChart.value);
    nextTick(() => { 
        let ECharts = echarts.init(myChart.value);
        ECharts.setOption(option);
    })
    export default {
        name: "EChartComponent"
    };
</script>

<style></style>
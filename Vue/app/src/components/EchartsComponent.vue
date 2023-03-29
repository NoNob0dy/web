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
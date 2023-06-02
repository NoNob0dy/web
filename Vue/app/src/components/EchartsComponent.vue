<template>
   <div id="myChart" :style="chart"></div>
</template>

<script>
export default {
   name: "EChartsComponent",
   data() {
      return {
         chart: {
            width: "520px",
            height: "520px",
            maxHeight: "1000px"
         }
      }
   }
};
</script>

<style></style>
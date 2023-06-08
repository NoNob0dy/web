<template>
  <div class="block">
    <span class="demonstration">请为外卖评分: </span>
    <ul class="rate-list">
      <li>
        <!-- TODO: 补全 el-rate 属性 -->
        送餐速度：<el-rate v-model="speed" show-score="true" @change="rate"></el-rate>
      </li>
      <li>
        <!-- TODO: 补全 el-rate 属性 -->
        外卖口味：<el-rate v-model="flavour" show-score="true" @change="rate"></el-rate>
      </li>
      <li>
        <!-- TODO: 补全 el-rate 属性 -->
        外卖包装：<el-rate v-model="pack" show-score="true" @change="rate"></el-rate>
      </li>
    </ul>
  </div>
</template>
<style>
.block {
  border: 1px solid #c7c5c5;
  padding: 10px;
}

.rate-list {
  list-style: none;
  padding-inline-start: 20px;
  margin-block-start: 10px;
  margin-block-end: 10px;
}

.el-rate {
  display: inline-block;
}
</style>

<script>
module.exports = {
  data() {
    return {
      speed: 0, // 送餐速度
      flavour: 0, // 外卖口味
      pack: 0 // 外卖包装
    }
  },
  /* TODO：待补充代码 */
  methods: {
    rate() {
      if (this.speed != 0 && this.flavour != 0 && this.pack != 0) {
        this.$emit('change', {
          speed: this.speed,
          flavour: this.flavour,
          pack: this.pack
        })
      }
    }
  }
}
</script>

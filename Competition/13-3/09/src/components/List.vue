<template>
  <div class="list">
    <div v-for="item in list" :key="item.id" class="list-item">
      <img class="list-pic" :src="item.imgUrl" />
      <div class="list-info">
        <p class="title">{{ item.title }}</p>
        <p class="desc">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../node_modules/axios/dist/axios";
let data = [];
axios.get("static/data/list.json").then((res) => {
  for (let i = 0; i < res.data.data.listInfo.length; i++) {
    data.push(res.data.data.listInfo[i]);
  }
});

export default {
  data() {
    return {
      list: data,
    };
  },
};

</script>

<style scoped>
.list-item {
  padding: 20px 0;
  overflow: hidden;
  border-bottom: 1px solid #dcdcdc;
}
.list-pic {
  float: right;
  width: 125px;
  height: 100px;
  display: block;
  border-radius: 4px;
}
.list-info {
  width: 500px;
  float: left;
}
.title {
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
.desc {
  line-height: 22px;
  font-size: 13px;
  color: #999;
}
</style>

<template>
  <div class="list">
<<<<<<< HEAD
    <div v-for="item in list" :key="item.id" class="list-item">
      <img class="list-pic" :src="item.imgUrl" />
      <div class="list-info">
        <p class="title">{{ item.title }}</p>
        <p class="desc">{{ item.desc }}</p>
=======
    <div
      class="list-item"
    >
      <img
        class='list-pic'
   src='/static/images/t1.jpg'
      />
      <div class="list-info">
        <p class='title'>你有什么道理幸好你早就知道的？</p>
        <p class='desc'>镜像问题：你有什么道理后悔没有早点知道？ 关联问题：你有什么因严重贪图短期利益而损失巨大的事？</p>
>>>>>>> bd545d0c982368f185922076aa4c310baccee200
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
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

=======
export default {
  data() {
    return {};
  }
};
>>>>>>> bd545d0c982368f185922076aa4c310baccee200
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

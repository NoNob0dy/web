<!-- TODO: 补充拖拽事件，请不要改动任何 id 属性 -->
<template>
  <div class="container">
    <div class="good-list">
      <div v-for="good in goods" :key="good.name" class="good">
        <img
          :src="good.cover"
          draggable="true"
          @dragstart="
            () => {
              event.dataTransfer.setData('good', good.name);
            }
          "
        />
        <span>{{ good.name }}</span>
        <span>￥{{ good.price }}</span>
      </div>
    </div>
    <div id="trolley" class="trolley" @dragover.prevent @drop="addGood()">
      <span id="bought" class="bought" v-if="bought.length !== 0">{{
        bought.length
      }}</span>
      <img src="./images/trolley.jpeg" />
    </div>
    <div class="result">
      <div>
        购物车商品：<span id="goods">{{ goodsDetail }}</span>
      </div>
      <div>
        购物车商品总计：<span id="total">{{ totalPrice }}</span>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  width: 650px;
  position: relative;
  height: 600px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
}
.good-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
}
.good {
  width: 150px;
  height: 160px;
  border: 1px solid rgb(52, 52, 52);
  border-radius: 5px;
  padding: 5px;
}
.good:hover {
  border: 2px solid rgb(52, 52, 52);
}

.good img {
  width: 100%;
  height: 120px;
}
.trolley {
  position: absolute;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #f4f4f4;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 100px;
}

.trolley img {
  width: 40px;
  height: 40px;
  pointer-events: none;
}

.bought {
  width: 16px;
  height: 16px;
  background-color: crimson;
  color: white;
  position: absolute;
  right: 8px;
  top: 10px;
  border-radius: 50%;
  text-align: center;
  line-height: 15px;
  pointer-events: none;
}
.result {
  width: 100%;
  min-height: 80px;
  border: 1px solid;
  margin-top: 20px;
  padding: 10px;
}
</style>
<script>
module.exports = {
  data() {
    return {
      goods: [
        {
          name: "畅销书",
          price: 30,
          cover: "./images/book.jpeg",
        },
        {
          name: "收纳箱",
          price: 60,
          cover: "./images/box.jpeg",
        },
        {
          name: "纸巾",
          price: 20,
          cover: "./images/paper.jpeg",
        },
        {
          name: "电视",
          price: 1000,
          cover: "./images/tv.jpg",
        },
      ],
      bought: [],
      cnt: [0, 0, 0, 0],
    };
  },
  // TODO: 请补充实现代码
  computed: {
    totalPrice() {
      let price = 0;
      for (let i = 0; i < this.bought.length; i++) {
        price += this.bought[i].price;
      }
      return price;
    },
    goodsDetail() {
      let template = new String();
      for (let i = 0; i < this.bought.length; i++) {
        let name = this.bought[i].name;
        if (!template.includes(name)) {
          let num;
          for (item in goods) {
              if (name == this.goods[item].name) {
                num = item;
                break;
              }
          }
          template += `${name}*${this.cnt[num]} `;
        }
      }
      return template;
    },
  },
  methods: {
    getGood(goods, goodName, cnt) {
      for (let i = 0; i < goods.length; i++) {
        if (goods[i].name == goodName) {
          cnt[i]++;
          return goods[i];
        }
      }
    },
    addGood() {
      let cnt = this.cnt;
      (goods = this.goods),
        (bought = this.bought),
        (goodName = event.dataTransfer.getData("good"));
      bought.push(this.getGood(goods, goodName, cnt));
    }
  },
};
</script>
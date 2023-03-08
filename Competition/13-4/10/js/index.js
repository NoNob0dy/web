const app = new Vue({
  el: "#app",
  data() {
    return {
      search: "",
      list: [],
      filtered: []
    }
  },
  created() {
    axios('data.json').then(res => {
      for (item in res.data) {
        this.list.push(res.data[item]);
      }
    });
  },
  methods: {
    init() {
      this.filtered = this.list;
    },

    listFilter() {
      if (this.search == "") {
        return;
      } else {
        //为什么this.filterd = []的位置会影响页面渲染呢？是因为keyup事件吗？
        this.filtered = [];
        let flag = false, list = this.list, filtered = this.filtered;
        for (father in list) {
          flag = false;
          if (this.ifSelected(list[father].meta.title)) {
            flag = true;
          }
          for (child in list[father].children) {
            if (this.ifSelected(list[father].children[child].meta.title)) {
              flag = true;
            }
          }
          if (flag) {
            filtered.push(list[father]);
          }
        }
        if (!flag) {
          this.init();
        }
      }
    },

    ifSelected(title) {
      if (title.includes(this.search) && this.search != "") {
        return true;
      } else {
        return false;
      }
    },

    selectedStyle(title) {
      if (this.ifSelected(title)) {
        return "backgroundColor: yellow";
      } else {
        return "";
      }
    }
  }
});

app.init();
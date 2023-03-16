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
        this.init();
        return;
      } else {
        let flag = false;
        this.filtered = [];
        for (father in this.list) {
          flag = false;
          if (this.ifSelected(this.list[father].meta.title)) {
            flag = true;
          }
          for (child in this.list[father].children) {
            if (this.ifSelected(this.list[father].children[child].meta.title)) {
              flag = true;
            }
          }
          if (flag) {
            this.filtered.push(this.list[father]);
          }
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
  },
  watch: {
    search() {
      this.listFilter();
    }
  },
});

app.init();
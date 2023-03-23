##### Vue

```javascript
var childComponent = {
    template: tags
};
Vue.component('parentComponent', {
    props: {},
    template: tags,
});
new Vue({
    el: '#app',
    components: {
        template: component
    },
    data() {
        return {
            list: []
        }
    },
    created() {
		axios('.json').then(res => {
            for (item in res.data) {
                this.list.push(res.data[item]);
            }
        });
    },
    computed() {
        return {
			getter: {},
            setter: {}
        }
    },
    watch() {
        return {
            list: () => {}
        }
    },
    filters() {
    	return {
			listFilter(newVal, oldVal) {}
        }
    }
    methods() {
    	return {}
	}
});
```


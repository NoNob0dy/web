##### Vue

```html
<div id="app">
    <div @click="changeStr(); setStr();">
        {{ str | strFilter }}
        <br>{{ newStr }}
    </div>
</div>
<script>
    var childComponent = {
        template: tags
    };
    Vue.component('parentComponent', {
        props: {
			
        },
        template: tags,
        data() {
            return {}
        }
    });
    var app = new Vue({
        el: '#app',
        components: {
            template: component
        },
        data() {
            return {
                str: "I'm den21s"
            }
        },
        created() {
            axios('.json').then(res => {
                for (item in res.data) {
                    this.list.push(res.data[item]);
                }
            });
        },
        computed: {
            newStr: { 
                get() {
                    alert("Changed");  
                    return this.str + ", I love zfm";     
                },
                set(newVal) {
                    alert("Assigned");
                    this.str = newVal;
                }
            }
        },
        watch: {
            str: (newVal, oldVal) => {
                alert("I'm watching");
            }
        },
        filters: {
            //useage: str | strFilter
            strFilter: (val) => {
                return val.toLowerCase();
            }    
        },
        methods: {
            changeStr() {
                alert("changeStr");
                this.str = this.str + ", 999";
            },
            setStr() {
                alert("AssignStr");
                this.newStr = "I love zfm";
            }   
        }
    });
</script>
```




##### Vue

```html
<div id="app">
    <div @click="changeStr(); setStr();">
        {{ str | strFilter }}
        <br>{{ newStr }}
    </div>
    <div v-for='item in list' :key="item.id">
    	<Global :content="item.content" @send="receive"/>
        <!--when we call a function in 'methods',
        just use it's name instead of calling function
        which won't send the parameter you need*/-->
    </div>
    <Local />
</div>
<script>
    var localComponent = {
        template: `<div>I'm child Component</div>`
    };
    Vue.component('Global', {
        props: {
            "content": String
        },
        template: `
        	<span @click="$emit('send', content)">
            	{{ content }}
    		</span>
        `,
        data() {
            return {}
        },
    });
    var app = new Vue({
        el: '#app',
        data() {
            return {
                list: [],
                str: "I'm den21s"
            }
        },
        created() {
            axios('./data.json').then(res => {
                for (item in res.data) {
                    this.list.push(res.data[item]);
                }
            });
        },
        components: {
            "Local": localComponent
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
            /*though you don't sent any parameter,
            you need to explicitly provide parameters
            interface to accept implicitly transmitted data*/
            changeStr() {
                alert("changeStr");
                this.str = this.str + ", 999";
            },
            setStr() {
                alert("AssignStr");
                this.newStr = "I love zfm";
            },
            receive(msg) {
                alert(msg);
            }
        }
    });
</script>
```

#### SFC (Singal File Component)

```html
<template></template>
<script>
    export default {
        
    }
</script>
<style></style>
```

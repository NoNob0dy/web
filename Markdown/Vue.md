#### Vue

```html
<!--index.html-->
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
                this.list = res.data;
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
            str(newVal, oldVal)  {
                alert("I'm watching");
            }
        },
        filters: {
            //useage: str | strFilter
            strFilter(val) {
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

#### SFC & v-order

```vue
<!--Singal File Component-->
<template>
	<Component />
    <div :class="[
                 	'nationOne', 
                 	'nationTwo'
                 ]"
         :style="{ backgroundColor: 'green' }"></div>
    <div :class="{
                 	'nationOne': ifBind[0], 
                 	'nationTwo': ifBind[1], 
                 }"
         :style="{ backgroundColor: 'red' }"></div>
</template>
<script>
    import Component from *.vue
    export default {
        data() {
            return {
                ifBind: [true, false]
            }
        }
    }
</script>
<style>
    .nationOne { 
    	width: 100px;
        height: 100px;
    }
    .nationTwo {
        width: 200px;
        height: 200px;
    }
</style>
```

#### Router

```vue
<!--RouterComponent.vue-->
<template>
    <div id="router">
        <router-link to="/">Go to Home</router-link>
        <router-link to="/award">Go to Award</router-link>
        <router-view></router-view>
    </div>
</template>
  
<script>
    export default {
        name: "RouterComponent"
    }
</script>
  
<style></style>
```

```VUE
<!--App.vue-->
<template>
	<div id="app"></div>
    <Router />
</template>

<script>
import Router from "./components/RouterComponent.vue"
    export default {
        name: "App",
    };
    components: {
      Router
    }
</script>

<style></style>
```

```js
/*./router/index.js*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HomeComponent.vue'
import Award from '../components/AwardComponent.vue'

Vue.use(VueRouter)

/**
 * @description hash 兼容性好
 * @description history 需要服务端支持
 */

export default new VueRouter({
    mode: "history"
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
	}, {
		path: '/award',
		name: 'Award',
        component: Award,
	}]
})
```

```js
/*main.js*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

const app = new Vue({ 
  	//el: "#app"
    router,
  	render: h => h(App) 
});
app.$mount("#app"); 
```

#### Vuex

```js
/*./store/BaseModule.js*/
const BaseModule = {
    state: () => ({
        welcome: 'welcome'
    }),
    getters: {
        welcome(state) {
            return state.welcome
        },
    },
    mutations: {
        base(state, { username }) {
            state.welcome += ', ' + username;
        },
    },
    actions: {}
}

export default BaseModule
```

```js
/*./store/UserModule*/
const UserModule = {
    namespaced: true,
    state: () => ({
        username: '',
        token: null,
    }),
    getters: {
        username(state) {
            return state.username
        },
        token(state) {
            return state.token
        }
    },
    mutations: {
        register(state, { username, token }) {
            state.username = username
            state.token = token
        },
    },
}

export default UserModule
```

```js
/*./store/index.js*/
import Vue from 'vue'
import Vuex from 'vuex'
import BaseModule from './BaseModule'
import UserModule from './UserModule'

Vue.use(Vuex);

const Store = new Vuex.Store({
    modules: {
        base: BaseModule,
        user: UserModule,
    },
})

export default Store;
```

```vue
<!--StoreComponent.vue-->
<template>
    <div id="store">
      <h1>{{ welcome }}</h1>
      <input v-if="token == null" type="button" 
             @click="btn('den21s')" value="register" />
    </div>
</template>
  
<script>
  import store from "../store"
  export default {
    name: "StoreComponent",
    store,
    data() {
      return {}
    },
    computed: {
      welcome() {
        return store.getters.welcome
      },
      username() {
        return store.getters["user/username"]
      },
      token() {
        return store.getters["user/token"]
      }
    },
    methods: {
      btn(username) {
        console.log(username);
        username && store.commit('user/register', { 
            username, 
            token: 'sxgWKnLADfS8hUxbiMWyb' 
        })
        username && store.commit('base', { username })
      }
    }
  };
</script>
  
<style></style>
```

```vue
<!--App.vue-->
<template>
  <div id="app">
    <Store />
  </div>
</template>

<script>
  import Store from "./components/StoreComponent.vue"
  export default {
    name: "App",
    components: {
      Store,
    }
  };
</script>

<style></style>
```


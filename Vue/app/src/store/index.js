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
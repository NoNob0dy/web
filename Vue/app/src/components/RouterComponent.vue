<template>
    <div id="router">
        <router-link to="/">Go to Home</router-link>
        <router-link to="/award">Go to Award</router-link>
        <router-view></router-view>
    </div>
</template>
  
<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import Home from '../components/HomeComponent.vue'
    import Award from '../components/AwardComponent.vue'
    Vue.use(VueRouter);
    const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/award',
            name: 'Award',
            component: Award,
        }
    ];
    const Router = new VueRouter({
        mode: 'history',
        routes
    });
    export default {
        name: "RouterComponent",
        Router
    }
</script>
  
<style></style>
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
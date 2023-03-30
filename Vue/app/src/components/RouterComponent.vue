<template>
    <div id="router">
        <el-row :gutter="9" type="flex" justify="space-around">
            <el-col :span="10">
                <router-link to="/">Go to Home</router-link>
            </el-col>
            <el-col :span="10">
                <router-link to="/award">Go to Award</router-link>
            </el-col>
        </el-row>
        <el-row>           
            <el-col>
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
  
<script>
export default {
    name: "RouterComponent"
}
</script>

  
<style></style>

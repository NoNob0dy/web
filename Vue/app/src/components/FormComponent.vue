<template>
   <div id="form">
      <el-form>
         <el-form-item>
            <el-input v-model="name" />
            <el-input v-model="psd" show-password />
            <el-date-picker v-model="date" type="date" />
         </el-form-item>
         <el-form-item>
            <el-select v-model="select">
               <el-option value="dennis">
                  dennis
               </el-option>
               <el-option value="den21s">
                  den21s
               </el-option>
            </el-select>
            <el-radio-group v-model="radio">
               <el-radio label="dennis">
                  dennis</el-radio>
               <el-radio label="den21s">
                  den21s</el-radio>
            </el-radio-group>
            <el-checkbox-group v-model="checkbox">
               <el-checkbox label="dennis">
                  dennis
               </el-checkbox>
               <el-checkbox label="den21s">
                  den21s
               </el-checkbox>
            </el-checkbox-group>
         </el-form-item>
         <el-form-item>
            <el-upload action="http://localhost:8080/" accept=".png, .jpg">
               <i class="el-icon-plus"></i>
            </el-upload>
            <el-switch v-model="ifSwitch" />
            <el-button type="primary" @click="formValues()">submit</el-button>
         </el-form-item>
      </el-form>
   </div>
</template>
  
<script>

export default {
   name: "FormComponent",
   data() {
      return {
         psd: '',
         name: '',
         date: '',
         radio: [],
         select: [],
         checkbox: [],
         ifSwitch: false,
      }
   },
   methods: {
      formValues() {
         console.log(this.select, this.radio, this.checkbox);
      }
   }
}
</script>

<style></style>
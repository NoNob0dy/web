#### Global register

```js
import Vue from "vue"
import App from "./App.vue"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(ElementUI);

const app = new Vue({
    el: "#app"
  	render: h => h(App),
  }
});
```

#### Components

- #### container

  ```vue
  <!--app.vue-->
  <template>
    <div id="app">
      <el-container>
        <el-header id="header"></el-header>
        <el-container>
          <el-aside id="aside"></el-aside>
          <el-main id="main"></el-main>
        </el-container>
        <el-footer id="footer"></el-footer>
      </el-container>
    </div>
  </template>
  
  <script>
    export default {
      name: "App",
    };
  </script>
  
  <style>
      /*I'm not sure why the form like "el-mian {}" couldn't
      be rendered properly, while select the elements by
      using 'id' or 'class' could achieve that*/
      #app {
      width: 1080px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  </style>
  ```

- #### layout

  ```vue
  <template>
  	<!--flex is used when :span's sum less than 24, 
  	which is the total span of a row-->
  	<el-row :gutter="9" 
              type="flex" justify="space-around">
  		<el-col :span="10">
  			<router-link to="/">
                  Go to Home
  			</router-link>
          </el-col>
          <el-col :span="10">
              <router-link to="/award">
                  Go to Award
      		</router-link>
          </el-col>
      </el-row>
      <el-row>           
          <el-col>
              <router-view></router-view>
          </el-col>
      </el-row>
  </template>
    
  <script>
      export default {
          name: "LayoutComponent"
      }
  </script>
  
  <style></style>
  ```
  
- #### form

  ```vue
  <template>
      <div id="form">
          <el-form>
              <el-form-item>
                  <el-input v-model="name" />
                  <el-input v-model="psd" show-password />
                  <el-date-picker v-model="date" 
                                  type="date" />
              </el-form-item>
              <el-form-item>
                  <el-select v-model="select">
                      <el-option label="1" value="dennis">
                          dennis
                      </el-option>
                      <el-option label="2" value="den21s">
                          den21s
                      </el-option>
                  </el-select>
                  <el-radio-group v-model="radio">
                      <el-radio label="1" value="dennis">
                          dennis</el-radio>
                      <el-radio label="2" value="den21s">
                          den21s</el-radio>
                  </el-radio-group>
                  <el-checkbox-group v-model="checkbox">
                      <el-checkbox label="1" value="dennis">
                          dennis
                      </el-checkbox>
                      <el-checkbox label="2" value="den21s">
                          den21s
                      </el-checkbox>
                  </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                  <el-upload action="http://localhost:8080/" 							  						     accept=".png, .jpg">
                      <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-switch v-model="ifSwitch" />
                  <el-button type="primary" @click="">
                      submit
      			</el-button>
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
          }
      }
  </script>
  
  <style></style>
  ```

- #### table

  ```vue
  <template>
      <el-table :data="tableData.filter(searchFilter)">
          <el-table-column prop="id" label="Id" />
          <el-table-column prop="content" label="Content" />
          <el-table-column>
              <template #header>
                  <el-input v-model="search" size="mini" />
              </template>
              <template #default="scope">
                  <el-button size="mini" 	
  			@click="handleEdit(scope.$index, scope.row)">
                      Edit
                  </el-button>
                  <el-button size="mini" type="danger" 
              @click="handleDelete(scope.$index, scope.row)">
                      Delete
                  </el-button>
              </template>
          </el-table-column>
      </el-table>
  </template>
    
  <script>
      import axios from 'axios'
      export default {
          name: "TableComponent",
          data() {
              return {
                  search: "",
                  tableData: []
              }
          },
          created() {
              axios.get('./data.json').then(res => {
                  for (let i = 0; i < res.data.length; i++) {
                      this.tableData.push(res.data[i]);
                  }
              })
          },
          methods: {
              searchFilter(TD) {
                  if (this.search != '') {
                      let id = TD.id;
                      let src = this.search.toLowerCase();
                      let content = TD.content.toLowerCase();
                      let ifIncludes = content.includes(src);
                      return id == src || ifIncludes;    
                  } else {
                      return data
                  }
              },
              handleEdit(index, row) {
                  console.log(index, row);
              },
              handleDelete(index, row) {
                  console.log(index, row);
              },
          },
      }
  </script>
    
  <style></style>
  
  ```


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
                for (let i = 0; i < res.length; i++) {
                    this.tableData.push(res[i]);
                }
            })
        },
        methods: {
            searchFilter(data) {
                const org = data.name.toLowerCase(),
                      src = this.search.toLowerCase();
                if (!this.search) {
					return org.includes(src);
                }
            },
            handleEdit(index) {
                console.log(index);
            },
            handleDelete(index) {
                console.log(index);
            },
        },
    }
</script>
  
<style></style>

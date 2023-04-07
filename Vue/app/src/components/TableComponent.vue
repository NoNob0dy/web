<template>
    <el-table :data="tableData.filter(searchFilter)">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="content" label="Content" />
        <el-table-column>
            <template #header>
                <el-input v-model="search" size="mini" />
            </template>
            <template #default="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                    Edit
                </el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
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
            searchFilter(data) {
                if (this.search != '') {
                    let id = data["id"],
                        src = this.search.toLowerCase(),
                        content = data["content"].toLowerCase()
                    return id == src || content.includes(src);
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

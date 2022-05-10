<template>
  <div class="app-container">
    <el-button type="success" size="small" @click="addBtn">添加</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="班级" prop="team" />
      <el-table-column align="center" label="姓名" prop="name" />
      <el-table-column label="年龄" align="center" prop="age" />
      <el-table-column label="性别" align="center" prop="sex" />
      <el-table-column label="家长" align="center" prop="parent" />
      <el-table-column label="联系电话" align="center" prop="phone" />
      <el-table-column label="操作" align="center" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="updataBtn(scope.row)"
          >修改</el-button>
          <el-button type="text" size="small" @click="delBtn(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer-page">
      <el-pagination
        class="pagina"
        :current-page="query.page.current"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="query.page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataTotal"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      :before-close="closeDialog"
      width="70%"
    >
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="班级">
            <el-input v-model="form.team" clearable size="mini" />
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="form.name" clearable size="mini" />
          </el-form-item>
          <el-form-item label="年龄">
            <el-input-number
              v-model="form.age"
              :min="1"
              clearable
              size="mini"
            />
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男" />
              <el-radio label="女" />
            </el-radio-group>
          </el-form-item>
          <el-form-item label="家长">
            <el-input v-model="form.parent" clearable size="mini" />
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.phone" clearable size="mini" />
          </el-form-item>
          <el-form-item>
            <el-button size="mini" @click="closeDialog">取消</el-button>
            <el-button
              size="mini"
              type="primary"
              @click="onSubmit"
            >确定</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { childrenList, childrenUpdata, childrenDel } from '@/api/table'
export default {
  data() {
    return {
      list: [],
      listLoading: false,
      dialogVisible: false,
      form: {
        team: '',
        name: '',
        age: '',
        sex: '',
        parent: '',
        phone: ''
      },
      query: {
        page: {
          current: 1,
          size: 10
        }
      },
      dataTotal: 0
    }
  },
  mounted() {
    this.refresh()
  },
  methods: {
    refresh() {
      this.query.page.current = 1
      this.getData()
    },
    async getData() {
      try {
        const { code, msg, data } = await childrenList(this.query.page)
        if (code !== 200) {
          throw new Error(msg)
        }
        console.log(data)
        const { list, total } = data
        this.list = list || []
        this.dataTotal = total
      } catch (e) {
        this.$message.error(e.message)
      }
    },
    handleSizeChange(size) {
      this.query.page.size = size
      this.getData()
    },
    handleCurrentChange(current) {
      this.query.page.current = current
      this.getData()
    },
    addBtn() {
      this.dialogVisible = true
    },
    async delBtn(val) {
      const { id } = val
      try {
        const { code, msg } = await childrenDel(id)
        if (code !== 200) {
          throw new Error(msg)
        }
        this.$message.success('删除成功')
        this.refresh()
      } catch (e) {
        this.$message.error(e.message)
      }
    },
    updataBtn(info) {
      console.log(info)
      for (const k in info) {
        this.form[k] = info[k]
      }
      this.dialogVisible = true
    },
    onSubmit() {
      this.$refs['form'].validate(async(valid) => {
        if (valid) {
          console.log(this.form)
          this.dialogVisible = true

          try {
            const { code, msg, data } = await childrenUpdata({ ...this.form })
            if (code !== 200) {
              throw new Error(msg)
            }
            console.log(data)
            this.$message.success('添加成功')
            this.closeDialog()
            this.refresh()
          } catch (e) {
            this.dialogVisible = false
            this.$message.error(e.message)
          }
        }
      })
    },
    closeDialog() {
      this.dialogVisible = false
      this.$refs['form'].resetFields()
      this.form = {
        team: '',
        name: '',
        age: '',
        sex: '',
        parent: '',
        phone: ''
      }
    }
  }
}
</script>

<style scoped>
.footer-page {
  text-align: center;
  margin-top: 30px;
}
</style>

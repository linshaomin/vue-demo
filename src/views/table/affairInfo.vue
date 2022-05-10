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
      <el-table-column align="center" label="班级" prop="team" />
      <el-table-column align="center" label="老师" prop="teacher" />
      <el-table-column label="出勤情况" align="center">
        <template slot-scope="scope">
          <p>
            {{ scope.row.team }}--<el-tag
              type="success"
              size="mini"
            >应出勤{{ scope.row.needAttendance }}</el-tag>/<el-tag
              size="mini"
              type="warning"
            >实际出勤{{ scope.row.actualAttendance }}</el-tag>
          </p>
        </template>
      </el-table-column>
      <el-table-column label="日期" align="center" prop="date" />
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
          <el-form-item label="老师">
            <el-input v-model="form.teacher" clearable size="mini" />
          </el-form-item>
          <el-form-item label="应出勤">
            <el-input-number
              v-model="form.needAttendance"
              :min="1"
              clearable
              size="mini"
            />
          </el-form-item>
          <el-form-item label="实际出勤">
            <el-input-number
              v-model="form.actualAttendance"
              :min="1"
              clearable
              size="mini"
            />
          </el-form-item>
          <el-form-item label="日期">
            <el-date-picker
              v-model="form.date"
              type="date"
              size="mini"
              placeholder="选择日期"
              value-format="yyyy-MM-dd"
            />
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
import { classList, classDel, classUpdata } from '@/api/table'

export default {
  data() {
    return {
      list: [],
      listLoading: false,
      form: {
        team: '',
        teacher: '',
        date: '',
        actualAttendance: '',
        needAttendance: ''
      },
      dialogVisible: false,
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
        const { code, msg, data } = await classList(this.query.page)
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
    async delBtn(val) {
      const { id } = val
      try {
        const { code, msg } = await classDel(id)
        if (code !== 200) {
          throw new Error(msg)
        }
        this.$message.success('删除成功')
        this.refresh()
      } catch (e) {
        this.$message.error(e.message)
      }
    },
    addBtn() {
      this.dialogVisible = true
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
            const { code, msg, data } = await classUpdata({ ...this.form })
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
        teacher: '',
        date: '',
        actualAttendance: '',
        needAttendance: ''
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

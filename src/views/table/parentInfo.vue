<template>
  <div class="app-container">
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
      <el-table-column align="center" label="姓名">
        <template slot-scope="scope">
          {{ scope.row.child }}
        </template>
      </el-table-column>
      <el-table-column label="年龄" align="center">
        <template slot-scope="scope">
          {{ scope.row.age }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="子女">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="身份">
        <template slot-scope="scope">
          {{ scope.row.identity }}
        </template>
      </el-table-column>
      <el-table-column label="联系电话" align="center">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="100">
        <template>
          <el-button type="text" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer-page">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="6"
      />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [
        {
          name: '王伟诚',
          class: '1班',
          age: '6',
          sex: '男',
          child: '王洋',
          phone: '13005409999',
          identity: '父亲'
        },
        {
          name: '马昊',
          class: '1班',
          age: '5',
          sex: '男',
          child: '马东刘	',
          phone: '181233245233',
          identity: '父亲'
        },
        {
          name: '王震',
          class: '1班',
          age: '6',
          sex: '男',
          child: '王宝林',
          phone: '13510689978',
          identity: '父亲'
        },
        {
          name: '李熙茂',
          class: '2班',
          age: '7',
          sex: '女',
          child: '李世伟',
          phone: '13554779960',
          identity: '父亲'
        },
        {
          name: '吴怡悦',
          class: '2班',
          age: '5',
          sex: '女',
          child: '吴文峰',
          phone: '13554779633',
          identity: '父亲'
        },
        {
          name: '李杰',
          class: '2班',
          age: '6',
          sex: '男',
          child: '李福成',
          phone: '13713779994',
          identity: '母亲'
        },
        {
          name: '王博超',
          class: '2班',
          age: '6',
          sex: '男',
          child: '王伟生',
          phone: '13725549997',
          identity: '父亲'
        },
        {
          name: '李明旭',
          class: '2班',
          age: '6',
          sex: '男',
          child: '李凯静',
          phone: '13725548673',
          identity: '母亲'
        },
        {
          name: '陈瑞',
          class: '2班',
          age: '6',
          sex: '女',
          child: '陈文昊',
          phone: '13760489979',
          identity: '母亲'
        },
        {
          name: '邹文杰',
          class: '2班',
          age: '6',
          sex: '男',
          child: '邹达',
          phone: '13760480001',
          identity: '父亲'
        },
        {
          name: '张嘉懿',
          class: '2班',
          age: '6',
          sex: '女',
          child: '张国瑞',
          phone: '13798379994',
          identity: '母亲'
        },
        {
          name: '丁静',
          class: '2班',
          age: '6',
          sex: '女',
          child: '丁跃强',
          phone: '13725548673',
          identity: '父亲'
        },
        {
          name: '陶鑫鹏',
          class: '2班',
          age: '6',
          sex: '男',
          child: '陶文生',
          phone: '13798379659',
          identity: '父亲'
        },
        {
          name: '陈方旭',
          class: '2班',
          age: '6',
          sex: '男',
          child: '陈国伟',
          phone: '13923739993',
          identity: '父亲'
        },
        {
          name: '李茜',
          class: '2班',
          age: '6',
          sex: '女',
          child: '李福财',
          phone: '14714589911',
          identity: '父亲'
        }
      ],
      listLoading: false
    }
  },
  created() {
  },
  methods: {

  }
}
</script>
<style scoped>
.footer-page{
  text-align: center;
  margin-top: 30px;
}
</style>

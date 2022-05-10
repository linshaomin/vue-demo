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
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="年龄" align="center">
        <template slot-scope="scope">
          {{ scope.row.age }}
        </template>
      </el-table-column>
      <el-table-column label="性别" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否请假" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.leave == '否'" type="success">{{ scope.row.leave }}</el-tag>
          <el-tag v-else type="danger">{{ scope.row.leave }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="离校时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="家长" align="center">
        <template slot-scope="scope">
          {{ scope.row.child }}
        </template>
      </el-table-column>
      <el-table-column label="联系电话" align="center">
        <template slot-scope="scope">
          {{ scope.row.phone }}
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
          leave: '否',
          time: '2022-04-08 18:00'
        },
        {
          name: '马昊',
          class: '1班',
          age: '5',
          sex: '男',
          child: '马东刘	',
          phone: '181233245233',
          leave: '否',
          time: '2022-04-08 18:00'
        },
        {
          name: '王震',
          class: '1班',
          age: '6',
          sex: '男',
          child: '王宝林',
          phone: '13510689978',
          leave: '否',
          time: '2022-04-08 18:00'
        },
        {
          name: '李熙茂',
          class: '2班',
          age: '7',
          sex: '女',
          child: '李世伟',
          phone: '13554779960',
          leave: '是',
          time: '-'
        },
        {
          name: '吴怡悦',
          class: '2班',
          age: '5',
          sex: '女',
          child: '吴文峰',
          phone: '13554779633',
          leave: '否',
          time: '2022-04-08 18:00'
        },
        {
          name: '李杰',
          class: '2班',
          age: '6',
          sex: '男',
          child: '李福成',
          phone: '13713779994',
          leave: '否',
          time: '2022-04-08 18:00'
        },
        {
          name: '王博超',
          class: '2班',
          age: '6',
          sex: '男',
          child: '王伟生',
          phone: '13725549997',
          leave: '是',
          time: '-'
        },
        {
          name: '李明旭',
          class: '2班',
          age: '6',
          sex: '男',
          child: '李凯静',
          phone: '13725548673',
          leave: '否',
          time: '2022-04-08 18:20'
        },
        {
          name: '陈瑞',
          class: '2班',
          age: '6',
          sex: '女',
          child: '陈文昊',
          phone: '13760489979',
          leave: '是',
          time: '-'
        },
        {
          name: '邹文杰',
          class: '2班',
          age: '6',
          sex: '男',
          child: '邹达',
          phone: '13760480001',
          leave: '否',
          time: '2022-04-08 18:00'
        },
        {
          name: '张嘉懿',
          class: '2班',
          age: '6',
          sex: '女',
          child: '张国瑞',
          phone: '13798379994',
          leave: '否',
          time: '2022-04-08 18:00'
        },
        {
          name: '丁静',
          class: '2班',
          age: '6',
          sex: '女',
          child: '丁跃强',
          phone: '13725548673',
          leave: '否',
          time: '2022-04-08 18:00'
        },
        {
          name: '陶鑫鹏',
          class: '2班',
          age: '6',
          sex: '男',
          child: '陶文生',
          phone: '13798379659',
          leave: '否',
          time: '2022-04-08 18:00'
        },
        {
          name: '陈方旭',
          class: '2班',
          age: '6',
          sex: '男',
          child: '陈国伟',
          phone: '13923739993',
          leave: '否',
          time: '2022-04-08 18:00'
        },
        {
          name: '李茜',
          class: '2班',
          age: '6',
          sex: '女',
          child: '李福财',
          phone: '14714589911',
          leave: '否',
          time: '2022-04-08 18:00'
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

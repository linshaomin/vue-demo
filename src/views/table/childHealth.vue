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

      <el-table-column label="体温" align="center">
        <template slot-scope="scope">
          {{ scope.row.temperature }}
        </template>
      </el-table-column>
      <el-table-column label="是否感冒" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.cold == '否'" type="success">{{ scope.row.cold }}</el-tag>
          <el-tag v-else type="danger">{{ scope.row.cold }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer-page">
      <el-pagination background layout="prev, pager, next" :total="6" />
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
          temperature: '36.3',
          cold: '否'
        },
        {
          name: '马昊',
          class: '1班',
          age: '5',
          sex: '男',
          child: '马东刘	',
          phone: '181233245233',
          temperature: '36.2',
          cold: '否'
        },
        {
          name: '王震',
          class: '1班',
          age: '6',
          sex: '男',
          child: '王宝林',
          phone: '13510689978',
          temperature: '36.5',
          cold: '否'
        },
        {
          name: '李熙茂',
          class: '1班',
          age: '7',
          sex: '女',
          child: '李世伟',
          phone: '13554779960',
          temperature: '37.1',
          cold: '是'
        },
        {
          name: '吴怡悦',
          class: '1班',
          age: '5',
          sex: '女',
          child: '吴文峰',
          phone: '13554779633',
          temperature: '36.1',
          cold: '否'
        },
        {
          name: '李杰',
          class: '1班',
          age: '6',
          sex: '男',
          child: '李福成',
          phone: '13713779994',
          temperature: '36.3',
          cold: '否'
        },
        {
          name: '王博超',
          class: '1班',
          age: '6',
          sex: '男',
          child: '王伟生',
          phone: '13725549997',
          temperature: '36.3',
          cold: '否'
        },
        {
          name: '李明旭',
          class: '1班',
          age: '6',
          sex: '男',
          child: '李凯静',
          phone: '13725548673',
          temperature: '36.2',
          cold: '否'
        },
        {
          name: '陈瑞',
          class: '2班',
          age: '6',
          sex: '女',
          child: '陈文昊',
          phone: '13760489979',
          temperature: '37.3',
          cold: '是'
        },
        {
          name: '邹文杰',
          class: '2班',
          age: '6',
          sex: '男',
          child: '邹达',
          phone: '13760480001',
          temperature: '36.3',
          cold: '否'
        },
        {
          name: '张嘉懿',
          class: '2班',
          age: '6',
          sex: '女',
          child: '张国瑞',
          phone: '13798379994',
          temperature: '36.3',
          cold: '否'
        },
        {
          name: '丁静',
          class: '2班',
          age: '6',
          sex: '女',
          child: '丁跃强',
          phone: '13725548673',
          temperature: '36.5',
          cold: '否'
        },
        {
          name: '陶鑫鹏',
          class: '2班',
          age: '6',
          sex: '男',
          child: '陶文生',
          phone: '13798379659',
          temperature: '36.6',
          cold: '否'
        },
        {
          name: '陈方旭',
          class: '2班',
          age: '6',
          sex: '男',
          child: '陈国伟',
          phone: '13923739993',
          temperature: '36.3',
          cold: '否'
        },
        {
          name: '李茜',
          class: '2班',
          age: '6',
          sex: '女',
          child: '李福财',
          phone: '14714589911',
          temperature: '36.3',
          cold: '否'
        }
      ],
      listLoading: false
    }
  },
  created() {},
  methods: {}
}
</script>
<style scoped>
.footer-page {
  text-align: center;
  margin-top: 30px;
}
</style>

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
      <el-table-column label="采购食物" align="center">
        <template slot-scope="scope">
          {{ scope.row.food }}
        </template>
      </el-table-column>
      <el-table-column label="卫生情况" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.hygiene }}</span>
        </template>
      </el-table-column>
      <el-table-column label="水电情况" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.hydropower }}</span>
        </template>
      </el-table-column>

      <el-table-column label="日期" align="center">
        <template slot-scope="scope">
          {{ scope.row.date }}
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
          date: '2022-04-15',
          food: '西红柿，鸡蛋，芹菜，瘦肉',
          name: '张阿姨',
          hygiene: '合格',
          hydropower: '正常'
        },
        {
          date: '2022-04-14',
          food: '土豆，鸡蛋，菠菜，瘦肉',
          name: '张阿姨',
          hygiene: '合格',
          hydropower: '正常'
        },
        {
          date: '2022-04-13',
          food: '腐竹，娃娃菜，肉丸，瘦肉',
          name: '王阿姨',
          hygiene: '合格',
          hydropower: '正常'
        },
        {
          date: '2022-04-12',
          food: '玉米，排骨，芹菜，瘦肉',
          name: '张阿姨',
          hygiene: '合格',
          hydropower: '正常'
        },
        {
          date: '2022-04-11',
          food: '西红柿，鸡蛋，芹菜，瘦肉',
          name: '王阿姨',
          hygiene: '合格',
          hydropower: '正常'
        },
        {
          date: '2022-04-08',
          food: '西红柿，鸡蛋，芹菜，瘦肉',
          name: '张阿姨',
          hygiene: '合格',
          hydropower: '正常'
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
.footer-page{
  text-align: center;
  margin-top: 30px;
}
</style>

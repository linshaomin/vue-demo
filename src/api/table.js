import request from '@/utils/request'

// 儿童信息列表
export function childrenList({ current, size }) {
  return request({
    url: `/child/page?pageNum=${current}&pageSize=${size}`,
    method: 'GET'
  })
}

// 儿童信息编辑/添加
export function childrenUpdata(data) {
  return request({
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/child/saveOrUpdate',
    method: 'POST',
    data
  })
}

// 儿童信息删除
export function childrenDel(id) {
  return request({
    url: `/child/delete?id=${id}`,
    method: 'get'
  })
}

// 班级信息列表
export function classList({ current, size }) {
  return request({
    url: `/teamAttendance/page?pageNum=${current}&pageSize=${size}`,
    method: 'get'
  })
}

// 班级信息删除
export function classDel(id) {
  return request({
    url: `/teamAttendance/delete?id=${id}`,
    method: 'get'
  })
}

// 班级信息编辑/添加
export function classUpdata(data) {
  return request({
    url: '/teamAttendance/saveOrUpdate',
    method: 'post',
    data
  })
}

// 导入数据库模块
const db = require('../db/index');

// 定义注意类型
const conditionSchema = new db.Schema({
  name: String,
  source: String,
  data: Object,
})

// 接种注意事项路由的处理函数
exports.getConditions = (req, res) => {
  const conditions = db.model('conditions', conditionSchema);
  conditions.find((err, docs) => {
    if (!err) {
      res.send({
        status: 0,
        message: '获取接种禁忌成功！',
        data: docs,
      })
    }
  })
}

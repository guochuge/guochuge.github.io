// 导入数据库模块
const db = require('../db/index');

// 定义注意类型
const attentionSchema = new db.Schema({
  name: String,
  source: String,
  data: Object,
})

// 接种注意事项路由的处理函数
exports.getAttentions = (req, res) => {
  const attentions = db.model('attentions', attentionSchema);
  attentions.find((err, docs) => {
    if (!err) {
      res.send({
        status: 0,
        message: '获取注意事项成功！',
        data: docs,
      })
    }
  })
}
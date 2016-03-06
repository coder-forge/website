var Tools = function ToolsClass(){}

Tools.prototype.view = function ToolsViewRender(req, res, next){
  res.render('admin/index')
}

module.exports = new Tools()

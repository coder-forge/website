//var Tool = require('../models/Tools')

/**
 * @constructor
 * @class
 */
var Tools = function ToolsClass(){}

/**
 * Render index route.
 * @param  {Request}   req  Express request object.
 * @param  {Response}   res  Express response object.
 * @param  {Function} next
 */
Tools.prototype.view = function ToolsViewRender(req, res, next){
  res.render('admin/index')
}

/**
 * Upsert a document.
 * @param  {Request}   req  Express request object.
 * @param  {Response}   res  Express response object.
 * @param  {Function} next
 */
Tools.prototype.upsert = function ToolsUpsert(req, res, next){

  // clean data
  var data = {
    title: req.body.title,
    url: req.body.url,
    description: req.body.description
  }

  // create model
  var doc = new Tool(data)

  // create document
  doc.save(function(err){
    if(err) next(err)
    res.redirect('/admin/index')
  })
}

module.exports = new Tools()

var express = require('express');
var router = express.Router();

var attend = require('../lib/attend'),
    tools = require('../lib/tools');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Coder Forge', namespace: 'index' });
});

router.get('/about', function(req, res){
  res.render('about', {title: 'Coder Forge - About', namespace: 'about'});
});

router.get('/attend', function(req, res){

  attend.getMeetupEvents()
    .then(function(events){

      res.render('attend', {
        title: 'Coder Forge - Attend',
        namespace: 'attend',
        model: events,
      });

    })
    .catch(handleError);
});

router.get('/gallery', function(req, res){
  res.render('gallery', {
    title: 'Coder Forge - Galler',
    namespace: 'gallery',
    vendor: {
      scripts: ['/bower_components/lightbox2/dist/js/lightbox.min.js'],
      styles: ['/bower_components/lightbox2/dist/css/lightbox.min.css'],
    },
  });
});

router.get('/organise', function(req, res){
  res.render('organise', {title: 'Coder Forge - Organise', namespace: 'organise'});
});

router.get('/tools', function(req, res){

  tools.get()
    .then(function(tools){

      res.render('tools', {
        title: 'Coder Forge - Tools',
        namespace: 'tools',
        model: tools,
      });
    })
    .catch(handleError);
});

/**
 * Handle errors
 * @param  {Response} res The express response object.
 * @param  {Mixed} e   The error returned.
 */
function handleError(res, e){
  res.send(500, e);
}

module.exports = router;


/*
 * GET test page.
 */

exports.testrunner = function(req, res){
  res.render('testrunner', { title: 'Testrunner' });
};
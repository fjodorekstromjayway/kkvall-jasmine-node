
/*
 * POST /save.
 */

exports.save = function(req, res){

	var data = {"hej": "hopp"};
	console.log('request received');
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(data));
};
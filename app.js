/* 
* @Author: Mehdi-H
* @Date:   2015-06-28 20:16:34
* @Last Modified by:   Mehdi-H
* @Last Modified time: 2015-06-28 20:16:39
*/

/*jslint node: true */
'use strict';

var http = require('http');

var httpServer = http.createServer(function(req,res){
	res.end('Hello World');
});

httpServer.listen(process.env.PORT || '1337');
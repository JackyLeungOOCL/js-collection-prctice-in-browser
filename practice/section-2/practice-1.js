'use strict';

function countSameElements(collection) {
	var key = '';
	var count;
	var res = new Array();
	var col = Object.values(collection);
	var str = '';
	var obj;

	for (var i = 0; i < col.length; i++) {
		if (col[i] == key) {
			continue;
		}
		key = col[i];
		count = col.filter(item => item == key).length;
		
		str = '{ "key": "' + key + '", "count":' + count + ' }';
		res.push(JSON.parse(str));
	}
	console.log("Credit to: Ivan Lin")
  return res;
}
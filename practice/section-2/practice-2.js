'use strict';

function countSameElements(collection) {
  var key = '';
	var count;
	var res = new Array();
	var col = Object.values(collection);
	var new_col = new Array();
	var str = '';
	var tmp;

	for (var i = 0; i < col.length; i++) {
		tmp = col[i].split('-');
		if (tmp.length > 1) {
			for (var j = 0; j < tmp[1]; j++) {
				new_col.push(tmp[0]);
			}
			continue;
		}

		new_col.push(col[i]);
	}

	for (var i = 0; i < new_col.length; i++) {
		if (new_col[i] == key) {
			continue;
		}
		key = new_col[i];
		count = new_col.filter(item => item == key).length;
		
		str = '{ "key": "' + key + '", "count":' + count + ' }';
		res.push(JSON.parse(str));
	}
  return res;
}

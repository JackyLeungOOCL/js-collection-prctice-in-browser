'use strict';

function collectSameElements(collectionA, collectionB) {
	var res = new Array();
	for (var i = 0; i < collectionB.length; i++) {
		console.log(findSubElements(collectionA, collectionB[i]));
		res = res.concat(findSubElements(collectionA, collectionB[i]));
	}
	return res;
}

function findSubElements(collectionA, collectionB) {
	return collectionA.filter(item => collectionB.includes(item));
}
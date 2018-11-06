'use strict';

function collectSameElements(collectionA, objectB) {
	var colA = new Array();
	for (var i = 0; i < collectionA.length; i++) {
		colA = colA.concat(collectionA[i].key);
	}
  return colA.filter(item => objectB.value.includes(item));
}

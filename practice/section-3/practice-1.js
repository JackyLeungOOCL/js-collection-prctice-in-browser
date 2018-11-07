'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var arr = new Array();
	collectionA.filter(function(item, index) {
		if (objectB.value.includes(item.key)) {
			arr.push(index);
			return item;
		}
	});

	for (var i = 0; i < arr.length; i++) {
		collectionA[arr[i]].count--;
	}

  return collectionA;
}

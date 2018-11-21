'use strict';

function collectSameElements(collectionA, objectB) {
	return collectionA.map(a => a.key).filter(a => objectB.value.includes(a));
}
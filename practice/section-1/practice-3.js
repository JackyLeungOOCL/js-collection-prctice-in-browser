'use strict';

function collectSameElements(collectionA, collectionB) {
	return collectionA.filter(item => collectionB.value.includes(item));
}
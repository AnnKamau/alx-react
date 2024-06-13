// 5-merge.js
import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
    return List(page1).concat(List(page2));
}

// Function to merge two objects into an Immutable Map and convert to an Immutable List
export function mergeElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);
    return map1.merge(map2).toList();
}

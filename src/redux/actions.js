import { ADD, EDIT, REMOVE } from './types';

export function add(elem) {
    return {
        type: ADD,
        newElem: elem
    }
}

export function edit(elem, index) {
    return {
        type: EDIT,
        indexOfPrevElem: index,
        newElem: elem
    }
}

export function remove(index) {
    return {
        type: REMOVE,
        indexOfRemovedElem: index  
    }
}
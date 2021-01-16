import { ADD, EDIT, REMOVE, FLIP } from './types';

export const add = elem => ({
        type: ADD,
        newElem: elem
})

export const edit = (elem, index) => ({
        type: EDIT,
        indexOfPrevElem: index,
        newElem: elem
})

export const remove = index => ({
        type: REMOVE,
        indexOfRemovedElem: index  
})

export const flip = index => ({
        type: FLIP,
        indexOfFlipedCard: index
})
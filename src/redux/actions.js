import { ADD, EDIT, REMOVE, FLIP, TOGGLE_MODE, SET_NEW_TEXT_VALUE } from './types';

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

export const toggleMode = () => ({
        type: TOGGLE_MODE
})

export const setNewTextValue = (en, ru) => ({
        type: SET_NEW_TEXT_VALUE,
        en: en,
        ru: ru
})
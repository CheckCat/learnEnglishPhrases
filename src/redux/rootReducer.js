import data from '../data.json';
import { ADD, EDIT, REMOVE, FLIP } from "./types";

export const rootReducer = (state = data, action) => {
    const arr = [...state];
    switch (action.type) {
        case(ADD):
            return [...state, action.newElem];
        case(EDIT):
            arr[action.indexOfPrevElem] = action.newElem;
            return arr;
        case(REMOVE):
            arr.splice(action.indexOfRemovedElem, 1);
            return arr;
        case(FLIP):
            return arr.map((item, index) => index === action.indexOfFlipedCard ? {...item, isFliped: !item.isFliped} : item);
        default: return state;
    }
}
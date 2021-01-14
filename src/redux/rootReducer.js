import { ADD, EDIT, REMOVE } from "./types";

export function rootReducer(state, action) {
    const arr = [...state];
    switch (action.type) {
        case(ADD):
            return [...state, action.newElem];
        case(EDIT):
            arr[action.indexOfPrevElem] = action.newElem;
            return arr;
        case(REMOVE):
            arr.splice(action.indexOfRemoveElem, 1);
            return arr;
        default: return state;
    }
}
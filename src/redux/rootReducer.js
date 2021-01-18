import { combineReducers } from 'redux';
import data from '../data.json';
import { ADD, EDIT, REMOVE, FLIP, TOGGLE_MODE, SET_NEW_TEXT_VALUE } from "./types";

const interactionWithCardsReducer = (state = data, action) => {
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

const toggleEditingModeReducer = (state = false, action) => {
    switch (action.type) {
        case(TOGGLE_MODE):
            return !state;
        default: return state;
    }
}

const newTextValueReducer = (state = {isFliped: false}, action) => {
    switch (action.type) {
        case(SET_NEW_TEXT_VALUE):
            if(action.en && action.ru) return {...state, en:action.en, ru:action.ru};
            if(action.en) return {...state, en: action.en};
            if(action.ru) return {...state, ru: action.ru};
            return state;
        default: return state;
    }
}

export const rootReducer = combineReducers({
    interactionWithCards: interactionWithCardsReducer,
    toggleEditingMode: toggleEditingModeReducer,
    newTextValue: newTextValueReducer
})
import { combineReducers } from 'redux';
import { ADD, EDIT, REMOVE, FLIP, TOGGLE_MODE, SET_NEW_TEXT_VALUE, MODAL_WINDOW_IS_SHOWED, INITIAL_DATA } from "./types";

const interactionWithCardsReducer = (state=[], action) => {
    const arr = [...state];
    switch (action.type) {
        case(INITIAL_DATA):
            return action.data
        case(ADD):
            if(!action.newElem.ru || !action.newElem.en) return arr;
            if(arr.find(item=> (item.ru===action.newElem.ru) || (item.en===action.newElem.en))) return arr;

            return [...arr, action.newElem];
        case(EDIT):
            if(!action.newElem.ru || !action.newElem.en) return arr;
            if(arr.find(item=> (item.ru===action.newElem.ru) && (item.en===action.newElem.en))) return arr;

            arr[action.indexOfPrevElem] = action.newElem;
            return arr;
        case(REMOVE):
            arr.splice(action.indexOfRemovedElem, 1);
            return arr;
        case(FLIP):
            return arr.map((item, index) => index === action.indexOfFlipedCard ? {...item, isFliped: !item.isFliped} : item);
        default: return arr;
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

const modalWindowIsShowedReducer = (state = {isShowed: false}, action) => {
    switch (action.type) {
        case(MODAL_WINDOW_IS_SHOWED):
            if(!action.initiator || action.initiator.tagName!=="LI") return {isShowed: !state.isShowed};
            return ({isShowed: !state.isShowed, initiator: +action.initiator.dataset.index});
        default: return state;
    }
}

export const rootReducer = combineReducers({
    interactionWithCards: interactionWithCardsReducer,
    toggleEditingMode: toggleEditingModeReducer,
    newTextValue: newTextValueReducer,
    modalWindowIsShowed: modalWindowIsShowedReducer
})
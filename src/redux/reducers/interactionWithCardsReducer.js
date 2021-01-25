import { ADD, EDIT, REMOVE, FLIP, INITIAL_DATA } from '../types';

export const interactionWithCardsReducer = (state = [], action) => {
  const arr = [...state];
  switch (action.type) {
    case(INITIAL_DATA):
      return action.data;
    case(ADD):
      if(!action.newElem.ru || !action.newElem.en) return arr;
      if(arr.find(item => (item.ru === action.newElem.ru) || (item.en === action.newElem.en))) return arr;

      return [...arr, action.newElem];
    case(EDIT):
      if(!action.newElem.ru || !action.newElem.en) return arr;
      if(arr.find(item => (item.ru === action.newElem.ru) && (item.en === action.newElem.en))) return arr;

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
import { SET_NEW_TEXT_VALUE } from '../types'

export const newTextValueReducer = (state = { isFliped: false }, action) => {
  switch (action.type) {
    case(SET_NEW_TEXT_VALUE):
      if(action.en && action.ru) return { ...state, en:action.en, ru:action.ru };
      if(action.en) return { ...state, en: action.en };
      if(action.ru) return { ...state, ru: action.ru };
      return state;
    default: return state;
  }
}
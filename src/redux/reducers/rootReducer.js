import { combineReducers } from 'redux';
import { interactionWithCardsReducer } from './interactionWithCardsReducer';
import { toggleEditingModeReducer } from './toggleEditingModeReducer';
import { newTextValueReducer } from './newTextValueReducer';
import { modalWindowIsShowedReducer } from './modalWindowIsShowedReducer';

export const rootReducer = combineReducers({
  interactionWithCards: interactionWithCardsReducer,
  toggleEditingMode: toggleEditingModeReducer,
  newTextValue: newTextValueReducer,
  modalWindowIsShowed: modalWindowIsShowedReducer
})
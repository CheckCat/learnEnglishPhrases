import { TOGGLE_MODE } from '../types';

export const toggleEditingModeReducer = (state = false, action) => {
  switch (action.type) {
    case(TOGGLE_MODE):
      return !state;
    default: return state;
  }
}
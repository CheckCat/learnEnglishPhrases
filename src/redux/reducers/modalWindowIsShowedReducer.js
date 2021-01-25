import { MODAL_WINDOW_IS_SHOWED } from '../types';

export const modalWindowIsShowedReducer = (state = { isShowed: false }, action) => {
  switch (action.type) {
    case(MODAL_WINDOW_IS_SHOWED):
      if(!action.initiator || (action.initiator.tagName !== "LI")) return { isShowed: !state.isShowed };
      return ({ isShowed: !state.isShowed, initiator: +action.initiator.dataset.index });
    default: return state;
  }
}
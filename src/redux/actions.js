import { ADD, EDIT, REMOVE, FLIP, TOGGLE_MODE, SET_NEW_TEXT_VALUE, MODAL_WINDOW_IS_SHOWED, INITIAL_DATA } from './types';

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
  en,
  ru
})

export const toggleModalWindowIsShowed = initiator => ({
  type: MODAL_WINDOW_IS_SHOWED,
  initiator
})

export const fetchDataSuccess = data => ({
  type: INITIAL_DATA,
  data
})

export const fetchData = url => {
  return dispatch => {
    fetch(url)
      .then(response => {
        if(!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(fetchDataSuccess(data)))
  }
}
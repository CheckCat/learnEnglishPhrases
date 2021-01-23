import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from '../components/Card'
import TextAreas from './TextAreas';
import { add, edit, flip, remove, toggleModalWindowIsShowed } from '../redux/actions';
import { ButtonOfAdd } from '../components/ButtonOfAdd';
import { ModalWindow } from '../components/ModalWindow';

const CardsList = ({
  cardList,
  isEditingMode,
  schemaOfNewCard,
  modalWindowIsShowed: { isShowed, initiator },
  addCard,
  editCard,
  deleteCard,
  flipCard,
  showOrHideModalWindow
}) => {
  

  const moveSlider = ({ target }) => {
    if (target.tagName !== "LI") return false;
    const slider = target.offsetParent;
    const width = target.offsetWidth;
    const index = target.dataset.index - 2;

    slider.style.right = index * width + "px";
    const prev = Array.from(slider.children).find(item => item.classList.contains('active'));
    prev && prev.classList.remove('active');
    target.classList.add('active');
  }

  const showAllCards = () => {
    const cards = [...document.querySelectorAll('.cards-list__card')];
    if (cards.filter(item => !item.hidden).length !== cardList.length) {
      cards.forEach(item => item.hidden = false);
    }
  }

  const toFlipCard = ({ target }) => {
    if (target.classList.contains('active')) {
      flipCard(+target.dataset.index);
    }
  }

  useEffect(() => document.querySelector('ul').children[2].classList.add('active'), [])

  return (
    <div className="cards-list">
      <ul style={{ right: 0 }} onClick={moveSlider}>
        {cardList.map(({ ru, en, isFliped }, index) => <Card
          key={index}
          schemaOfNewCard={schemaOfNewCard}
          editCard={editCard}
          isEditingMode={isEditingMode}
          value={isFliped ? ru : en}
          index={index}
          toFlipCard={toFlipCard}
          showAllCards={showAllCards}
          showOrHideModalWindow={showOrHideModalWindow} />)}
      </ul>
      {isEditingMode && <TextAreas />}
      {isEditingMode && <ButtonOfAdd addCard={addCard} schemaOfNewCard={schemaOfNewCard} />}
      {isShowed && <ModalWindow deleteCard={deleteCard} initiator={initiator} showOrHideModalWindow={showOrHideModalWindow} />}
    </div>
  );
}

const mapStateToProps = ({ interactionWithCards, toggleEditingMode, newTextValue, modalWindowIsShowed }) => ({
  cardList: interactionWithCards,
  isEditingMode: toggleEditingMode,
  schemaOfNewCard: newTextValue,
  modalWindowIsShowed: modalWindowIsShowed
})

const mapDispatchToProps = {
  addCard: add,
  editCard: edit,
  deleteCard: remove,
  flipCard: flip,
  showOrHideModalWindow: toggleModalWindowIsShowed
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
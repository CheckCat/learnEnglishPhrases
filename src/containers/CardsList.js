import { useEffect } from 'react';
import { connect } from 'react-redux';

import { add, edit, flip, remove, toggleModalWindowIsShowed } from '../redux/actions';

import { Card } from '../components/Card';
import TextAreas from './TextAreas';
import { ButtonOfAdd } from '../components/ButtonOfAdd';
import { ModalWindow } from '../components/ModalWindow';
import { SliderArrows } from '../components/SliderArrows';

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
  const windowWidth = window.innerWidth;

  const moveSlider = ({ target }) => {
    if (target.tagName !== "LI" || windowWidth <= 768) return false;
    const slider = target.offsetParent;
    const width = target.offsetWidth;
    const index = windowWidth <= 1024 && windowWidth > 768 ? target.dataset.index - 1 : target.dataset.index - 2;

    slider.style.right = index * width + "px";
    const prev = Array.from(slider.children).filter(item => item.classList.contains('active'));
    prev[0] && prev.forEach(item => item.classList.remove('active'));
    target.classList.add('active');
  }

  const moveSliderForArrows = isForward => {
    const slider = document.querySelector('ul');
    const width = slider.children[0].offsetWidth;
    const prev = Array.from(slider.children).find(item => item.classList.contains('active'));
    const index = isForward ? +prev.dataset.index + 1 : prev.dataset.index - 1;

    const arrows = Array.from(document.querySelectorAll('.arrow'));
    if (index < 0 || index === slider.children.length) {
      arrows[isForward ? 1 : 0].classList.add('disabled');
      return false;
    }

    arrows.forEach(item => item.classList.contains('disabled') && item.classList.remove('disabled'));
    slider.style.right = index * width + 'px';
    prev.classList.remove('active');
    slider.children[index].classList.add('active');
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

  useEffect(()=>{
    const cardList = Array.from(document.querySelector('ul').children);
    if(cardList.find(item=>item.classList.contains('active'))) return false;
    let index = window.innerWidth <= 1024 ? 1 : 2;
    if (window.innerWidth <= 768) index = 0;
    cardList.length && cardList[index].classList.add('active');
  })

  return (
    <>
      <div className="cards-list">
        <ul style={{ right: 0 }} onClick={moveSlider}>
          {cardList.map(({ ru, en, isFliped }, index) =>
            <Card
              key={index}
              schemaOfNewCard={schemaOfNewCard}
              editCard={editCard}
              isEditingMode={isEditingMode}
              value={isFliped ? ru : en}
              index={index}
              toFlipCard={toFlipCard}
              showAllCards={showAllCards}
              showOrHideModalWindow={showOrHideModalWindow}
            />
          )}
        </ul>
        {isEditingMode && <TextAreas />}
        {isEditingMode && <ButtonOfAdd addCard={addCard} schemaOfNewCard={schemaOfNewCard} />}
        {windowWidth <= 768 && <SliderArrows moveSliderForArrows={moveSliderForArrows} />}
      </div>
      {isShowed && <ModalWindow
        deleteCard={deleteCard}
        initiator={initiator}
        showOrHideModalWindow={showOrHideModalWindow}
      />}
    </>
  );
}

const mapStateToProps = ({ interactionWithCards, toggleEditingMode, newTextValue, modalWindowIsShowed }) => ({
  cardList: interactionWithCards,
  isEditingMode: toggleEditingMode,
  schemaOfNewCard: newTextValue,
  modalWindowIsShowed
})

const mapDispatchToProps = {
  addCard: add,
  editCard: edit,
  deleteCard: remove,
  flipCard: flip,
  showOrHideModalWindow: toggleModalWindowIsShowed
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from '../components/Card'
import TextAreas from './TextAreas';
import { add, edit, flip, remove } from '../redux/actions';
import { ButtonOfAdd } from '../components/ButtonOfAdd';

const CardsList = ({
  cardList, 
  isEditingMode, 
  schemaOfNewCard, 
  addCard, 
  editCard, 
  deleteCard, 
  flipCard, 
  }) => {

  const moveSlider = ({target}) => {
    if(target.tagName !== "LI") return false;
    const slider = target.offsetParent;
    const width = target.offsetWidth;
    const index = target.dataset.index - 2;

    slider.style.right = index * width + "px";
    const prev = Array.from(slider.children).find(item => item.classList.contains('active'));
    if(prev) {
      prev.classList.remove('active');
    }
    target.classList.add('active');
  }
  useEffect(()=>{
    document.querySelector('ul').children[2].classList.add('active');
  }, [])

  const toFlipCard = ({target}) => {
    if(target.classList.contains('active')) {
      flipCard(+target.dataset.index);
    }
  }

  return(
    <div className="container cards-list">
      <ul style={{right: 0}} onClick={moveSlider}>
        {cardList.map(({ru, en, isFliped}, index) => <Card 
        key={index} 
        schemaOfNewCard={schemaOfNewCard}
        editCard={editCard}
        deleteCard={deleteCard} 
        isEditingMode={isEditingMode} 
        value={isFliped ? ru:en} 
        index={index} 
        toFlipCard={toFlipCard}/>)}
      </ul>
      {isEditingMode && <TextAreas />}
      {isEditingMode && <ButtonOfAdd addCard={addCard} schemaOfNewCard={schemaOfNewCard}/>}
    </div>
  );
}

const mapStateToProps = ({interactionWithCards, toggleEditingMode, newTextValue }) => ({
  cardList: interactionWithCards,
  isEditingMode: toggleEditingMode,
  schemaOfNewCard: newTextValue
})

const mapDispatchToProps = {
  addCard: add,
  editCard: edit,
  deleteCard: remove,
  flipCard: flip
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
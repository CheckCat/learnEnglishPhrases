import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Card } from '../components/Card'
import { add, edit, flip, remove } from '../redux/actions';

const CardsList = ({cardList, addCard, editCard, deleteCard, flipCard}) => {

  const moveSlider = ({target}) => {
    const slider = target.offsetParent;
    const width = target.offsetWidth;
    const index = target.dataset.index - 1;

    slider.style.right = index * width + "px";
    const prev = Array.from(slider.children).find(item => item.classList.contains('active'));
    if(prev) {
      prev.classList.remove('active');
    }
    target.classList.add('active');
  }

  useEffect(()=>{
    document.querySelector('ul').children[1].classList.add('active');
  }, [])

  const toFlipCard = ({target}) => {
    if(target.classList.contains('active')) {
      flipCard(+target.dataset.index);
    }
  }

  return(
    <div className="container cards-list">
      <ul style={{right: 0}} onClick={moveSlider}>
        {cardList.map(({ru, en, isFliped}, index) => <Card key={index} value={isFliped ? en:ru} index={index} toFlipCard={toFlipCard}/>)}
      </ul>
    </div>
  );
}

const mapStateToProps = props => ({
    cardList: props
})

const mapDispatchToProps = {
    addCard: add,
    editCard: edit,
    deleteCard: remove,
    flipCard: flip
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
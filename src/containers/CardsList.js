import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from '../components/Card'
import { remove } from '../redux/actions';

function CardsList({cards, deleteCard}) {

  const moveSlider = ev => {
    const selectedCard = ev.target;
    deleteCard(+selectedCard.dataset.index);
    // const slider = selectedCard.offsetParent;
    // const width = selectedCard.offsetWidth;
    // const index = selectedCard.dataset.index - 1;

    // slider.style.right = index * width + "px";
    // const prev = Array.from(slider.children).find(item => item.classList.contains('active'));
    // if(prev) {
    //   prev.classList.remove('active');
    // }
    // selectedCard.classList.add('active');
  }
  
  return(
    <div className="container cards-list">
      <ul onClick={moveSlider}>
        {cards.map((item, index) => <Card index={index} key={index} props={item}/>)}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cards: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCard: bindActionCreators(remove, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
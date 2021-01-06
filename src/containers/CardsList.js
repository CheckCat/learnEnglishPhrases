import data from '../data.json';
import {Card} from '../components/Card'

export default function CardsList() {

  const moveSlider = ev => {
    const slider = ev.target.offsetParent;
    const width = ev.target.offsetWidth;
    const index = ev.target.dataset.index - 1;
    slider.style.right = index * width + "px";
    const prev = Array.from(slider.children).find(item => item.classList.contains('active'));
    if(prev) {
      prev.classList.remove('active');
    }
    ev.target.classList.add('active');
  }

return(
  <div className="container cards-list">
    <ul onClick={moveSlider}>
      {data.map((item, index) => <Card index={index} key={index} props={item}/>)}
    </ul>
  </div>
);
}
export const Card = ({value, index, toFlipCard}) => (
  <li data-index={index} onClick={toFlipCard} className="cards-list__card">
    {value}
  </li>
);

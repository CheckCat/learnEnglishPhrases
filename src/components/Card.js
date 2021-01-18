import { ButtonOfDelete } from "./ButtonOfDelete";
import { ButtonOfEdit } from "./ButtonOfEdit";

export const Card = ({
  editCard, 
  deleteCard, 
  schemaOfNewCard, 
  isEditingMode, 
  value, 
  index, 
  toFlipCard}) => (

  <li data-index={index} onClick={toFlipCard} className="cards-list__card">
    {value}
    {isEditingMode && <ButtonOfDelete deleteCard={deleteCard}/>}
    {isEditingMode && <ButtonOfEdit editCard={editCard} schemaOfNewCard={schemaOfNewCard}/>}
  </li>
);

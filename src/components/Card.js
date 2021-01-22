import { ButtonOfDelete } from "./ButtonOfDelete";
import { ButtonOfEdit } from "./ButtonOfEdit";

export const Card = ({
  editCard, 
  schemaOfNewCard, 
  isEditingMode, 
  value, 
  index, 
  toFlipCard,
  showAllCards,
  showOrHideModalWindow }) => (

  <li data-index={index} onClick={(ev)=>{showAllCards(); toFlipCard(ev)}} className="cards-list__card">
    <span style={{position: 'absolute', top: -1000}}>{index+1}</span>
    {value}
    {isEditingMode && <ButtonOfDelete showOrHideModalWindow={showOrHideModalWindow} />}
    {isEditingMode && <ButtonOfEdit editCard={editCard} schemaOfNewCard={schemaOfNewCard}/>}
  </li>
);

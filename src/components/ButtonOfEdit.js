export const ButtonOfEdit = ({ editCard, schemaOfNewCard:{ en, ru } }) => {
  const newElemObj = { ru, en, isFliped: false };

  return(
    <span 
      onClick={({ target }) => {
        editCard(newElemObj, +target.parentElement.dataset.index);
      }} className="edit-button">
    </span>
  )
}
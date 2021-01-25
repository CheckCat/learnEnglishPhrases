export const ButtonOfAdd = ({ addCard, schemaOfNewCard: { en, ru } }) => {
  const newElemObj = { ru, en, isFliped: false };

  return(
    <button onClick={() => { addCard(newElemObj) }} className="add-button">
      Добавить карточку
    </button>
  )
}
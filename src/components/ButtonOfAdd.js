export const ButtonOfAdd = ({addCard, schemaOfNewCard: {en,ru}}) => {
    const newElemObj = {ru: ru, en:en, isFliped: false};
    return(
        <button onClick={()=>{addCard(newElemObj)}} className="add-button">
            Добавить карточку
        </button>
    )
}
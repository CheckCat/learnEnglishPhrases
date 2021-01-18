export const ButtonOfEdit = ({editCard, schemaOfNewCard:{en,ru}}) => {
    const newElemObj = {ru: ru, en:en, isFliped: false};
    return(
        <span onClick={({target})=>{
            editCard(newElemObj, +target.parentElement.dataset.index);
        }}>EDIT</span>
    )
}
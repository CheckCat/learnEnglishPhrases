export const ButtonOfDelete = ({deleteCard}) => {
    return(
        <span onClick={({target})=>{deleteCard(+target.parentElement.dataset.index)}}>DELETE</span>
    )
}
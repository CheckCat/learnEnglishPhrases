export const ButtonOfDelete = ({showOrHideModalWindow}) => {
    return(
        <span onClick={({target}) => showOrHideModalWindow(target.parentElement)} className="delete-button">
        </span>
    )
}
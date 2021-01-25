export const ButtonOfDelete = ({ showOrHideModalWindow }) => {

  return(
    <span 
      onClick={({ target }) => {
        document.body.classList.add('body-disabled');
        showOrHideModalWindow(target.parentElement);
      }} className="delete-button">
    </span>
  )
}
export const ModalWindow = ({ deleteCard, initiator, showOrHideModalWindow }) => {

    return (
        <div className="blocker">
            <div className="modal-window">
                <p>Вы уверены, что хотите удалить элемент?</p>
                <div className="buttons-container">
                    <button onClick={() => {document.body.classList.remove('body-disabled'); showOrHideModalWindow()}}>
                        Нет
                    </button>
                    <button onClick={() => { document.body.classList.remove('body-disabled'); showOrHideModalWindow(); deleteCard(initiator) }}>
                        Да
                    </button>
                </div>
            </div>
        </div>
    )
}
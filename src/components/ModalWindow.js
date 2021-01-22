export const ModalWindow = ({ deleteCard, initiator, showOrHideModalWindow }) => {

    return (
        <div className="blocker">
            <div className="modal-window">
                <p>Вы уверены, что хотите удалить элемент?</p>
                <div className="buttons-container">
                    <button onClick={showOrHideModalWindow}>
                        Нет
            </button>
                    <button onClick={() => { showOrHideModalWindow(); deleteCard(initiator) }}>
                        Да
            </button>
                </div>
            </div>
        </div>
    )
}
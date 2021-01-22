import { useEffect, useRef } from "react"
import { connect } from "react-redux";
import { setNewTextValue } from "../redux/actions";

const TextAreas = ({sendValueToStore}) => {
    const enArea = useRef();
    const ruArea = useRef();

    useEffect(() => {
        enArea.current.addEventListener('blur', () => {
            sendValueToStore(enArea.current.value, ruArea.current.value);
            enArea.current.placeholder = enArea.current.value ? enArea.current.value:enArea.current.placeholder;
            enArea.current.value = "";
        });
        ruArea.current.addEventListener('blur', () => {
            sendValueToStore(enArea.current.value, ruArea.current.value);
            ruArea.current.placeholder = ruArea.current.value ? ruArea.current.value:ruArea.current.placeholder;
            ruArea.current.value = "";
        });
    })

    return(
        <div className="textarea-container">
            <textarea placeholder="Input the text" ref={enArea} name="en" className="en-textarea">
            </textarea>
            <textarea placeholder="Введите текст" ref={ruArea} name="ru" className="ru-textarea">
            </textarea>
        </div>
    )
}

const mapDispatchToProps = {
    sendValueToStore: setNewTextValue
}

export default connect(()=>({}), mapDispatchToProps)(TextAreas);
import { connect } from "react-redux";
import { toggleMode } from "../redux/actions";

const EditingMode = ({ toggleMode, downloadJSON }) => {
    return(
        <button onClick={({target})=>{
            toggleMode();
            target.classList.contains('pressed') && downloadJSON()
            target.classList.toggle('pressed');
            }} className="toggle-edit-mode">
            Режим редактирования
        </button>
    )
}

const mapDispatchToProps = {
    toggleMode: toggleMode
}

export default connect(() => ({}), mapDispatchToProps)(EditingMode);
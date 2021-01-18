import { connect } from "react-redux";
import { toggleMode } from "../redux/actions";

const EditingMode = ({ toggleMode }) => {
    return(
        <button onClick={toggleMode}>
            Режим редактирования
        </button>
    )
}

const mapDispatchToProps = {
    toggleMode: toggleMode
}

export default connect(() => ({}), mapDispatchToProps)(EditingMode);
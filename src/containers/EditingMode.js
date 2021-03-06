import { connect } from "react-redux";
import { toggleMode } from "../redux/actions";

const EditingMode = ({ toggleMode, sendCardListToServer }) => {

  return(
    <button 
      onClick={({ target })=>{
        toggleMode();
        target.classList.contains('pressed') && sendCardListToServer();
        target.classList.toggle('pressed');
      }} className="toggle-edit-mode">
      Режим редактирования
    </button>
  )
}

const mapDispatchToProps = {
  toggleMode
}

export default connect(() => ({ }), mapDispatchToProps)(EditingMode);
import { connect } from 'react-redux';
import CardsList from './containers/CardsList';
import EditingMode from './containers/EditingMode';
import { LiveSearch } from './containers/LiveSearch';

const App = ({cardList}) => {

  const downloadJSON = () => {
    const file = new Blob(
      [JSON.stringify(cardList)], {
      type: 'application/json'
    })

    const a = document.createElement('a');
    a.setAttribute('href', URL.createObjectURL(file));
    a.setAttribute('download', 'data.json');
    a.id = "download"; document.body.append(a);
    document.getElementById("download").click();
    document.getElementById('download').remove();
  }

  return (
    <>
      <LiveSearch />
      <EditingMode downloadJSON={downloadJSON} />
      <CardsList />
    </>
  );
}

const mapStateToProps = ({ interactionWithCards }) => ({
  cardList: interactionWithCards
})

export default connect(mapStateToProps)(App);


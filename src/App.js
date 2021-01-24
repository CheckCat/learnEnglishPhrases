import { connect } from 'react-redux';
import CardsList from './containers/CardsList';
import EditingMode from './containers/EditingMode';
import { LiveSearch } from './containers/LiveSearch';
import { useEffect } from 'react';
import { fetchData } from './redux/actions';

const App = ({cardList, fetchData}) => {

  const sendCardListToServer = () => {
    const URL = "http://localhost:3001/cards/updateData";
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cardList)
    })
  }

  const URL = "http://localhost:3001/cards";
// eslint-disable-next-line
  useEffect(()=>fetchData(URL), [])

  return (
    <>
      <LiveSearch />
      <EditingMode sendCardListToServer={sendCardListToServer} />
      <CardsList />
    </>
  );
}

const mapStateToProps = ({ interactionWithCards }) => ({
  cardList: interactionWithCards
})

const mapDispatchToProps = {
  fetchData: fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


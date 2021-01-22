import CardsList from './containers/CardsList';
import EditingMode from './containers/EditingMode';
import { LiveSearch } from './containers/LiveSearch';

export const App = () => {

  return (
    <>
      <LiveSearch />
      <EditingMode />
      <CardsList />
    </>
  );
}



import { Route, Switch } from 'react-router-dom';

// Page Component Imports

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

// App Component That is rendered in index.js.
// We want the AppComponent to focus on mainly one thing, Rendering the Routing Configuration because your components should, ideally, be focused on one thing. A seperation of concerns.

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage></AllMeetupsPage>
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage></NewMeetupPage>
          </Route>
          <Route path="/favorites">
            <FavoritesPage></FavoritesPage>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

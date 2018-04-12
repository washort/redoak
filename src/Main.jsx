import { Switch, Route } from 'react-router-dom';

import QueryList from './QueryList';
import Query from './Query';


export default () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={QueryList} />
        <Route path="/query/:queryId(\d+)" component={Query} />
      </Switch>
    </main>
  );
}

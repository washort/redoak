import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

window.redoak_queries = {};

const root = document.getElementById('root');
const load = () => render(
  (
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>
  ), root
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();

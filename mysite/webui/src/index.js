import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createRoutes from './Router.js';

const routes = createRoutes();

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import configureStore from './Redux/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();



// ReactDOM.render(
//   <HashRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </HashRouter>,
//   document.getElementById('root')
// );

ReactDOM.render(
      <Provider store={store}>
        <HashRouter>
        <App />
        </HashRouter>
      </Provider>
    ,
  document.getElementById('root')
);





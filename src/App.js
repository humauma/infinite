import { Route, Redirect } from 'react-router-dom';
import React, { Suspense, lazy, Fragment } from 'react';
import Loader from 'react-loader'

import axios from "axios";
const Main = lazy(() => import('../src/Layout/Base'));
const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/search',
  params: {
    start: '0',
    maxResult: '18',
    FAT_KCALMax: '1000',
    maxTotalTimeInSeconds: '7200',
    allowedAttribute: 'diet-lacto-vegetarian,diet-low-fodmap',
    q: 'chicken soup'
  },
  headers: {
    'x-rapidapi-key': 'abc2f6555dmshdfd0b0b5f6e8e41p1bf24djsn2f2571a39320',
    'x-rapidapi-host': 'yummly2.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

function App() {
  return (
    <Fragment>
      <div className="App">
        <Suspense fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="semi-circle-spin" />
              </div>
            </div>
          </div>
        }>
          <Route path="/main" component={Main} />
        </Suspense>

        <Route exact path="/" render={() => (
          <Redirect to="/main/recipes" />
        )} />
        {/* <Main /> */}
      </div>
    </Fragment>
  );
}

export default App;
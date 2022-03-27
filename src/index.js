
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {Context} from './components/Context.js'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Context>
              <App/>
          </Context>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';



import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './pages/App';

ReactDOM.render(

  <App />, 

   document.getElementById('root')

);



//Componentes: clases, stateful(o con estados) o stateless (sin estado)

//ReactDOM.render(que elemento voy a pintar y donde lo voy a pintar)
//solo un elemento
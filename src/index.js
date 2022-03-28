import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css'
const store = configureStore()
console.log(store)
store.subscribe(() => {
  console.log('updated store value', store.getState())
})
ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>, document.getElementById('root'));


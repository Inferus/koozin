import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
import './index.css'
import './bootstrap/css/bootstrap.min.css';
import { store } from './store/index';
import { Provider } from 'react-redux';

export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        product: new ProductStore()
    }}>
        <Provider store={store}>
        <App />
        </Provider>
    </Context.Provider>,
  document.getElementById('root')
);


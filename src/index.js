import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux'
import GeneralReducer from './Store/Reducers/GeneralReducer';
import EducationReducer from './Store/Reducers/EducationReducer';
import ExperianceReducer from './Store/Reducers/ExperianceReducer';
import './index.css'

const store = createStore(combineReducers({
  genReducer : GeneralReducer,
  eduReducer : EducationReducer,
  expReducer : ExperianceReducer
}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

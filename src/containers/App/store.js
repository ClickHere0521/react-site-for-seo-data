import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form';
import {
  themeReducer,
  rtlReducer,
  cryptoTableReducer,
  customizerReducer,
  newOrderTableReducer,
  sidebarReducer,
  authReducer,
  roundBordersReducer,
  blocksShadowsReducer,
  creditsReducer,
} from '@/redux/reducers/index';
import appConfigReducer from '@/redux/reducers/appConfigReducer';
import covidReducer from '../Maps/VectorMapWithRequestData/redux/covidReducer';
import todoReducer from '../Todo/redux/reducer';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  rtl: rtlReducer,
  roundBorders: roundBordersReducer,
  blocksShadows: blocksShadowsReducer,
  appConfig: appConfigReducer,
  cryptoTable: cryptoTableReducer,
  customizer: customizerReducer,
  newOrder: newOrderTableReducer,
  sidebar: sidebarReducer,
  user: authReducer,
  covid: covidReducer,
  todo: todoReducer,
  credits: creditsReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;

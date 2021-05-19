import appConfigApi from './api/appConfigApi';
import covidApi from './api/covidApi';
import todoApi from './api/todoApi';
import dataApi from './api/dataApi';

const api = {
  appConfig: appConfigApi,
  covid: covidApi,
  todo: todoApi,
  data: dataApi,
};

export default api;

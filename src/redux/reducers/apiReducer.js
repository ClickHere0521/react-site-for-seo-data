import { APIOPTIONACTIONS, APIRESULTACTIONS } from '../actions/apiActions';
  
  const initialState = {
    se: 'google',
    setype: 'organic',
    location: 2752,
    language: 'sv',
    device: 'desktop',
    os: 'windows',
    sep: '',
    keyword: 'weather forecast',
    result: {},
  };
  
  const creditsReducer = (state = initialState, action) => {
    switch (action.type) {
      case APIOPTIONACTIONS:
        switch (action.payload.type) {
          case 'se': return { ...state, se: action.payload.value };
          case 'setype': return { ...state, setype: action.payload.value };
          case 'location': return { ...state, location: action.payload.value };
          case 'language': return { ...state, language: action.payload.value };
          case 'device': return { ...state, device: action.payload.value };
          case 'os': return { ...state, os: action.payload.value };
          case 'sep': return { ...state, sep: action.payload.value };
          case 'keyword': return { ...state, keyword: action.payload.value };
          default: return state;
        }
      case APIRESULTACTIONS:
        return { ...state.result, result: action.payload };
      default:
        return state;
    }
  };
  
  export default creditsReducer;
  

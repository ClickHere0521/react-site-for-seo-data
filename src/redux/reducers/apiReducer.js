import { APIOPTIONACTIONS, APIRESULTACTIONS } from '../actions/apiActions';
  
  const initialState = {
    se: '',
    setype: '',
    location: 2752,
    language: '',
    device: '',
    os: '',
    sep: '',
    keyword: '',
    result: {},
    includeSerp: false,
    tag: '',
    interval: {
      from: '',
      to: '',
    },
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
          case 'priority': return { ...state, priority: action.payload.value };
          case 'keyword': return { ...state, keyword: action.payload.value };
          case 'includeSerp': return { ...state, includeSerp: action.payload.value };
          case 'tag': return { ...state, tag: action.payload.value };
          case 'interval': return { ...state, interval: action.payload.value };
          default: return state;
        }
      case APIRESULTACTIONS:
        return { ...state, result: action.payload };
      default:
        return state;
    }
  };
  
  export default creditsReducer;
  

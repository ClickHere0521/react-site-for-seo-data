import {
    CREDITSACTION,
    REMAINCREDITSACTION,
  } from '../actions/creditsActions';
  
  const initialState = {
    price: 100,
    credits: 200,
    remaincredits: 0,
  };
  
  const creditsReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREDITSACTION:
        return { price: action.payload.price, credits: action.payload.credits };
      case REMAINCREDITSACTION:
        return { remaincredits: action.payload.credits };
      default:
        return state;
    }
  };
  
  export default creditsReducer;
  

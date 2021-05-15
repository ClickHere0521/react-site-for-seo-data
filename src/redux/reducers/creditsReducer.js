import {
    CREDITSACTION,
  } from '../actions/creditsActions';
  
  const initialState = {
    price: 100,
    credits: 200,
  };
  
  const creditsReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREDITSACTION:
        return { price: action.payload.price, credits: action.payload.credits };
      default:
        return state;
    }
  };
  
  export default creditsReducer;
  

import {
    CREDITSACTION,
    USERINFOACTIONS,
    UPDATEREMAINCREDITS,
  } from '../actions/userInfoActions';
  
  const initialState = {
    price: 100,
    credits: 200,
    remaincredits: 0,
    uid: '',
    email: '',
    username: '',
    password: '',
    visits: 0,
    totalFunds: 0,
    fetchedData: 0,
  };
  
  const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREDITSACTION:
        return { ...state, price: action.payload.price, credits: action.payload.credits };
      case USERINFOACTIONS:
        return { 
          ...state, 
          remaincredits: action.payload.credits, 
          uid: action.payload.uid, 
          email: action.payload.email, 
          username: action.payload.username,
          password: action.payload.password, 
          visits: action.payload.visits,
          fetchedData: action.payload.fetchedData,
          totalFunds: action.payload.totalFunds,
        };
      case UPDATEREMAINCREDITS:
        return {
          ...state,
          remaincredits: action.payload.credits,
        };
      default:
        return state;
    }
  };
  
  export default userInfoReducer;
  

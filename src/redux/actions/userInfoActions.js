export const CREDITSACTION = 'CREDITSACTION';
export const USERINFOACTIONS = 'USERINFOACTIONS';
export const UPDATEREMAINCREDITS = 'UPDATEREMAINCREDITS';
export const UPDATEFETCHEDDATA = 'UPDATEFETCHEDDATA';
export const UPDATEACTIVITY = 'UPDATEACTIVITY';
export const UPDATEFUNDS = 'UPDATEFUNDS';

export default function creditsActions(price, credits) {
  return {
    type: CREDITSACTION,
    payload: { price, credits },
  };
}

export function userInfoActions(userInfo) {  
    return {
        type: USERINFOACTIONS,
        payload: userInfo,
    };
}

export function updateRemainCreditsActions(credits) {
  return {
    type: UPDATEREMAINCREDITS,
    payload: { credits },
  };
}

export function updatefetchedDataActions(fetchedData) {
  return {
    type: UPDATEFETCHEDDATA,
    payload: { fetchedData },
  };
} 

export function updateActivityActions(activity) {
  return {
    type: UPDATEACTIVITY,
    payload: { activity },
  };
}

export function updateFundsActions(funds) {
  return {
    type: UPDATEFUNDS,
    payload: { funds },
  };
}

export const CREDITSACTION = 'CREDITSACTION';
export const USERINFOACTIONS = 'USERINFOACTIONS';
export const UPDATEREMAINCREDITS = 'UPDATEREMAINCREDITS';

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
  console.log(credits);
  return {
    type: UPDATEREMAINCREDITS,
    payload: { credits },
  };
}

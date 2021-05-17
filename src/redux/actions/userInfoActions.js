export const CREDITSACTION = 'CREDITSACTION';
export const USERINFOACTIONS = 'USERINFOACTIONS';

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

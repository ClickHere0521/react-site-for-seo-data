export const CREDITSACTION = 'CREDITSACTION';

export default function creditsActions(price, credits) {
  return {
    type: CREDITSACTION,
    payload: { price, credits },
  };
}


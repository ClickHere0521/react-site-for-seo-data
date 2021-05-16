export const CREDITSACTION = 'CREDITSACTION';
export const REMAINCREDITSACTION = 'REMAINCREDITSACTION';

export default function creditsActions(price, credits) {
  return {
    type: CREDITSACTION,
    payload: { price, credits },
  };
}

export function remainCreditsActions(credits) {
    return {
        type: REMAINCREDITSACTION,
        payload: { credits },
    };
}

export const APIOPTIONACTIONS = 'APIOPTIONACTIONS';

export function apiOptionActions(type, value) {    
  return {
    type: APIOPTIONACTIONS,
    payload: { type, value },   
  };
}


export const APIOPTIONACTIONS = 'APIOPTIONACTIONS';
export const APIRESULTACTIONS = 'APIRESULTACTIONS';

export function apiOptionActions(type, value) {    
  return {
    type: APIOPTIONACTIONS,
    payload: { type, value },   
  };
}

export function apiResultActions(result) {
  console.log(result);
  return {
    type: APIRESULTACTIONS,
    payload: result,
  };
}

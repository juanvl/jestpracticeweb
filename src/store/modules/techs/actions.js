export function addTech(newTech) {
  return {
    type: 'ADD_TECH',
    payload: { tech: newTech },
  };
}

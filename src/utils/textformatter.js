export const textFormater = (term) => {
  const termFormater = term.trim().replace(/\s+/g, '');
  return termFormater;
};

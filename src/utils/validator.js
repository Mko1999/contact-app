export const isEmail = (input) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input);
export const isPhone = (telephone) =>
  /(([+374]{4}|[0]{1}))?([1-9]{2})(\d{6})/.test(telephone);

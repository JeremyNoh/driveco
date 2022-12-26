export const delay = (milliseconds: number, fn: () => {}) => {
  setTimeout(() => {
    fn();
  }, milliseconds);
};

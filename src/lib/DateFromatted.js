export const isoToLongDateString = (isoString) => {
  let date = new Date(isoString);
  if (isNaN(date)) {
    date = new Date().toISOString();
  }
  return `${date.toLocaleString("en-US", {
    month: "long",
  })} ${date.getDate()}, ${date.getFullYear()}`;
};

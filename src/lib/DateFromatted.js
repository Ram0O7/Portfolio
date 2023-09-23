export const isoToLongDateString = (isoString) => {
  let date = new Date(isoString);
  if (isNaN(date)) {
    date = new Date().toISOString();
  }
  return `${date.toLocaleString("en-US", {
    month: "long",
  })} ${date.getDate()}, ${date.getFullYear()}`;
};

export const timeSince = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hrs ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " min ago";
  }
  return Math.floor(seconds) < 60 && "just now";
};

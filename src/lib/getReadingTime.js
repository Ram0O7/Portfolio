import readingTime from "reading-time";

const getReadingTime = (text) => {
  return readingTime(text).text;
};

export default getReadingTime;

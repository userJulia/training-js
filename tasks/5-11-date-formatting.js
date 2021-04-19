'use strict';

const formatDate = (date) => {
  const differenceDate = new Date() - date;

  if (differenceDate < 1000) {
    return 'right now';
  }

  const seconds = differenceDate / 1000;

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  const minutes = differenceDate / 60000;
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  let now = date;
  now = [
    `${now.getDate()}`,
    `0${(now.getMonth() + 1)}`,
    `${now.getFullYear()}`,
    `${now.getHours()}`,
    `${now.getMinutes()}`,
  ];
  now.map((parts) => {
    return parts.slice(-2);
  });
  return `${now.slice(0, 3).join('.')} ${now.slice(3).join(':')}`;
};

console.log(formatDate(new Date(new Date() - 1))); // right now
console.log(formatDate(new Date(new Date() - 30 * 1000))); // 30seconds away
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // 5minutes away
console.log(formatDate(new Date(new Date() - 86400 * 1000)));// 05.04.2021 17:18

'use strict';

const randomMinMax = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const randomMax = (m) => randomMinMax(0, m);

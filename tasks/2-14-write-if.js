'use strict';

const browser = prompt('Enter browser');

if (browser === 'Edge') {
  alert('You have got the Edge!');
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  alert('Okay, we support these browsers too');
} else {
  alert('We hope that this page looks ok!');
}

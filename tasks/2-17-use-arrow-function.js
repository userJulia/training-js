'use strict';

const ask = (question, yes, no) => {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
};

ask (
  'are you agree?',
  () => alert('you are agree'),
  () => alert('you canceled this operation')
);

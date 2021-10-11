import Scroller from './scroller/scroller.js';

;(function (win, doc) {
  function initFns () {
    fetch('./scroller_config.json')
      .then(res => res.json())
      .then(json => new Scroller({...json, debug: 0}))
      .catch(err => console.log(err));
  }

  if (doc.readyState === 'complete') initFns();
  else doc.addEventListener('DOMContentLoaded', initFns);
})(window, window.document);
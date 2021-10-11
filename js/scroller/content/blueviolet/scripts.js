;(function (win, doc) {
  const name = 'blueviolet';
  win.addEventListener(`scroller.${name}`, evt => {
    const section = document.querySelector(`[class*="section--${name}"]`);
    if (section) {
      const { ratio } = evt.detail;
      section.querySelector('.ratio').innerHTML = `${Math.round(ratio * 100)}%`;
    }
  });
})(window, window.document);
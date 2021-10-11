addEventListener('scroller', evt => {
  const { ratio } = evt.detail;
  console.log('!!!!', Math.round(ratio * 100));
})
// rem单位自适应适配
(function () {
  const baseSize = 16;
  const standard = 1920;
  const maximum = 2;
  let scale = document.documentElement.clientWidth / standard;
  document.documentElement.style.fontSize = baseSize * Math.min(scale, maximum) + 'px';
  window.addEventListener('resize', function (e: Event) {
    const htmlWidthSize = document.documentElement.clientWidth;
    scale = htmlWidthSize / standard;
    document.documentElement.style.fontSize = baseSize * Math.min(scale, maximum) + 'px';
    // console.log('自适应大小适配：', baseSize * Math.min(scale, maximum) + "px");
  });
})();

const style = document.createElement('style');
style.textContent = `
  html {
    filter: invert(1) hue-rotate(180deg);
  }
  img, video {
    filter: invert(1) hue-rotate(180deg);
  }
`;
document.head.append(style);

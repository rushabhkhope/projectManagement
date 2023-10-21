const generateBtnClass = (color, variant = "text") => {
  const cssClass = `btn-${variant}-${color}`;
  return cssClass;
};
const generateRoundedClass = (isRounded) => {
  if (isRounded) {
    const cssClass = `rounded-pill`;
    return cssClass;
  }
  return "";
};

export { generateBtnClass, generateRoundedClass };

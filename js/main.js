// get colors

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getRBG = () => {
  const red = getRandomInt(255);
  const green = getRandomInt(255);
  const blue = getRandomInt(255);
  const rbg = `rgb(${red}, ${green}, ${blue})`;
  return rbg;
};

const convertRBGtoHex = (rbg) => {
  // const [red, blue, green] = ;
  return 5;
};

const addHexValue = (hex) => {
  console.log(hex);
};

const colorChangingButton = document.getElementById("color-changing-button");

const firstColorContainer = document.getElementById("first-color-container");
const secondColorContainer = document.getElementById("second-color-container");
const thirdColorContainer = document.getElementById("third-color-container");

colorChangingButton.addEventListener("click", () => {
  let randomColor = getRBG();
  firstColorContainer.style.backgroundColor = randomColor;
  let hexValue = convertRBGtoHex(randomColor);
  addHexValue(hexValue);

  randomColor = getRBG();
  secondColorContainer.style.backgroundColor = randomColor;

  randomColor = getRBG();
  thirdColorContainer.style.backgroundColor = randomColor;
});

// add names of colors to div
// const pColorRBG = document

// get colors

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getRGB = () => {
  const red = getRandomInt(255);
  const green = getRandomInt(255);
  const blue = getRandomInt(255);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
};

const decToHex = (dec) => {
  if (typeof dec === "string") {
    dec = parseInt(dec);
  }
  if (typeof dec === "number") {
    dec = dec.toString(16).padStart(2, "0");
    console.log(dec.length);
    return dec;
  } else {
    // alert browser if input is not a string or a number
    window.alert("Sorry error has occured in decToHex function call.");
  }
};
console.log(decToHex(5));

const convertRGBtoHex = (rgb) => {
  const [red, green, blue] = rgb.match(/\d+/g);
  console.log(red, green, blue);

  const hex1 = decToHex(red);
  const hex2 = decToHex(green);
  const hex3 = decToHex(blue);

  return `#${hex1}${hex2}${hex3}`;
};

const colorChangingButton = document.getElementById("color-changing-button");

const firstColorNameContainer = document.querySelector(
  "#first-color-name-container"
);
const secondColorNameContainer = document.querySelector(
  "#second-color-name-container"
);
const thirdColorNameContainer = document.querySelector(
  "#third-color-name-container"
);

const firstColorContainer = document.querySelector("#first-color-container");
const secondColorContainer = document.querySelector("#second-color-container");
const thirdColorContainer = document.querySelector("#third-color-container");

const firstNameContainer = document.querySelector("#first-name-container");
const secondNameContainer = document.querySelector("#second-name-container");
const thirdNameContainer = document.querySelector("#third-name-container");
console.log(thirdNameContainer);
console.log(thirdNameContainer.childNodes);
thirdNameContainer.innerHTML = "";

colorChangingButton.addEventListener("click", () => {
  let randomColor = getRGB();
  firstColorContainer.style.backgroundColor = randomColor;
  let hexValue = convertRGBtoHex(randomColor);
  if (firstNameContainer.hasChildNodes()) {
    firstNameContainer.removeChild(firstNameContainer.firstChild);
  }
  const p1 = document.createElement("p");
  p1.innerText = hexValue;
  firstNameContainer.append(p1);
  p1.className = "center-text-horizontally";

  randomColor = getRGB();
  secondColorContainer.style.backgroundColor = randomColor;
  hexValue = convertRGBtoHex(randomColor);
  if (secondNameContainer.hasChildNodes()) {
    secondNameContainer.removeChild(secondNameContainer.firstChild);
  }
  const p2 = document.createElement("p");
  p2.innerText = hexValue;
  secondNameContainer.append(p2);
  p2.className = "center-text-horizontally";

  randomColor = getRGB();
  thirdColorContainer.style.backgroundColor = randomColor;
  hexValue = convertRGBtoHex(randomColor);
  if (thirdNameContainer.hasChildNodes()) {
    thirdNameContainer.removeChild(thirdNameContainer.firstChild);
  }
  const p3 = document.createElement("p");
  p3.innerText = hexValue;
  thirdNameContainer.append(p3);
  p3.className = "center-text-horizontally";
});

// https://calculator.swiftutors.com/absolute-liquid-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const result = document.getElementById('result');

// radio buttons
const absoluteLiquidRatioRadio = document.getElementById('absoluteLiquidRatioRadio');
const absoluteLiquidAssetsRadio = document.getElementById('absoluteLiquidAssetsRadio');
const currentLiabilitiesRadio = document.getElementById('currentLiabilitiesRadio');

let absoluteLiquidRatio;
let absoluteLiquidAssets = v1;
let currentLiabilities = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

absoluteLiquidRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute Liquid Assets';
  variable2.textContent = 'Current Liabilities';
  absoluteLiquidAssets = v1;
  currentLiabilities = v2;
  result.textContent = '';
});

absoluteLiquidAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute Liquid Ratio';
  variable2.textContent = 'Current Liabilities';
  absoluteLiquidRatio = v1;
  currentLiabilities = v2;
  result.textContent = '';
});

currentLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute Liquid Ratio';
  variable2.textContent = 'Absolute Liquid Assets';
  absoluteLiquidRatio = v1;
  absoluteLiquidAssets = v2;
  result.textContent = '';
});

btn1.addEventListener('click', function() {
  
  if(absoluteLiquidRatioRadio.checked) {
    if(isNaN(computeAbsoluteLiquidRatio()))
      result.textContent = "wrong input";
    else
      result.textContent = `Absolute Liquid Ratio = ${computeAbsoluteLiquidRatio().toFixed(2)}`;
  }

  else if(absoluteLiquidAssetsRadio.checked) {
    if(isNaN(computeAbsoluteLiquidAssets()))
      result.textContent = "wrong input";
    else
      result.textContent = `Absolute Liquid Assets = ${computeAbsoluteLiquidAssets().toFixed(2)}`;
  }
    

  else if(currentLiabilitiesRadio.checked) {
    if(isNaN(computeCurrentLiabilities()))
      result.textContent = "wrong input";
    else
      result.textContent = `Current Liabilities = ${computeCurrentLiabilities().toFixed(2)}`;
  }
})

btn2.addEventListener('click', function() {
  
  v1.value = '';
  v2.value = '';
})

// calculation

function computeAbsoluteLiquidRatio() {
  return Number(absoluteLiquidAssets.value) / Number(currentLiabilities.value);
}

function computeAbsoluteLiquidAssets() {
  return Number(absoluteLiquidRatio.value) * Number(currentLiabilities.value);
}

function computeCurrentLiabilities() {
  return Number(absoluteLiquidAssets.value) / Number(absoluteLiquidRatio.value);
}

// design

const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// progress

var scroll = this.document.querySelector('.scrollTop');

window.addEventListener('scroll', function() {
  scroll.classList.toggle('active', window.scrollY > 150)

  
})

scroll.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// end progress

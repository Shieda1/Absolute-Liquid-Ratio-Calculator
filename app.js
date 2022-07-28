// https://calculator.swiftutors.com/absolute-liquid-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
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

btn.addEventListener('click', function() {
  
  if(absoluteLiquidRatioRadio.checked)
    result.textContent = `Absolute Liquid Ratio = ${computeAbsoluteLiquidRatio().toFixed(2)}`;

  else if(absoluteLiquidAssetsRadio.checked)
    result.textContent = `Absolute Liquid Assets = ${computeAbsoluteLiquidAssets().toFixed(2)}`;

  else if(currentLiabilitiesRadio.checked)
    result.textContent = `Current Liabilities = ${computeCurrentLiabilities().toFixed(2)}`;
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
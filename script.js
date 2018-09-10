const shoppingSummary = document.querySelector('.js-shopping-summary');
let shoppingSummaryCalc = parseFloat(document.querySelector('.js-shopping-summary').innerText);
const numberOfProducts = document.querySelector('.js-products');
const productPrice = document.querySelectorAll('.js-price');
const buyNowBtn = document.querySelectorAll('.js-btn-buy');
const productPriceArr = Array.from(productPrice);
const buyNowBtnArr = Array.from(buyNowBtn);
let nrProducts = 0;

for(let i = 0, size = buyNowBtnArr.length; i < size; i++) {
    let buyBtn = document.getElementById([i + 1]);
    buyBtn.addEventListener('click', () => {
        nrProducts++;
        numberOfProducts.innerHTML = nrProducts;
        shoppingSummaryCalc += parseFloat(productPriceArr[i].innerText);
        shoppingSummary.innerHTML = shoppingSummaryCalc.toFixed(2);
    });
}
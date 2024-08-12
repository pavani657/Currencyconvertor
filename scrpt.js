const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110,
    INR: 74,
    AUD: 1.35,
    CAD: 1.25,
    CNY: 6.45
};

function convertCurrency() {
    let amount = parseFloat(document.getElementById('amount').value);
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    let fromRate = exchangeRates[fromCurrency];
    let toRate = exchangeRates[toCurrency];
    let convertedAmount = (amount / fromRate) * toRate;

    document.getElementById('convertedAmount').value = convertedAmount.toFixed(2);
}

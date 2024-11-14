let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const Currency = currencyValues.find(item => item.currency === exchangeCurrency);
    return Currency ? sumUAH / Currency.value : null; // Перевіряємо, чи знайдений валюта
};

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));

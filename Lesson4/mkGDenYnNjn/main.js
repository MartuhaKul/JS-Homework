function exchange(sumUAH,currencyValues,exchangeCurrency){
    let Currency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency)
            Currency = item;
    }
    return sumUAH/Currency.value

}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));
// Task #1
/* Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa)
які містять числові значення (збереження юзера)

Створити массив обєктів bank в якому є обєкети з ключами buy, sell  з числовими значеннями ( продаж і покупка валюти)
а також ключ name в який передаємо назву валюти (usa, euro, ua)

Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити
користувач, врахувати можливість неможливості покупки.
Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження */

const userWallet = {
    amountUsa: 500,
    amountEuro: 700,
    amountUa: 20000,
    bank: [
        {name: 'usa', buy: 30, sell: 40},
        {name: 'euro', buy: 30, sell: 40},
        {name: 'ua', buy: 1, sell: 1},
    ]
}
function userChance(value){
    let resp = []
    for (let currency of value.bank) {
        if (value.amountUa / currency.sell >= 1) {
            resp.push({currency: currency.name, canBuy: value.amountUa / currency.sell})
        }
    }

    return resp
}

console.log(userChance(userWallet))

function userSell(value) {
    let wallet = []
    for (let currency of value.bank) {
        switch (currency.name) {
            case 'usa':
                let ua1 = currency.buy * value.amountUsa;
                wallet.push({currency: currency.name, ua: ua1});
                break
            case 'euro':
                let ua2 = currency.buy * value.amountEuro
                wallet.push({currency: currency.name, ua: ua2});
                break
            case 'ua':
                let ua3 = currency.buy * value.amountUa
                wallet.push({currency: currency.name, ua: ua3});
                break
        }
    }
    return wallet
}

console.log(userSell(userWallet))


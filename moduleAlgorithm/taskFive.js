var bestTimetoBuyandSellStock = function (prices) {
  // Промежуточная переменная цены для покупки и резутатирующая прибыль
  let priceForPay = 0;
  let results = 0;

  //   Если цена для покупки равна нулю, устанавливаем значение
  //   Если цена для покупки больше текущего значения, устанавливаем значение
  //   Если разница между ценой покупки и текщем значением больше результатирующего значения,
  //   то устанавливаем результатирующее значение
  for (const value of prices) {
    if (priceForPay === 0) {
      priceForPay = value;
    }
    if (priceForPay > value) {
      priceForPay = value;
    }
    if (value - priceForPay > results) {
      results = value - priceForPay;
    }
  }

  return results;
};

// Раскомментировать
// console.log(bestTimetoBuyandSellStock([7, 1, 5, 3, 6, 4]));
// console.log(bestTimetoBuyandSellStock([7, 6, 4, 3, 1]));

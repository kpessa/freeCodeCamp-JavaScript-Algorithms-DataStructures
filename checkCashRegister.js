log = console.log;

function checkCashRegister(price, cash, cid) {
  var changeRequested = cash - price;
  //! --------------
  //!  Edge Cases
  //! --------------
  // Edge Case #1, not enough money in drawer
  var totalChange = cid.reduce((total, [_, amount]) => total + amount, 0);

  // Edge Case, not enough coins
  var totalCoins = cid.filter((option, i) => i < 4).reduce((total, [_, amount]) => total + amount, 0);
  var coinsRequested = changeRequested % 1;

  // Include both edge cases to return insufficent funds
  if (totalChange < changeRequested || totalCoins < coinsRequested)
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    };
  //! ------------------
  //!  END: Edge Cases
  //! ------------------

  var n = changeRequested;
  let change = [];

  const f = (amt, desc, cid) => {
    let [_, max] = cid.find(([opDesc, _]) => opDesc === desc);
    let x = Math.min(max, Math.floor(n / amt) * amt);
    if (x || changeRequested == totalChange) {
      if (changeRequested == totalChange) change.unshift([desc, x]);
      else change.push([desc, x]);
      n -= x;
      n = n.toFixed(2);
    }
  };

  [
    [100, 'ONE HUNDRED'],
    [20, 'TWENTY'],
    [10, 'TEN'],
    [5, 'FIVE'],
    [1, 'ONE'],
    [0.25, 'QUARTER'],
    [0.1, 'DIME'],
    [0.05, 'NICKEL'],
    [0.01, 'PENNY'],
  ].forEach(([amt, desc]) => {
    f(amt, desc, cid);
    // log(n);
  });

  return {
    status: totalChange === changeRequested ? 'CLOSED' : 'OPEN',
    change: change,
  };
}

checkCashRegister(19.5, 20, [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0],
]);

module.exports = checkCashRegister;

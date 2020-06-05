const getNumeriPrimi = (n) => {
  const numeri_primi = [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37,
    41,
    43,
    47,
    53,
    59,
    61,
    67,
    71,
    73,
    79,
    83,
    89,
    97,
  ];

  const result = [];

  for (let index = 0; index < n; index++) {
    result.push(numeri_primi[index]);
  }

  return result;
};

module.exports = getNumeriPrimi;

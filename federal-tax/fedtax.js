// Weekly Employee Income Withholding Calculator
// Originally by GitHub#Liath
// Based on IRS Circular E - http://www.irs.gov/pub/irs-pdf/p15.pdf
// Per the "Percentage Method"
var w = {
    s: {
      // Single
      0: { p: 0, s: 0 },
      44: { p: 0.1, s: 0 },
      222: { p: 0.15, s: 17.8 },
      764: { p: 0.25, s: 99.1 },
      1789: { p: 0.28, s: 355.35 },
      3685: { p: 0.33, s: 886.23 },
      7958: { p: 0.35, s: 2296.32 },
      7990: { p: 0.396, s: 2307.52 }
    },
    m: {
      // Married
      0: { p: 0, s: 0 },
      165: { p: 0.1, s: 0 },
      520: { p: 0.15, s: 35.5 },
      1606: { p: 0.25, s: 198.4 },
      3073: { p: 0.28, s: 565.15 },
      4597: { p: 0.33, s: 991.87 },
      8079: { p: 0.35, s: 2140.93 },
      9105: { p: 0.396, s: 2500.03 }
    }
  },
  ba = 76.9, // 1 Allowance
  c = function(m, a, g) {
    // Returns Federal Income Tax amount (Married, Allowances, Gross Income)
    g -= ba * a; // Pay after allowances
    var b = Object.keys(w[m == 1 ? "m" : "s"]); //Married?
    for (var i = 0; i < b.length; i++) {
      // Find bracket
      if (b[i] > g) {
        g -= b[i - 1]; // Get taxable income
        b = w[m == 1 ? "m" : "s"][b[i - 1]]; // Set bracket
        return b.p * g + b.s; // Taxable income * Tax Rate + Base Tax, per IRS Circular E table 5
      }
    }
  };

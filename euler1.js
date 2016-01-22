console.log('Open Sesame');

var sumTotal = 0;

function calcSum() {
  for (var x = 0; x < 1000; x++){
    // console.log(x)
    if (x % 3 == 0 || x % 5 == 0){
      sumTotal += x;
      // console.log(x, sumTotal);
    };
  };
  return sumTotal;
};
calcSum();

console.log (sumTotal);

// SOLVED!

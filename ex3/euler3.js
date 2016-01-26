console.log('open sesame');

var isPrime = function(num){
  if (num < 2) return(false);
  if (num === 2) return(true);
  for (var x = 2; x < num; x++){
    if (num % x == 0) {
      return false;
    }
  };
  return true;
};

var primeAnswer;

function bigPrime(){
  for (var x = 0; x <= 600851475143; x++){
    if (600851475143 % x == 0){
      if (isPrime(x)) {
        console.log(x);
        primeAnswer = x;
      }
    };
  };
  // return primeAnswer;
};

// console.log(primeAnswer);

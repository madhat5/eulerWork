console.log('Open Sesame')

var int1 = 1;
var int2 = 2;
var int3 = 0;
var intEleven = 0;

while (int3 <= 4000000) {
  int3 = int1 + int2;
  int1 = int2;
  int2 = int3;

  // console.log(int3);
  if (int3 % 2 == 0) {
    intEleven += int3;
  };
}

console.log(int3);
console.log(intEleven);
// answer is intEleven + 2(aka int2)

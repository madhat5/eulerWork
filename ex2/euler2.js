console.log('Open Sesame')

var int1 = 1;
var int2 = 2;
var int3;
var count = 2;
var intEleven = 0;

while (count < 22) {
  int3 = int1 + int2;
  int1 = int2;
  int2 = int3;

  count++;
  console.log(int3);
  if (count % 11 == 0) {
    intEleven += int3;
  };
}

console.log(int3);
console.log(intEleven);

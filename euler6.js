console.log('Sim sim salabim');

var res = 0;

var sumSq = function() {
    var sum = 0;
    for (var x = 1; x <= 100; x++){
        sum = sum + (x * x)
    };
    // console.log(sum);
    return sum;
};

var sqSum = function() {
    var sum = 0;
    for (var x = 0; x <= 100; x++){
        sum = sum + x;
    }
    sum = sum * sum;
    // console.log(sum);
    return sum;
};

var resControl = 25164150;

res = sqSum() - sumSq();

console.log(res);

if (res == resControl) {
    console.log('true')
};

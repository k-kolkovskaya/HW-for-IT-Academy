function sum(sumValue) {

    let result = 0;

    function sum2(sum2Value) {
        result += sum2Value;
        return sum2;
    }

    sum2.showResult = function () {
        console.log(`sum is ${result}`);
    };

    sum2(sumValue);
    return sum2;
}

sum(2)(15)(67).showResult();
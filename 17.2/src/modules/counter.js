function counting() {
    let counter = 0;

    function increaseCounter(increaseValue) {
        counter += increaseValue;
    }

    function decreaseCounter(decreaseValue) {
        counter -= decreaseValue;
    }

    function show() {
        console.log(counter);
    }

    const obj = {
        increaseCounter,
        decreaseCounter,
        show
    };
    return obj;
}

let newCounting = counting();
newCounting.show();
newCounting.increaseCounter(5);
newCounting.show();
newCounting.decreaseCounter(3);
newCounting.show();
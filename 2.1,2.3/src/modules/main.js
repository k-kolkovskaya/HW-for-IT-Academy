(function () {
    let buttons = document.querySelectorAll('.button');
    let resetButtons = document.querySelectorAll('.reset-button');
    let body = document.body;
    let input = document.querySelector('.input');
    let sels = document.querySelectorAll('.sel');

    buttons[0].addEventListener('click', onClick);
    buttons[1].addEventListener('click', onClick1);
    buttons[2].addEventListener('click', onClick2);
    buttons[3].addEventListener('click', onClick3);
    sels[3].addEventListener('change', onChange);
    sels[4].addEventListener('change', onChange1);
    buttons[4].addEventListener('click', addNew);
    buttons[5].addEventListener('click', removeColor);

    for (let i = 0; i < resetButtons.length; i++) {
        resetButtons[i].addEventListener('click', reset);
    }

    function applyColor(color) {
        document.body.style.setProperty('--main-color', color);
    }

    //Part 1

    function onClick() {
        body.style.backgroundColor = input.value;
    }

    //Part 2

    function onClick1() {
        reset();
        body.style.backgroundColor = sels[0].value;
    }

    //Part 3

    function onClick2() {
        reset();
        body.className = sels[1].value;
    }

    //Part 4

    function onClick3() {
        reset();
        applyColor(sels[2].value);
    }



    //Part 5


    function onChange(e) {
        reset();
        applyColor(e.target.value);
    }

    //Part 6

    function onChange1() {
        reset();
        body.style.backgroundColor = sels[4].value;
    }

    function addNew() {
        let question = prompt('What color do you want to add?', '');
        let option = document.createElement("option");
        if (question) {
            option.text = question;
            option.value = question;
            sels[4].add(option);
        }

    }

    function removeColor() {
        let question = prompt('What color do you want to remove?', '');
        let options = sels[4].getElementsByTagName('OPTION');
        for (let i = 0; i < options.length; i++) {
            if (sels[4].options[i].value === question) {
                sels[4].remove(i);
            }
        }
    }



    //Reset button realization

    function reset() {
        body.style.backgroundColor = '';
        body.className = '';
        applyColor('');
        input.value = '';
    }
})();
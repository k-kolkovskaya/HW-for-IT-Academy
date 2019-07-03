(function () {

    //uncomment the line below to start the program
    //questions();

    function validation(objProperty, text) {
        do {
            objProperty = prompt(text, "");
        } while (!objProperty);
        return objProperty;
    }

    function numberValidation(objProperty, text) {
        let re = /^[0-9]+$/g;
        do {
            objProperty = prompt(text, "");
        } while (!objProperty || !re.test(objProperty));
        return objProperty;
    }

    function questions() {
        let user = {};
        let name = validation(user.name, 'Как вас зовут?');
        let secondName = validation(user.secondName, 'Какая у вас фамилия?');
        let thirdName = validation(user.thirdName, 'А отчество?');
        let age = numberValidation(user.age, 'Сколько вам лет?');
        user.gender = confirm('Ваш пол женский?');

        function userGender() {
            let female = "женский",
                male = "мужской";
            user.gender ? (user.gender = female) : (user.gender = male);
            return user.gender;
        }

        function retired() {
            let retired = '';
            if ((user.gender && age >= 55) || (!user.gender && age >= 60)) {
                retired = 'да'
            } else {
                retired = 'нет';
            }
            return retired;
        }

        alert(`Ваше ФИО: ${name} ${secondName} ${thirdName}
        Ваш возраст в годах: ${age}
        Ваш возраст в днях: ${parseInt(age) * 365}
        Через 5 лет вам будет: ${parseInt(age) + 5}
        Ваш пол: ${userGender()}
        Вы на пенсии: ${retired()}`);
    }
})();
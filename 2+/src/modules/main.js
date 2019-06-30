(function () {
    let allAnswers = ["У всех есть проблемы", "Тебе просто надо выпить", "Не грусти",
        "Возьми себя в руки", "На завод тебе надо!", "Перестань себя жалеть",
        "Мне от депрессии помогает шоппинг", "Тебе просто лень ходить на работу",
        "Найди хобби", "Займись спортом", "Ты же был недавно в отпуске!",
        "Хватит ныть", "Ты все преувеличиваешь", "Хватит вести себя как ребенок",
        "Попей витамины", "Просто полюби себя", "Наслаждайся жизнью!",
        "Все будет хорошо"
    ];

    let bgColors = ['bg-1', 'bg-2', 'bg-3', 'bg-4', 'bg-5', 'bg-6', 'bg-7', 'bg-8', ]

    let imageUrls = ['https://memepedia.ru/wp-content/uploads/2016/03/ded-ulybaetsya-foto.jpg',
        'https://znaj.ua/crops/9ac2b4/360x0/1/0/2018/09/08/ptqny6WzTj1aJuM2YDoyyQCSWOmJuS9uzn0eCZNY.jpeg',
        'https://tgrm.su/img/stickers/haroldbest/9.jpg',
        'https://memepedia.ru/wp-content/uploads/2016/03/harold-hide-the-pain-meme-03.jpg'
    ]

    let body = document.body;
    let answer = document.getElementById('answer');
    let img = document.getElementById('img');

    function preloadImages(array) {
        if (!preloadImages.list) {
            preloadImages.list = [];
        }
        var list = preloadImages.list;
        for (var i = 0; i < array.length; i++) {
            var img = new Image();
            img.onload = function () {
                var index = list.indexOf(this);
                if (index !== -1) {
                    // remove image from the array once it loaded
                    // for memory consumption reasons
                    list.splice(index, 1);
                }
            }
            list.push(img);
            img.src = array[i];
        }
    }

    preloadImages(imageUrls);

    answer.addEventListener('click', onClick);
    setText(answer);
    changeColor();



    function getRandomIndex(num) {
        let index = Math.floor(Math.random() * num)
        return index;
    }

    function createText() {
        let randomAnswer = allAnswers[getRandomIndex(allAnswers.length + 1)];
        return (document.createTextNode(randomAnswer));
    }

    function setText(el) {
        el.innerText = allAnswers[getRandomIndex(allAnswers.length)];
    }


    function changeColor() {
        body.className = bgColors[getRandomIndex(bgColors.length)];
    }

    function changeImage() {
        img.src = imageUrls[getRandomIndex(imageUrls.length)];
    }


    function onClick() {
        setText(answer)
        changeColor();
        changeImage();
    }
})();
function initialize() {
    var articles = "";
    var my_name = "yarinMizrahi";
    var my_length = my_name.length;

    for (var i = 0; i < my_length * 2; i++) {

        articles += "<article></article>";
    }

    var main = document.getElementsByTagName("main")[0];
    main.innerHTML = articles;
    var first = document.getElementsByTagName('article');

    first[0].onmousemove = function () {

        first[0].style.backgroundImage = "url('./images/Y_letter.jpg')";

    };

    first[0].onmouseout = function () {
        first[0].style.backgroundImage = "none";
    };

};

function color_change() {
    var box = document.getElementsByTagName('article');

    for (var i = 0; i < 5; i++) {
        box[i].style.backgroundColor = "#e63936";
    }
};

function color_change_back() {
    var box = document.getElementsByTagName('article');

    for (var i = 0; i < 5; i++) {
        box[i].style.backgroundColor = "#a8dadc";
    }
};


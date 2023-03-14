window.onload = function () { Demo(); };
var body = document.getElementById('body');
var section = document.getElementById('section');

const deg = 6;

var today = new Date();
var hr = today.getHours();
var min = today.getMinutes();
var sc = today.getSeconds();

function Demo() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sc = today.getSeconds();

    min = checkTime(min);
    sc = checkTime(sc);

    document.getElementById('demo').innerHTML = hr + ":" + min + ":" + sc;
    setTimeout(function () { Demo() }, 1000);

    if (sc == 00) {
        body.style.backgroundColor = 'pink'
        section.style.background = linear - gradient('to right', 'red', 'yellow', 'orange');
    } else
        if (sc == 01) {
            body.style.backgroundColor = 'blue'
        } else
            if (sc == 02) {
                body.style.backgroundColor = 'green'
            } else
                if (sc == 03) {
                    body.style.backgroundColor = 'brown'
                } else
                    if (sc == 04) {
                        body.style.backgroundColor = 'lightgreen'
                    } else
                        if (sc == 05) {
                            body.style.backgroundColor = 'Orange'
                        } else
                            if (sc == 06) {
                                body.style.backgroundColor = 'black'
                            } else
                                if (sc == 07) {
                                    body.style.backgroundColor = 'indigo'
                                } else
                                    if (sc == 08) {
                                        body.style.backgroundColor = 'purple'
                                    } else
                                        if (sc == 09) {
                                            body.style.backgroundColor = '#091921'
                                        }
};

setInterval(() => {
    var today = new Date();
    var hr = today.getHours() * 30;
    var min = today.getMinutes() * deg;
    var sc = today.getSeconds() * deg;

    document.getElementById('hr').style.transform = `rotateZ(${hr + (min / 12)}deg)`;
    document.getElementById('min').style.transform = `rotateZ(${min}deg)`;
    document.getElementById('sc').style.transform = `rotateZ(${sc}deg)`;
})
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};




const List = [{ Name: 'hassan', age: '27' }, { Name: 'imad', age: '"30"' }, { Name: 'Smail', age: '20' }, { Name: 'Omayma', age: '23' }];
var input = document.getElementById('input');

function button() {
    if (document.getElementById('input').value == "") { alert('HI! I am testing Array. Please Write Your Name Correctly') }
    else if (input.value !== "") {
        document.write('Nice To Meet You ' + input.value)
    }
};

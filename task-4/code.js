
let flag = 1;

let from = document.querySelectorAll('.from');
let to = document.querySelectorAll('.to');
let from_to = document.querySelectorAll('.from_to');

let now = new Date();
let hour = now.getHours();



function getShedule(now, hour) {

    let date = now.getDate();
    let month = (now.getMonth() + 1);
    let year = now.getFullYear();
    let h = now.getHours();

    if (24 - hour <= 0) {
        h = hour - 24;
        h = '0' + h;
        date += 1;
    }
    else if (h <= 9) {
        h = '0' + hour;
    }
    else {
        h = hour;
    }


    return `${date}.${month}.${year}, ${h}`
}





from[0].innerHTML = `${getShedule(now, hour + 1)}:00`;
from[1].innerHTML = `${getShedule(now, hour + 1)}:30`;
from[2].innerHTML = `${getShedule(now, hour + 1)}:45`;
from[3].innerHTML = `${getShedule(now, hour + 2)}:00`;
from[4].innerHTML = `${getShedule(now, hour + 2)}:15`;
from[5].innerHTML = `${getShedule(now, hour + 3)}:00`;

to[0].innerHTML = `${getShedule(now, hour + 1)}:30`;
to[1].innerHTML = `${getShedule(now, hour + 1)}:45`;
to[2].innerHTML = `${getShedule(now, hour + 2)}:00`;
to[3].innerHTML = `${getShedule(now, hour + 2)}:15`;
to[4].innerHTML = `${getShedule(now, hour + 2)}:35`;
to[5].innerHTML = `${getShedule(now, hour + 3)}:50`;
to[6].innerHTML = `${getShedule(now, hour + 3)}:55`;

from_to[0].innerHTML = `${getShedule(now, hour + 1)}:30`;
from_to[1].innerHTML = `${getShedule(now, hour + 1)}:45`;
from_to[2].innerHTML = `${getShedule(now, hour + 2)}:00`;
from_to[3].innerHTML = `${getShedule(now, hour + 2)}:15`;
from_to[4].innerHTML = `${getShedule(now, hour + 2)}:35`;
from_to[5].innerHTML = `${getShedule(now, hour + 3)}:50`;
from_to[6].innerHTML = `${getShedule(now, hour + 3)}:55`;


var select_route = document.querySelector('.select');

select_route.onchange = function () {
    var indexSelected = select_route.selectedIndex;
    var option = select_route.querySelectorAll('option')[indexSelected];

    var selectedId = option.getAttribute('id');

    if (selectedId == '1') {
        flag = 1;
        const elements_from = document.getElementsByClassName('from');
        for (const element of elements_from) {
            element.style.display = 'block';
        }

        const elements_to = document.getElementsByClassName('to');
        for (const element of elements_to) {
            element.style.display = 'none';
        }
        document.querySelector('.route_from_to').style.display = 'none';
    }
    if (selectedId == '2') {
        flag = 2;
        const elements_from = document.getElementsByClassName('from');
        for (const element of elements_from) {
            element.style.display = 'none';
        }

        const elements_to = document.getElementsByClassName('to');
        for (const element of elements_to) {
            element.style.display = 'block';
        }
        document.querySelector('.route_from_to').style.display = 'none';
    }

    if (selectedId == '3') {

        flag = 3;
        const elements_from = document.getElementsByClassName('from');
        for (const element of elements_from) {
            element.style.display = 'block';
        }

        const elements_to = document.getElementsByClassName('to');
        for (const element of elements_to) {
            element.style.display = 'none';
        }

        document.querySelector('.route_from_to').style.display = 'block';



        var select_route_from_to = document.querySelector('.select_from_to');

        select_route_from_to.onchange = function () {
            var indexSelected_from_to = select_route_from_to.selectedIndex;
            var option = select_route_from_to.querySelectorAll('option')[indexSelected_from_to];

            var selectedId_from_to = option.getAttribute('id');
            const elements_to = document.getElementsByClassName('from_to');
            if (selectedId_from_to == '1') {
                elements_to[0].style.display = 'none';
                elements_to[1].style.display = 'none';
                elements_to[2].style.display = 'block';
                elements_to[3].style.display = 'block';
                elements_to[4].style.display = 'block';
                elements_to[5].style.display = 'block';
                elements_to[6].style.display = 'block';
            }

            if (selectedId_from_to == '2') {
                elements_to[0].style.display = 'none';
                elements_to[1].style.display = 'none';
                elements_to[2].style.display = 'none';
                elements_to[3].style.display = 'none';
                elements_to[4].style.display = 'block';
                elements_to[5].style.display = 'block';
                elements_to[6].style.display = 'block';
            }

            if (selectedId_from_to == '3') {
                elements_to[0].style.display = 'none';
                elements_to[1].style.display = 'none';
                elements_to[2].style.display = 'none';
                elements_to[3].style.display = 'none';
                elements_to[4].style.display = 'none';
                elements_to[5].style.display = 'block';
                elements_to[6].style.display = 'block';
            }

            if (selectedId_from_to == '4') {
                elements_to[0].style.display = 'none';
                elements_to[1].style.display = 'none';
                elements_to[2].style.display = 'none';
                elements_to[3].style.display = 'none';
                elements_to[4].style.display = 'none';
                elements_to[5].style.display = 'block';
                elements_to[6].style.display = 'block';
            }

            if (selectedId_from_to == '5') {
                elements_to[0].style.display = 'none';
                elements_to[1].style.display = 'none';
                elements_to[2].style.display = 'none';
                elements_to[3].style.display = 'none';
                elements_to[4].style.display = 'none';
                elements_to[5].style.display = 'block';
                elements_to[6].style.display = 'block';
            }

            if (selectedId_from_to == '6') {
                elements_to[0].style.display = 'none';
                elements_to[1].style.display = 'none';
                elements_to[2].style.display = 'none';
                elements_to[3].style.display = 'none';
                elements_to[4].style.display = 'none';
                elements_to[5].style.display = 'none';
                elements_to[6].style.display = 'block';
            }


        }
    }
};

function result() {

    let string = document.querySelector('.input').value;
    let temp = string.trim();
    let num = Number(temp);

    return num;
}

var e = document.getElementById("time");
var e_from_to = document.getElementById("time_from_to");

function onChange(time) {

    var text = e.options[e.selectedIndex].text;
    time = text;
    return time;
}


function getIndex(time){
    var index = time;
    let string;
    
    switch(index) {
        case 1:  
        string = `${getShedule(now, hour + 1)}:50`;
          break;
      
        case 2:  
        string = `${getShedule(now, hour + 2)}:20`;
          break;
      
        case 3:  
        string = `${getShedule(now, hour + 2)}:35`;
          break;
      
        case 4:  
        string = `${getShedule(now, hour + 2)}:50`;
          break;
        case 5:  
        string = `${getShedule(now, hour + 3)}:05`;
          break;
      
        case 6: 
        string = `${getShedule(now, hour + 3)}:50`;
          break;
      
        case 7: 
        string = `${getShedule(now, hour + 2)}:20`;
          break;
      
        case 8: 
        string = `${getShedule(now, hour + 2)}:35`;
          break;
          
        case 9:  
        string = `${getShedule(now, hour + 2)}:50`;
          break;
      
        case 10:  
        string = `${getShedule(now, hour + 3)}:05`;
          break;
      
        case 11:  
        string = `${getShedule(now, hour + 3)}:25`;
          break;
      
        case 12:  
        string = `${getShedule(now, hour + 4)}:40`;
          break;

        case 13: 
        string = `${getShedule(now, hour + 4)}:45`;
          break;
      
        default:
          alert("error!!!")
          break;
    }

    return string;
}

/*function returnTime(index){
    getIndex(index) 
}*/


function price() {
    let sum;
    let path;
    let time;
    let index = e.selectedIndex;
    let index_from_to =  e_from_to.selectedIndex;

    if (flag === 1) {

        e.onchange = onChange;
        

        sum = result() * 700;

        path = document.querySelector('.path_to').value.trim();
        alert(`Вы выбрали ${result()} билета по маршруту ${path} стоимостью ${sum} рублей. 
        Это путешествие займет 50 минут. 
        Теплоход отправляется: ${onChange(time)} 
        Теплоход прибудет: ${ getIndex(index)} .`);

    }
    else if (flag === 2) {
        e.onchange = onChange;
        

        sum = result() * 700;

        path = document.querySelector('.path_from').value.trim();
        alert(`Вы выбрали ${result()} билета по маршруту ${path} стоимостью ${sum} рублей. 
        Это путешествие займет 50 минут. 
        Теплоход отправляется: ${onChange(time)} 
        Теплоход прибудет: ${ getIndex(index)} .`);
    }
    else if (flag === 3) {
        e.onchange = onChange;
        sum = result() * 1200;

        path = document.querySelector('.path').value.trim();

        alert(`Вы выбрали ${result()} билета по маршруту ${path} стоимостью ${sum} рублей. 
        Это путешествие займет 1 час 40 минут минут. 
        Теплоход отправляется из А: ${onChange(time)} 
        Теплоход прибудет из В в А: ${ getIndex(index_from_to+6)}.`);
    }

}





let deg = 6;
let hr = document.querySelector('.hr');
let mn = document.querySelector('.mn');
let sc = document.querySelector('.sc');

function analogClock(){
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotate(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
}

setInterval(analogClock);

function digitalClock() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ampm = "PM";
    let time = document.querySelector('.time');
    let date = document.querySelector('.date');
    if (h < 12) {
        ampm = "AM";
    }
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
    }
    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    time.innerHTML = h + ':' + m + ':' + s + ' ' + ampm;
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday'
    ];
    let months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    date.innerHTML = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ', ' + days[d.getDay()];
}
setInterval(digitalClock);
function timer(endtime, hour, minute, second) {
    window.addEventListener('DOMContentLoaded', function () {

        'use strict';

        //timer

        let deadline = endtime;

        function calcTime() {
            let t = Date.parse(deadline) - Date.parse(new Date()),
                seconds = Math.floor((t / 1000) % 60),
                minutes = Math.floor((t / 1000 / 60) % 60),
                hours = Math.floor((t / 1000 / 60 / 60) % 24);
    
            return {
                'total': t,
                'seconds': seconds,
                'minutes': minutes,
                'hours': hours
            }
        }

        function showTime() {
            let hours = document.querySelector(hour),
                minutes = document.querySelector(minute),
                seconds = document.querySelector(second),
                everyTime = setInterval(updateClock, 1000);
    
            function updateClock() {
                let t = calcTime();
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
    
                for (let i = 0; i < 10; i++) {
                    if (hours.textContent == i) {
                        hours.textContent = '0' + i;
                    }
                    if (minutes.textContent == i) {
                        minutes.textContent = '0' + i;
                    }
                    if (seconds.textContent == i) {
                        seconds.textContent = '0' + i;
                    }
                }
    
                if (t.total <= 0) {
                    clearInterval(everyTime);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }
        }
    
        showTime();
    });
}

timer('2019-06-03', '.hours', '.minutes', '.seconds'); //or for example first argument '2019-06-03 22:22'
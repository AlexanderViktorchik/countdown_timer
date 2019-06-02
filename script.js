function timer(endtime, hour, minute, second) {
    window.addEventListener('DOMContentLoaded', function () {

        'use strict';

        //timer

        let deadline = endtime;
        let timeout;

        function calcTime() {
            timeout = Date.parse(deadline) - new Date();

            let seconds = Math.floor((timeout / 1000) % 60),
                minutes = Math.floor((timeout / 1000 / 60) % 60),
                hours = Math.floor((timeout / 1000 / 60 / 60) % 24);

            return {
                'seconds': seconds,
                'minutes': minutes,
                'hours': hours
            }
        }

        function showTime() {
            let hours = document.querySelector(hour),
                minutes = document.querySelector(minute),
                seconds = document.querySelector(second),
                t = calcTime();

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

            if (timeout <= 0) {
                clearInterval(everyTime);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

        let everyTime = setInterval(showTime, 1000);

        everyTime();
    });
}

timer('2019-06-03', '.hours', '.minutes', '.seconds'); //or for example first argument '2019-06-03 22:22'
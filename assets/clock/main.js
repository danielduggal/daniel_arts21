$(function() {
    let $clockText = $('#clock-text');
    let $month = $('#month');
    let $day = $('#day');
    let $hour = $('#hour');
    let $minute = $('#minute');
    let $second = $('#second');
  
    function updateClock() {
        let date = new Date();
        let mon = date.getMonth();
        let d = date.getDay();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();
        let ms = date.getMilliseconds();
        let clockUpdateSpeed = 5; // speed in milliseconds

        $clockText.html(mon + "/" + d + "    " + h + "." + m + "." + s + "." + ms);
        $month.css('transform', 'translate(' + (40/12 * mon) + 'vw)' );
        $day.css('transform', 'translate(' + (40/30 * d) + 'vw)' );
        $hour.css('transform', 'translate(' + (40/24 * h) + 'vw)' );
        $minute.css('transform', 'translate(' + (40/60 * m) + 'vw)' );
        $second.css('transform', 'translate(' + (40/1000 * ms) + 'vw)' );

        setTimeout(updateClock, clockUpdateSpeed);
        }

updateClock();

});
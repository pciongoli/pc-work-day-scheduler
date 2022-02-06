// put javascript code in $(document).ready(function) so that everything loads in all together
$( document ).ready(function() {
    var currentDayEl = moment().format('MMMM Do YYYY');
    // use jquery to display text
    $("#currentDay").text(currentDayEl);

     

    // link current day and time to currentDay id via moment.js
    // link the current time to each hour

    //  create a function that will change the color of the task Use classes that were provided in CSS
    const timeBlocks = document.getElementsByClassName("time-block");    
    let currentHour = parseInt(moment().format('H'));

    Array.from(timeBlocks).forEach(timeBlocks => {
        let timeBlockId = timeBlocks.id,
            timeBlockHour;
        if (timeBlockId) {
            timeBlockHour = parseInt(timeBlockId);
        }
        $(".time-block").each(function () {
            if (currentHour > timeBlockHour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");


            } else if (currentHour === timeBlockHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");


            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });

    });





});


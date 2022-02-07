// put javascript code in $(document).ready(function) so that everything loads in all together
$( document ).ready(function() {
    var currentDayEl = moment().format('MMMM Do YYYY');
    // use jquery to display text
    $("#currentDay").text(currentDayEl);

     

    // link current day and time to currentDay id via moment.js
    // link the current time to each hour
    const timeBlocks = document.getElementsByClassName("time-block");    
    let currentHour = parseInt(moment().format('H'));

    // create array that will make comparing the hour to the task hour easier
    Array.from(timeBlocks).forEach(timeBlocks => {
        let timeBlockId = timeBlocks.id,
            timeBlockHour;
        if (timeBlockId) {
            timeBlockHour = parseInt(timeBlockId);
        }
        $(".time-block").each(function () {
            // series of if statements to determing if it is before, present or future and change color 
            if (currentHour > timeBlockHour) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");


            } else if (currentHour < timeBlockHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("future");


            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("present");
            }
        });
    });


    // use jquery to add key and variable to localStore with a click function to the saveBtn
    $(".saveBtn").on("click", function() {
        var enteredTask = $(this).prev("textarea").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, enteredTask);
    
    });


    $("#9 textarea").val(localStorage.getItem("9"))
    $("#10 textarea").val(localStorage.getItem("10"))
    $("#11 textarea").val(localStorage.getItem("11"))
    $("#12 textarea").val(localStorage.getItem("12"))
    $("#13 textarea").val(localStorage.getItem("13"))
    $("#14 textarea").val(localStorage.getItem("14"))
    $("#15 textarea").val(localStorage.getItem("15"))
    $("#16 textarea").val(localStorage.getItem("16"))
    $("#17 textarea").val(localStorage.getItem("17"))

});

// put javascript code in $(document).ready(function) so that everything loads in all together
$( document ).ready(function() {
    var currentDayEl = moment().format('MMMM Do YYYY, h:mm:ss a');
    // use jquery to display text
    $("#currentDay").text(currentDayEl);

    // create a variable for each hour id
    var hour09 = $('#9-am');
    var hour10 = $('#10-am');
    var hour11 = $('#11-am');
    var hour12 = $('#12-pm');
    var hour01 = $('#1-pm');
    var hour02 = $('#2-pm');
    var hour03 = $('#3-pm');
    var hour04 = $('#4-pm');
    var hour05 = $('#5-pm');



    
    

})


// create a variable for each id with class time-block

// link current day and time to currentDay id via moment.js





// link the current time te each hour


//  create a function that will change the color of the task Use classes that were provided in CSS

// add save button for each individual time block that saves text event to local storage

// add hover to each button

// add event persistence



// figure out how to get time to count in real time.

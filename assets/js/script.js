$(function() {});

// link current day and time to currentDay id via moment.js
var currentDayEl = moment().format('MMMM Do YYYY, h:mm:ss:a');

$("#currentDay").text(currentDayEl);



// create an array for each of the work day hours

// create containers for each of the elements in the array in the form of rows

//  create a function that will change the color of the task 

// add save button for each individual time block that saves text event to local storage

// add event persistence
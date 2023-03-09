// Wait for the document to be fully loaded before running the code
$(document).ready(function () {
   // Get the current date and display it on the page
   var currentDayEl = moment().format("dddd, MMMM Do");
   $("#currentDay").text(currentDayEl);

   // Get the current hour in 24-hour format (0-23)
   var currentHour = moment().hour();

   // Loop through each time block and set its color based on the current time
   $(".time-block").each(function () {
      // Get the hour associated with this time block (as an integer)
      var hour = parseInt($(this).attr("id"));

      if (hour < currentHour) {
         // If the hour is in the past, add the "past" class to make it gray
         $(this).addClass("past");
      } else if (hour === currentHour) {
         // If the hour is the current hour, add the "present" class to make it red
         $(this).addClass("present");
      } else {
         // If the hour is in the future, add the "future" class to make it green
         $(this).addClass("future");
      }

      // Load any saved tasks for this time block from local storage
      var savedTask = localStorage.getItem(hour);

      // If there is a saved task, display it in the textarea
      if (savedTask) {
         $(this).find("textarea").val(savedTask);
      }
   });

   // Save a task to local storage when the user clicks the "save" button
   $(".saveBtn").on("click", function () {
      // Get the hour associated with this save button (as a string)
      var hour = $(this).parent().attr("id");

      // Get the text entered in the textarea for this time block
      var task = $(this).siblings("textarea").val();

      // Save the task to local storage, using the hour as the key
      localStorage.setItem(hour, task);
   });
});

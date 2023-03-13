// Display the current day and date
var today = dayjs().format('dddd, MMMM D');
$('#currentDay').text(today);


$(document).ready(function () {
  // Save button click listener 
  $(".saveBtn").on("click", function () {

      var input = $(this).siblings(".description").val();
      var hour = $(this).parent().attr("id");

      // Save user input in local storage
      localStorage.setItem(hour, input);
  })


function timeTracker() {
      // Current hour of the day
      var currentHour = dayjs().hour();

      // loop over time blocks
      $(".time-block").each(function () {
          var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

          // Checks time and removes 'future' and 'present' and adds 'past' class css 
          if (timeBlock < currentHour) {
              $(this).removeClass("future");
              $(this).removeClass("present");
              $(this).addClass("past");
          }
          // Checks time and removes 'future' and 'past' and adds 'present' class css 
          else if (timeBlock === currentHour) {
              $(this).removeClass("past");
              $(this).removeClass("future");
              $(this).addClass("present");
          }
          // Checks time and removes 'past' and 'present' and adds 'future' class css 
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");

          }
      })
}

// Get item from local storage if any
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

// Call timeTracker function
timeTracker();

});

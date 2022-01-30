var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// to display the day and time at the top of the page
document.getElementById('currentDay').innerHTML = date;


// each time slot's color chanes depending on  if it is in the past, present, or future
function timeSlotColor() {
    var hour = today.getHours()

    $(".time-block").each(function() {
        var currentTime = parseInt($(this).attr("id"));

        // console.log(this); //each time-block

        if (currentTime > hour) {
            $(this).addClass("future");
        } else if (currentTime === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

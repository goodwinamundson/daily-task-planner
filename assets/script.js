var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// to display the day and time at the top of the page
document.getElementById('currentDay').innerHTML = date;


var saveBtn = $(".saveBtn");

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

// clicking the save button for that time block saves the task in local storage
saveBtn.on("click", function() {
    var timeBlock = $(this).siblings(".hour").text();
    var task = $(this).siblings(".tasks").val();

    localStorage.setItem(timeBlock, task);
});

// function to save items in local storage
function saveTask() {

    $(".hour").each(function() {
        var currentTime = $(this).text();
        var currentTask = localStorage.getItem(currentTime);

        if(currentTask !== null) {
            $(this).siblings(".tasks").val(currentTask);
        }
    });
}

timeSlotColor();
saveTask();
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// to display the day and time at the top of the page
document.getElementById('currentDay').innerHTML = date;
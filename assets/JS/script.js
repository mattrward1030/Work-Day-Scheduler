// current day using moment.js 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

$(".saveBtn").on("click", function () {

})



function checkHour() {
    var currentHour = moment().hour();

}

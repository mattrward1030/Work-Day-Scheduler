// current day using moment.js 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));



// function to checkhour against user selectedhour
function checkHour() {
    var currentHour = moment().hour();

    // loop for .time-block to check currentHour against SelectedHour
    $(".time-block").each(function () {
        var selectedHour = parseInt($(this).attr("id"));


        if (selectedHour < currentHour) {
            $(this).addClass("past");
        }
        else if (selectedHour > currentHour) {
            $(this).addClass("future");
        }
        else {
            $(this).addClass("present");
        }
    })
}

checkHour()

// on click function of save button to save content to local storage
$(".saveBtn").on("click", function () {

    var text;
    var time;

    localStorage.setItem(time, text)
})

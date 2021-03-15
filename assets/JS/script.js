// current day using moment.js 
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));



// function to checkhour against user selectedhour
function checkHour() {
    var currentHour = moment().hour();

    // loop for .time-block to check currentHour against SelectedHour
    $(".time-block").each(function () {
        var selectedHour = $(this).attr("id");



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

    var text = $(this).siblings("textarea").val()
    var time = $(this).parent().attr("id")

    localStorage.setItem(time, text)
})

// for each loop function to get the value from the key (time) and then change the value in the text area
$(".time-block").each(function () {
    var time = $(this).attr("id")
    var text = localStorage.getItem(time)
    $(this).children(".description").val(text)
})



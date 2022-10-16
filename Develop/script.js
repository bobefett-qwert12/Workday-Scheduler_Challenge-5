var now = moment();
var containerEl = $(".container");

containerEl.append('<p class="day"></p>');
$(".day").html(now.format("dddd, MMMM Do YYYY"));
for(var i=0; i<=8; i++){
    var hour = i+9;
    var newCard = $("<div class='card'></div>");
    newCard.css("height","80px");
    if(now.hour()>hour){
        newCard.css("backgroundColor","red");
    } else if (now.hour()<hour){
        newCard.css("backgroundColor","green");
    }else{
        newCard.css("backgroundColor","yellow");
    }
    var time = $("<p></p>")
    if(hour>12){
        hour -= 12
        time.appendTo(newCard).html(hour + ":00 pm");
    }else if(hour == 12){
        time.appendTo(newCard).html(hour + ":00 pm");
    }else{
        time.appendTo(newCard).html(hour + ":00 am");
    }
    newCard.appendTo(".container");
    $("<p class='event'></p>").appendTo(newCard);
}

for(var i=0; i<=8; i++){
    if(localStorage.getItem(i) != null && localStorage.getItem(i) != ""){
        containerEl.children().eq(i).children().last().html(localStorage.getItem(i));
    }
}

$(document).ready(function(){
    $(".card").click(function(event){
        var goal = window.prompt("Please enter the event for this hour:")
        var target = $(event.currentTarget);
        var index = target.index();
        if(goal != null && goal != ""){
            target.children().last().html(goal);
            localStorage.setItem(index, goal);
        }
    });
});
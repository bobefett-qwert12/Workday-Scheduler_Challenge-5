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
    if(hour>12){
        hour -= 12
    }
    newCard.addClass(hour);
    newCard.appendTo(".container");
    $("<p></p>").appendTo(newCard).html(hour);
    $("<p class='event'></p>").appendTo(newCard);
}

if(false){

}

$(document).ready(function(){
    $(".card").click(function(event){
        var goal = window.prompt("Please enter the event for this hour:")
        var target = $(event.currentTarget);
        if(goal != null){
            target.children().last().html(goal);
        }
        console.log(target.attr("class"));
    });
});
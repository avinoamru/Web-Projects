$(document).ready(function(){
// selectors

// $(".container").click(function(){
//     $(this).slideUp(100)            sliding the element up
// });
$(".container2").hover(function () {
        // hover
        $(this).fadeOut(100);
        $(this).fadeIn(500);
        
        });
   
    

$(".container2 p").css({
    "color":"red",
    "font-size": "30px",
    "font-weight": "100",
    "text-transform": "lowercase",
    "text-transform": "capitalize"
}
    
);
    })

})
    

$(".container").addClass("helloWorld");
    $(".helloWorld").click(function (){
        setInterval(function(){
            $(this).fadeTo(500, 0.5);
            $(this).fadeTo(500, 1);
        }, 1000);

        setTimeout(function(){
            clearInterval(1000);
        },10000);
     });   
    


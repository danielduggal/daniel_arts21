$(document).ready(function(){
    // Hide displayed paragraphs with different speeds
    $(".hide-button").click(function(){
        $("p.very-fast").hide(200);
        $("p.fast").hide(400);
        $("p.normal").hide(800);
        $("p.slow").hide(1200);
        $("p.very-slow").hide(2000);
    });
    
    // Show hidden paragraphs with different speeds
    $(".show-button").click(function(){
        $("p.very-fast").show(200);
        $("p.fast").show(400);
        $("p.normal").show(800);
        $("p.slow").show(1200);
        $("p.very-slow").show(2000);
    });
});
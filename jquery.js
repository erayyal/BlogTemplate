$(document).ready(function() {

    $(".tag").click(function() {
        $(".tag-list").slideToggle(750);
    });


    $(".tag-title").mouseover(function() {
        $(".tag-title").css({ backgroundColor: "blue", color: "#ddd" })
    });

    $(".tag-title").mouseleave(function() {
        $(".tag-title").css({ backgroundColor: "#ddd", color: "black" })
    });


    var time = setInterval(now, 1000);

    function now() {
        var d = new Date();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        $(".hour").text(hour);
        $(".minute").text(minute);
        $(".second").text(second);
    }

});
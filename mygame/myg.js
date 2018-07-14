$(document).ready(function () {
    setInterval(function () {
        $('#ant')
            .animate({ "left": "96%" }, 4000).animate({ "left": "-94%" }, 11000);
            var u = document.getElementById("end.wav");
            function playAudio(){
                u.play();
            }
    });
    setInterval(function () {
        $('#cat')
            .animate({ "left": "96%" }, 11000).animate({ "left": "-94%" }, 4000);
    });
    setInterval(function () {
        $('#dog')
            .animate({ "left": "96%" }, 5000).animate({ "left": "-94%" }, 9000);
    });
    setInterval(function () {
        $('#spider')
            .animate({ "left": "96%" }, 9000).animate({ "left": "-94%" }, 5000);
    });
    setInterval(function () {
        $('#hen')
            .animate({ "left": "96%" }, 6000).animate({ "left": "-94%" }, 11000);
    });
    $(document).keydown(function (e) {
        console.log('in function');
        switch (e.which) {
            case 37: $('#boy').finish().animate({ "left": "-=35px" });
                break;
            case 39: $('#boy').finish().animate({ "left": "+=35px" });
                break;
            case 40: $('#boy').finish().animate({ "top": "+=35px" });
                break;
        }
    });
    setInterval(function () {
        var playerpos = $('#boy').position();
        var px = playerpos.left;
        var py = playerpos.top;
        var o = $("#ant").position();
        console.log(px+py);
        if (o.left >= px && o.left <= px + 65 && o.top >= py && o.top <= py + 65) {
            alert("GAME OVER!");
        }
        var c = $("#cat").position();
        if (c.left >= px && c.left <= px + 65 && c.top >= py && c.top <= py + 65) {
            alert("GAME OVER!");
        }
        var h = $("#dog").position();
        if (h.left >= px && h.left <= px + 65 && h.top >= py && h.top <= py + 65) {
            alert("GAME OVER!");
        }
        var t = $("#spider").position();
        if (t.left >= px && t.left <= px + 65 && t.top >= py && t.top <= py + 65) {
            alert("GAME OVER!");
        }
        var h = $("#hen").position();
        if (h.left >= px && h.left <= px + 65 && h.top >= py && h.top <= py + 65) {
            alert("GAME OVER!");
        }
        if (py>h.top+50) {
            alert("YOU WON :)");
        }
    }, 200);

});
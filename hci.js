$(document).ready(function () {
    $("button:not(#submitbutton)").click(function () {
        $("button.active").removeClass("active");
        $(this).addClass("active");
        return false;
    });
    $("#currentbutton").click(function () {
        $("#casestudies").css("display", "block");
        $("#futureprospects").css("display", "none");
    });
    $("#futurebutton").click(function () {
        $("#futureprospects").css("display", "block");
        $("#casestudies").css("display", "none");
        $("#currentbutton").addClass("button");
    });
    $("#query").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#home *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        $("#casestudies *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        $("#futureprospects *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        $("#sources *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        $("#about *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
})
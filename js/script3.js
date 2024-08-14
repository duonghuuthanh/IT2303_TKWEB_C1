$(document).ready(function() {
    $(".tab-content > div:not(:first-child)").hide();

    $(".tab > li > a").click(function() {
        event.preventDefault();
        $(".tab > li").removeClass("active");
        $(this).parent().addClass("active");

        let h = $(this).attr("href");
        $(".tab-content > div").hide();
        $(h).show();
    });

    $(".slider").height($(".slider img").height() + 5);

    $(".slider > div:not(:first-child)").hide();
    let current = 1;
    setInterval(function() {
        current++;
        if (current === $(".slider div").length + 1)
            current = 1;
        $(".slider > div").fadeOut(1000, function() {
            $(`.slider > div:nth-child(${current})`).fadeIn(1000);
        });
        
    }, 3000);
});
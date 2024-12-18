$(function () {
    $("header li").on("mouseover", function () {
        $("header li").removeClass("on");
        $(this).addClass("on");
    });

    $("header li").on("mouseleave", function () {
        $("header li").removeClass("on");
    });

    $("header div").on("click", function () {
        $("nav").toggle(1000);
    });
    $("nav .close").on("click", function () {
        $("nav").hide(1000);
    });

    let baseline = -200;
    let con1 = $("#cont1").offset().top + baseline;
    let con2 = $(".con2").offset().top;
    let con3 = $(".con3").offset().top;
    let con4 = $(".con4").offset().top;

    console.log(con1, con2, con3, con4);

    $(window).on("scroll", function () {
        let scroll = $(this).scrollTop();

        if (scroll >= con1) {
            $(".con1 .con1_wrap").addClass("on");
        }
    });
});

$(function () {
    gsap.registerPlugin(ScrollTrigger);

    let list = gsap.utils.toArray(".con2 .wrap li");
    let scrollTween = gsap.to(list, {
        xPercent: -100 * (list.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".con2",
            pin: true,
            scrub: 1,
            start: "top",
            end: "+=2000",
            markers: true,
        },
    });

    const card = document.querySelectorAll(".con2 .wrap .merit");

    card.forEach((item) => {
        ScrollTrigger.create({
            trigger: item, // 해당 요소가 트리거
            start: "top 50%", // 화면 50% 지점에 요소가 도달할 때 시작
            end: "top 10%", // 10% 지점에서 끝남
            toggleClass: {
                targets: item,
                className: "on", // 'on' 클래스 추가/제거
            },
            toggleActions: "play reverse play reverse", // 스크롤 방향에 따라 실행
        });
    });

    $(".left").on("click", function () {
        $(".review li:first-child").appendTo(".review");
    });

    $(".right").on("click", function () {
        $(".review li:last-child").prependTo(".review");
    });
});

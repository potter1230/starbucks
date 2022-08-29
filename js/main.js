const badgesEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
window.addEventListener("scroll", _.throttle(function(){
    if(this.scrollY > 500){
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgesEl, .6, {
            opacity: 0,
            display: "none"
        });

        // 버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // 배지 보이기
        gsap.to(badgesEl, .6, {
            opacity: 1,
            display: "block"
        });

        // 버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));
toTopEl.addEventListener("click", function(){
    gsap.to(window, 0.7, {
        scrollTo: 0
    });
});


const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(el, index){
    gsap.to(el, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});


// https://lpla.tistory.com/147 참조
new Swiper(".notice-line .swiper", {
    direction: "vertical",
    autoplay: true,
    loop: true
});
const promoSwiperEl = document.querySelector(".notice .promotion .swiper");
const promoSwiper = new Swiper(promoSwiperEl, {
    slidesPerView: 3, // 한번에 보여줄 슬라이드
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드 가운데
    autoplay: {
        delay: 3000,
        disableOnInteraction: false // 슬라이드를 직접 움직인 후에 오토플레이가 멈추는 현상 지우기
    },
    loop: true,
    pagination: {
        el: ".notice .promotion .swiper-pagination", // 페이지 요소 선택자
        clickable: true
    },
    navigation: {
        prevEl: ".notice .promotion .swiper-prev",
        nextEl: ".notice .promotion .swiper-next"
    }
});
promoSwiperEl.addEventListener("mouseover", function(){
    promoSwiper.autoplay.stop();
});
promoSwiperEl.addEventListener("mouseout", function(){
    promoSwiper.autoplay.start();
});

new Swiper(".awards .swiper", {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: ".awards .swiper-prev",
        nextEl: ".awards .swiper-next",
    }
});

const promoEl = document.querySelector(".notice .promotion-wrapper");
const promoToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromo = false;
promoToggleBtn.addEventListener("click", function(){
    isHidePromo = !isHidePromo;
    if(isHidePromo){
        promoEl.classList.add("hide");
    } else {
        promoEl.classList.remove("hide");
    }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObj(selector, delay, size){
    // gsap.to(요소, 시간, 옵션);
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1, // 무한 재생
        yoyo: true, // 위아래로 부드럽게 재생
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObj(".floating1", 1, 15);
floatingObj(".floating2", .5, 15);
floatingObj(".floating3", 1.5, 20);


const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function(el, index){
    new ScrollMagic
        .Scene({
            triggerElement: el, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8
        })
        .setClassToggle(el, "show")
        .addTo(new ScrollMagic.Controller());
});
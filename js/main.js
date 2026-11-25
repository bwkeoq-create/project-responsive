//WEAPON
	var shoot= $('.shoot').offset().top+100 ;
	 
	$(window).on('scroll',function(){

	var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        //sticky menu 처리
        if(scroll > shoot){ 
            $('.shoot').addClass('scroll');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
        }else{
            $('.shoot').removeClass('scroll');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
		}
	});

var ww = $(window).width();  //가로 해상도를 감지
var swiper_change = undefined;  //스와이퍼 객체가 생성되지 않았다

function initSwiper() {

  if (ww <= 1024 && swiper_change == undefined) { //소형태블릿 이하의 해상도면..
    swiper_change = new Swiper(".swiper_change", { //스와이퍼 객체 생성
      slidesPerView: 4,
      spaceBetween: 10,
      //simulateTouch: true,
      // loop: true,
      // autoplay: {
      //   delay: 500,
      //   disableOnInteraction: false,
      // },
      pagination: {   //페이지 네이션
        el: '.swiper_change .swiper-pagination',
        dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
        breakpoints:{
        641 : {   //브라우저가 641이상 (max-width) - 소형태블릿
          slidesPerView: 2,
          spaceBetween: 8
        },
        769 : {   //브라우저가 769이상 - 일반 태블릿 
          slidesPerView: 3, 
          spaceBetween: 10,
        }
      }
    });
  } else if (ww > 1024 && swiper_change != undefined) { //일반 pc 이상의 해상도에서는 
    swiper_change.destroy(); //스와이퍼 해제
    swiper_change = undefined;
  }
  
}

initSwiper();  //최초 



//TRAILER
 var swiper = new Swiper('.mySwiper', {
		slidesPerView: 1,
        spaceBetween:15,
        centeredSlides: true,
        initialSlide: 1,
        pagination: {
          el: '.swiper-pagination',
        },
        breakpoints:{
            641 : {
            slidesPerView: 2
            },
            769 : {
            slidesPerView: 3
            },
        }
      });


//
         $('.popup_youtube').magnificPopup({

        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false,
		
    });
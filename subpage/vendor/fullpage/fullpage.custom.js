var Baniel;
$(document).ready(function() {

    var $logo = $('.brand-logo');
    var $a1 = $('.anim-01');
    var $a2 = $('.anim-02');
    var $a3 = $('.anim-03');
    var $a4 = $('.anim-04');
    var $a5 = $('.anim-05');
    var $a6 = $('.anim-06');
    var $a7 = $('.anim-07');
    var $a8 = $('.anim-08');
    var $a9 = $('.anim-09');
    var $a10 = $('.anim-10');
	var currSec = $('body').attr("ID");
	var varInterval;
	var goTadaA;
	var goTadaB;
	

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['1', '2', '3', '4', '5', '7'],
        navigation: true,
        navigationPosition: 'left',
        //navigationTooltips: ['page 1', 'page 2', 'page 3'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        // sectionsColor : ['#040809', '#292B2B', '#040809'],
        paddingTop: '8vh',
        paddingBottom: '8vh',
        fixedElements: '#header, .footer',
        responsiveWidth: 1025,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);

//            if ((index == 1 && direction =='down') || (index == 7 && direction =='up')){
            if ((index == 1 && direction =='down') || (index == 6 && direction =='up')){
                $logo
                .css({
                    '-webkit-animation-duration': '.3s',
                    '-moz-animation-duration': '.3s',
                    'animation-duration': '.3s'
                })
                .addClass('fadeOutUp')
                .delay(600)
                .queue(function() {
                    $(this)
                    .removeClass('fadeOutUp')
                    .addClass('brand-logo-side fadeInDown')
                    .dequeue();
                });
            }

            if ((index == 2 && direction == 'up') /*|| (index == 5 && direction =='down')*/){
                $logo
                .css({
                    '-webkit-animation-duration': '.3s',
                    '-moz-animation-duration': '.3s',
                    'animation-duration': '.3s'
                })
                .removeClass('fadeInDown')
                .addClass('fadeOutUp')
                .delay(600)
                .queue(function() {
                    $(this)
                    .removeClass('brand-logo-side fadeOutUp')
                    .addClass('fadeInDown')
                    .dequeue();
                });
            }
        },
        afterLoad: function(anchorLink, index){

//            if (!(index == 1 || index == 7)) {
            if (!(index == 1 || anchorLink == 7)) {
                $a7
                .css({
                    '-webkit-animation-duration': '.3s',
                    '-moz-animation-duration': '.3s',
                    'animation-duration': '.3s'
                })
                .removeClass('fadeOut')
                .addClass('fadeInUp');
            } else {
                $a7
                .removeClass('fadeInUp')
                .addClass('fadeOut');
            }

            switch (index) {
                case 1:
					onResetTada();
                    $a1.addClass('flipInX');
                    $a2.addClass('zoomIn');
                    break;
                case 2:
                    $a3
                    .css({
                        '-webkit-animation-duration': '.3s',
                        '-moz-animation-duration': '.3s',
                        'animation-duration': '.3s',
                        '-webkit-animation-delay': '.2s',
                        '-moz-animation-delay': '.2s',
                        'animation-delay': '.2s'
                    })
                    .removeClass('fadeOut')
                    .addClass('slideInRight');

                    $a4
                    .css({
                        '-webkit-animation-duration': '.3s',
                        '-moz-animation-duration': '.3s',
                        'animation-duration': '.3s'
                    })
                    .removeClass('fadeOut')
                    .addClass('slideInLeft');

                    $a5
                    .css({
                        '-webkit-animation-duration': '.3s',
                        '-moz-animation-duration': '.3s',
                        'animation-duration': '.3s',
                        '-webkit-animation-delay': '.5s',
                        '-moz-animation-delay': '.5s',
                        'animation-delay': '.5s'
                    })
                    .removeClass('fadeOut')
                    .addClass('fadeIn');
                break;
                case 3:
                    $a6
                    .removeClass('fadeOut')
                    .addClass('fadeIn');
                    $('.slick-arrow').addClass('bounce');
                break;
				case 4:
						varInterval = 3000;
						var x = 0;
						goTadaA = setInterval(function(){
							$('#product-page .news-list li').each(function(index){
								$(this).find('img').removeClass('tada');
							});

							$('#product-page .news-list li:eq('+x+') img').addClass('animated tada');
							x++;
							if (x == 9) x = 0;
						}, varInterval);
					break;
					
				case 5: //1
					varInterval = 3000;
					var x = 0;
						goTadaB = setInterval(function(){
							$('#indexPage .news-list li').each(function(index){
								$(this).find('img').removeClass('tada');
							});

							$('#indexPage .news-list li:eq('+x+') img').addClass('animated tada');
							x++;
							if (x == 9) x = 0;
						}, varInterval);
					
					if(currSec == "product-page"){
						$a9
						.css({
							'-webkit-animation-duration': '.3s',
							'-moz-animation-duration': '.3s',
							'animation-duration': '.3s'
						})
						.removeClass('fadeOut')
						.addClass('slideInRight');

						$a10
						.css({
							'-webkit-animation-duration': '.3s',
							'-moz-animation-duration': '.3s',
							'animation-duration': '.3s'
						})
						.removeClass('fadeOut')
						.addClass('slideInLeft');
                	}
                break;
                case 6:
					onResetTada();
                    $a9
                    .css({
                        '-webkit-animation-duration': '.3s',
                        '-moz-animation-duration': '.3s',
                        'animation-duration': '.3s'
                    })
                    .removeClass('fadeOut')
                    .addClass('slideInRight');

                    $a10
                    .css({
                        '-webkit-animation-duration': '.3s',
                        '-moz-animation-duration': '.3s',
                        'animation-duration': '.3s'
                    })
                    .removeClass('fadeOut')
                    .addClass('slideInLeft');
					
                    $logo
                    .css({
                        '-webkit-animation-duration': '.3s',
                        '-moz-animation-duration': '.3s',
                        'animation-duration': '.3s'
                    })
                    .removeClass('fadeInDown')
                    .addClass('fadeOutUp');
                break;
//                case 7:
//                    $logo
//                    .css({
//                        '-webkit-animation-duration': '.3s',
//                        '-moz-animation-duration': '.3s',
//                        'animation-duration': '.3s'
//                    })
//                    .removeClass('fadeInDown')
//                    .addClass('fadeOutUp');
                break;
                default:
                break;
            }
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
	
	function onResetTada(){
		varInterval = 0;
		$('.news-list li img').removeClass('tada');
		clearInterval(goTadaA);
		clearInterval(goTadaB);
	}

});
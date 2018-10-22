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

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['1', '2', '3', '4', '5', '6', '7'],
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

            if ((index == 1 && direction =='down') || (index == 7 && direction =='up')){
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

            if (!(index == 1 || index == 7)) {
                $a7
                .css({
                    '-webkit-animation-duration': '.3s',
                    '-moz-animation-duration': '.3s',
                    'animation-duration': '.3s'
                })
                .removeClass('fadeOut')
                .addClass('fadeInUp');

                // $('.nav-stick')
                // .css({
                //     'position' : 'fixed',
                //     'background-color' : '#181919'
                // });
            } else {
                $a7
                .removeClass('fadeInUp')
                .addClass('fadeOut');

                // $('.nav-stick')
                // .css({
                //     'position' : 'absolute',
                //     'background-color' : 'initial'
                // });
            }

            switch (index) {
                case 1:
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
                case 5:
                    var x = 0;
                    setInterval(function(){
                        
                        $('.news-list li').each(function(index){
                            $(this).find('img').removeClass('tada');
                        });

                        $('.news-list li:eq('+x+') img').addClass('animated tada');

                        x++;

                        if (x == 9) x = 0;

                    }, 3000);
                break;
                case 6:
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
                break;
                case 7:
                    $logo
                    .css({
                        '-webkit-animation-duration': '.3s',
                        '-moz-animation-duration': '.3s',
                        'animation-duration': '.3s'
                    })
                    .removeClass('fadeInDown')
                    .addClass('fadeOutUp');
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

});
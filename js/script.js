$(document).ready(function(){
    //KING
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.carousel .slick-prev').addClass('ion-ios-arrow-thin-left');
    $('.carousel .slick-next').addClass('ion-ios-arrow-thin-right');

    var height = $('.news-text-selected').width() + 'px';
    $('.news-image-selected').css('height', height);

    //MIKO
    window.onload = init('white/');
    var car;
    function init(varPath){
        car = $('.car').ThreeSixty({
            totalFrames: 52, // Total no. of image you have for 360 slider
            endFrame: 52, // end frame for the auto spin animation
            currentFrame: 1, // This the start frame for auto spin
            imgList: '.threesixty_images', // selector for image list
            progress: '.spinner', // selector to show the loading progress
            imagePath: 'images/360-images/'+varPath, // path of the image assets
            filePrefix: '', // file prefix if any
            ext: '.png', // extention for the assets
            height: 447,
            width: 1000,
            navigation: true
        });
        $('.custom_previous').bind('click', function(e) {
            car.previous();
        });

        $('.custom_next').bind('click', function(e) {
            car.next();
        });
    }
    $('.colorTheme ul li').click(function(){
        var clr = $(this).attr("class");
        
        if(clr == "whiteCar"){
        varPath = "white/";
        }
        else if(clr == "redCar"){
        varPath = "red/";
        }
        else if(clr == "blackCar"){
        varPath = "black/";
        }
        
        $('.nav_bar').remove();
        $('.threesixty_images').empty();
        init(varPath);
    });

    //KENNETH
    $("#productList").animatedModal();

    // scrollbar styling for navigation and modal
    $(".modal, #mainNavi").niceScroll({styler:"fb",cursorcolor:"#000"});

    // close submenu when the navigation is closed
    $('.site-overlay, .close-animatedModal .close').click(function(){
        if ($('#mainNavi li').hasClass('pushy-submenu-open')) {
            $('#mainNavi li').removeClass('pushy-submenu-open').addClass('pushy-submenu-closed');
        }
    });

    // close the nav when clicked
    $('#closeNavi').click(function(){
        console.log('clicked');
        $('body').removeClass('pushy-open-right');
    });

    
    $('.news-list li a img').click(function(){
        var imgSrc = $(this).attr("src");
        var getMain = $(this).parent().attr("class");
//      alert(getMain);
        $('#product-page .news-image-selected02')
            .css({
            'opacity': '0',
            'background-image': 'url('+imgSrc+')'
            })
            .animate({opacity: 1});
        
        $('#performanceDiv .news-main').hide();
        $('#performanceDiv .news-'+getMain+' a').hide();
        $('#performanceDiv .news-'+getMain+'').show();
        $('#performanceDiv .news-'+getMain+' h4').addClass("animated fadeInDown");
        $('#performanceDiv .news-'+getMain+' p').addClass("animated fadeInUp");
        $('#performanceDiv .news-'+getMain+' a').delay("500").fadeIn("slow").addClass("animated fadeInUp");
    });

});

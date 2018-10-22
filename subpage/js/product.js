$(document).ready(function(){
	
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
		width: '100%',
		navigation: false,
		responsive: true
	});
	$('#frontspin').bind('click', function(e) {
		car.previous();
	});

	$('#backspin').bind('click', function(e) {
		car.next();
	});

	 $('.ThreeSixty').bind('click', function(e) {
      car.play();
    });

    $('.custom_stop').bind('click', function(e) {
      car.stop();
    });
}
	
	// start JGgrafx
	$('.news-list li a img').click(function(){
		var imgSrc = $(this).attr("src");
		var getMain = $(this).parent().attr("class");
//		alert(getMain);
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
	
	
	$('.colorTheme ul li').click(function(){
	var clr = $(this).attr("id");
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
	
	// end JGgrafx


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

$('.slickArea2 .slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  accessibility: false,
  fade: true,
  asNavFor: '.slickArea2 .slider-nav'
});


$('.slickArea2 .slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slickArea2 .slider-for',
  centerMode: true,
  focusOnSelect: true,
  accessibility: false,
  responsive: [
  	{
  		breakpoint: 480,
    	settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
  		}
  	}
  ]
});

$('.slickArea1 .slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  accessibility: false,
  asNavFor: '.slickArea1 .slider-nav'
});


$('.slickArea1 .slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slickArea1 .slider-for',
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  accessibility: false
});

$(".fancybox").fancybox({
	closeBtn: true,
	nextClick: false,
	mouseWheel: false,
	arrows : false
});
	
});
window.onload = init('white/');

var car;
function init(varPath){
	car = $('.car1').ThreeSixty({
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
}


$('.carDisplay ul li').click(function(){
	var clr = $(this).attr("id");
	$('.carDisplay ul li').removeClass('active');
	$(this).addClass('active');
	
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
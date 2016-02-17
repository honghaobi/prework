$('button').click(function(){
	$(this).addClass('magictime foolishOut');
	setTimeout(function(){
    	$('#a1').addClass('magictime magic');
	}, 500);
	setTimeout(function(){
    	$('#a2').addClass('animated hinge');
	}, 1000);
	setTimeout(function(){
    	$('#a3').addClass('magictime vanishOut');
	}, 1500);
	setTimeout(function(){
    	$('#a4').addClass('animated bombRightOut');
	}, 2000);
	setTimeout(function(){
    	$('#gif').addClass('magictime puffOut');
	}, 800);
	setTimeout(function(){
    	$('#img1').addClass('magictime tinRightOut');
	}, 1300);
	setTimeout(function(){
    	$('#img2').addClass('magictime bombLeftOut');
	}, 2400);
	setTimeout(function(){
    	$('#img3').addClass('magictime boingOutDown');
	}, 2600);
	setTimeout(function(){
    	$('#menu').addClass('magictime spaceOutUp');
	}, 3000);
	setTimeout(function(){
    	$('#bg1').addClass('magictime holeOut');
	}, 3500);

	setTimeout(function(){
    	$('#bg2').addClass('animated fadeIn').show();
	}, 4000);
	setTimeout(function(){
    	$('#shade').addClass('animated fadeIn').show();
	}, 4200);
	setTimeout(function(){
    	$('#b1').addClass('animated fadeInRight').show();
	}, 5000);
	setTimeout(function(){
    	$('#b2').addClass('animated fadeInLeft').show();
	}, 5700);
});


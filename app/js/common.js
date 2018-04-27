$(function() {
	
// slide down first screen
	$(".slide-down").click(function(e) {
			//e.preventDefault()
			$('html, body').animate({
				scrollTop: $("#bad-arguments").offset().top
			}, 1000);
		});


var colors = {};

colors.blue = '#154263';
colors.green = '#61c500';

// equipment scheme animation
var equipment = $(".equipment"),
	tabs = equipment.find(".equipment__tabs a"),
	content = equipment.find(".equipment__content__block"),
	pointer = $(".equipment__scheme__pointer"),
	pos = [
			{'left':'35.7%', 'top':'53.6%'}, // st enter
			{'left':'31.3%', 'top':'53.6%'}, // st exit
			{'left':'49%', 'top':'79.6%'}, // car detection
			{'left':'73%', 'top':'43%'}, // payment terminal
			{'left':'63.1%', 'top':'67%'}, // barier
			{'left':'63.1%', 'top':'53%'}, // traffic lights
			{'left':'79.5%', 'top':'25%'}, // card reader
			{'left':'70%', 'top':'8.5%'}, // info panel
			{'left':'63.5%', 'top':'10.5%'}, //heigth detector
			{'left':'36.7%', 'top':'46.6%'}, // call to operator
			{'left':'80.7%', 'top':'65.6%'}, // server
			{'left':'91.7%', 'top':'65.6%'}, // AWP
			{'left':'79.4%', 'top':'41.6%'}, // software
		];
	tabs.on("click", function (e) {
		e.preventDefault();
		var index = $(this).data("index") - 1;
			pointer.css(pos[index]);
		if (content.eq(index).hasClass("equipment__content__block")) {
			tabs.removeClass("equipment__tabs__active");
			content.removeClass("equipment__content__active");
			content.removeClass("equipment__content__visible");
			$(this).addClass("equipment__tabs__active");
			content.eq(index).addClass("equipment__content__visible");
			setTimeout(function () {
				content.eq(index).addClass("equipment__content__active");
			}, 10);
		}
	});

// how-it-works steps animation
var itWorksSlides = $('.how-it-works__img'),
	itWorksList = $('#how-slider a');

	itWorksList.on('click', function (e) {
		e.preventDefault();
		var index = $(this).data('index')-1;
		if (itWorksSlides.eq(index).hasClass('how-it-works__img')) {
			itWorksList.removeClass('how-it-works__current');
			itWorksSlides.removeClass('how-it-works__active');
			itWorksSlides.removeClass('how-it-works__visible');
			$(this).addClass('how-it-works__current');
			itWorksSlides.eq(index).addClass('how-it-works__visible');
			setTimeout(function () {
				itWorksSlides.eq(index).addClass('how-it-works__active');
			}, 10);
		}
	});




// how-it-works steps icons animation
var itWorksIcons = $('.how-it-works__icons-item svg path'),
	itWorksIconList = $('#icon-list a');

	itWorksIconList.on('mouseover', function (e) {
		var index = $(this).data('index')-1;
			itWorksIconList.removeClass('how-it-works__current');
			itWorksIcons.attr('fill', colors.blue);
			$(this).addClass('how-it-works__current');
			itWorksIcons.eq(index).attr('fill', colors.green);
			
	});
	itWorksIconList.on('click', function (e) {
		e.preventDefault();
	});



// parallax effect

var fsbg = document.querySelector(".firstframe"),
	car = document.querySelector(".car"),
	city = document.querySelector(".city");
fsbg.onmousemove  = function (e) {
	car.style.transform = "translateX(" + e.x/100 + "px)";
	city.style.transform = "translateX(" + e.x/70 + "px)";
};




$(".owl-carousel").owlCarousel();

// main fn end
});



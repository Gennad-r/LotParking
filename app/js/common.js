$(function() {
	$(".slide-down").click(function(e) {
			//e.preventDefault()
			$('html, body').animate({
				scrollTop: $("#bad-arguments").offset().top
			}, 1000);
		});
});


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
		]
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
			}, 10)
		}
	});




var fsbg = document.querySelector(".full-screen-frame"),
	car = document.querySelector(".car"),
	city = document.querySelector(".city");
fsbg.onmousemove  = function (e) {
	car.style.transform = "translateX(" + e.x/100 + "px)";
	city.style.transform = "translateX(" + e.x/70 + "px)";
};


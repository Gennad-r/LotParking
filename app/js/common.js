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
			{'left':'30%', 'top':'42%'},
			{'left':'37.5%', 'top':'42%'}
		]
	tabs.on("click", function (e) {
		e.preventDefault();
		var index = $(this).data("index") - 1;
		if (content.eq(index).hasClass("equipment__content__block")) {
			tabs.removeClass("equipment__tabs__active");
			content.removeClass("equipment__content__active");
			content.removeClass("equipment__content__visible");
			pointer.css(pos[index]);
			$(this).addClass("equipment__tabs__active");
			content.eq(index).addClass("equipment__content__visible");
			setTimeout(function () {
				content.eq(index).addClass("equipment__content__active");
			}, 10)
		}
	});




var fsbg = document.querySelector(".full-screen-frame"),
	car = document.querySelector(".car"),
	st = document.querySelector(".st"),
	sign = document.querySelector(".sign");
fsbg.onmousemove  = function (e) {
	car.style.transform = "translateX(" + e.x/90 + "px)";
	st.style.transform = "translateX(" + e.x/50 + "px)";
	sign.style.transform = "translateX(" + e.x/110 + "px)";
};


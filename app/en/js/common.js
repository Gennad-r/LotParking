$(function() {

	if ($(window).width() > 992){new WOW().init();}
	
// slide down first screen
	$(".slide-down").click(function(e) {
			//e.preventDefault()
			$('html, body').animate({
				scrollTop: $("#about-system").offset().top
			}, 1000);
		});


//scroll to

$('a.nav-link').bind('click', function(e) {
	e.preventDefault(); // prevent hard jump, the default behavior
	//$(".navigation").removeClass("clicked");
	//$(".hamburger--elastic").removeClass("is-active");
	var target = $(this).attr("href") || $(this).attr("data"), // Set the target as variable
		pos = $(target).offset().top; // navigation panel heigth
	// perform animated scrolling by getting top-position of target-element and set it as scroll target
	$('html, body').stop().animate({
		scrollTop: pos
	}, 600/*, function() {
			location.hash = target; //attach the hash (#jumptarget) to the pageurl
		}*/);

	return false;
});

// scroll top

$(window).on('scroll', function (e) {
	if ($( window ).height() < $(window).scrollTop()){
		$(".go-top").css("display", "block");
	} else {
		$(".go-top").css("display", "none");
	}
});

$(".go-top").click(function () {
	$('html, body').animate({
		scrollTop: 0
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
			{'left':'91%', 'top':'41.6%'}, // discount
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




// parallax effect

var fsbg = document.querySelector(".firstframe"),
	car = document.querySelector(".car"),
	city = document.querySelector(".city");
fsbg.onmousemove  = function (e) {
	car.style.transform = "translateX(" + e.x/100 + "px)";
	city.style.transform = "translateX(" + e.x/70 + "px)";
};



// modal equipment

$('.equipment__content__block .btn.btn-primary').click(function () {
	$('#equipmentModal h5').text($('.equipment__content__active').find('h5').text());
	$('#equipmentModal img').attr('src', $('.equipment__content__active img').attr('src'));
	$('#equipmentModal').modal('show');
});



$("#equipmentModal form, #firstModal form").submit(function() { //Change
	var th = $(this);
	if($("#propositionAuto").prop('checked')) {
		$("#propositionAuto").val('yes');
	} else if($("#propositionAuto").prop('checked') == false) {
		$("#propositionAuto").val('no');
	};
	th.find('input[name="project_name"]').val($("#equipmentModal .modal-title").html());
		$.ajax({
			type: "POST",
			url: "https://parking.lotgroup.eu/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			th.find(".modal-title").html("Thank You!");
			th.find(".modal-body").hide();
			th.find(".modal-footer button").hide();
			th.find(".modal-footer").append("<p>Your request has been forwarded to manager.</p>");
			setTimeout(function() {
				// Done Functions
				th.parents('.modal').modal('hide')
				th.find(".modal-title").html(th.find('input[name="project_name"]').val());
				th.find(".modal-body").show();
				th.find(".modal-footer button").show();
				th.find(".modal-footer p").remove();
				th.trigger("reset");
			}, 1000);
		});
	return false;
});

$("#contacts form").submit(function() { //Change
	var th = $(this);
		$.ajax({
			type: "POST",
			url: "https://parking.lotgroup.eu/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$("#contacts h3").html("Thank You!");
			$("#contacts p").html("Your request has been forwarded to manager.");
			th.find("button").prop('disabled', true);
			th.trigger("reset");
		});
	return false;
});



$(".realised").owlCarousel({
	items: 1,
	loop: true,
	autoplay: true,
	nav: true,
	autoplayHoverPause: true,
	autoplayTimeout: 7000,
	smartSpeed: 750
});

$(".working").owlCarousel({
	items: 1,
	loop: true,
	autoplay: true,
	nav: true,
	autoplayHoverPause: true,
	autoplayTimeout: 7000,
	smartSpeed: 750
});

$(".profits-sl").owlCarousel({
	items: 1,
	loop: true,
	autoplay: true,
	nav: true,
	autoplayHoverPause: true,
	autoplayTimeout: 7000,
	smartSpeed: 750
});




	
// main fn end
});


// Google Maps
function initMap() {
	var uluru = {lat: 50.001089, lng: 36.206014};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 14,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
	});
}
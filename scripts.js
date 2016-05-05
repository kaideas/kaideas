$(window).scroll(function () {
	var ratio = $('#photos-width').width() / ($(document).height() + $(window).width() + $(window).height());

	var related = $('#books').height() / ($(document).height() + $(window).height());

	// $('#photos').scrollLeft( $(this).scrollTop() * ratio);

	// $('#related').scrollTop( $(this).scrollTop() * related);
});


//find percentage of scrollTop
//multiply that changing variable by photoswidth


function amountscrolled(){
    var scrollTop = $(window).scrollTop()
    var trackLength = $(document).height() - $(window).height()
    var pctScrolled = (scrollTop/trackLength)
    return pctScrolled;
}
 
$(window).scroll(function(){
    $('#photos').scrollLeft( amountscrolled() * ($('#photos-width').width() - $(window).width() ));
    $('#related').scrollTop( amountscrolled() * ($('#books').height() - $(window).height() + 250));
});



$("#related, .underline").click( function() {

if ($("#related").css('right') == '-320px') {
	$("#related").animate({right: '0px'}, 300);
	$("#related-button").animate({right: '335px'}, 300);
	$("#related-button").html("<h6>&#8250;</h6>");
}

else {
	$("#related").animate({right: '-320px'}, 300);
	$("#related-button").animate({right: '16px'}, 300);
	$("#related-button").html("<h6>&#8249;</h6>");
}
});

$("#photos-bar").click( function() {

if ($('.photo p').css('display') == 'none') {
	$('#photos-bar').animate({height: '300px'}, 300);
	$('.photo img').animate({height: '250px'}, 300);
		setTimeout(	function() {$('#photos').scrollLeft( amountscrolled() * ($('#photos-width').width() - $(window).width() ));}, 302);
	$('.photo p').toggle();
}

else {
	$('#photos-bar').animate({height: '100px'}, 300);
	$('.photo img').animate({height: '75px'}, 300);
	$('.photo p').toggle();

	setTimeout(	function() {$('#photos').scrollLeft( amountscrolled() * ($('#photos-width').width() - $(window).width() ));}, 302);
}


});

function hoverer(span, booknum) {
	$('#' + span).hover(

		function() {

		$('#' + booknum).css("background", "white");

		$("#related").animate({right: '-218px'}, 200);
		$("#related-button").animate({right: '114px'}, 200);
		$("#related-button").html("<h6>&#8250;</h6>");
		},

		function() {

		$('#' + booknum).css("background-color", "#F2F2F2");
		$("#related").animate({right: '-320px'}, 200);
		$("#related-button").animate({right: '16px'}, 200);
		$("#related-button").html("<h6>&#8249;</h6>");

		}

	);
}
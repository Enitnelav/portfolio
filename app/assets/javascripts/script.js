$(document).ready(function() {

	// PARALAX 

	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		triggerElement: "#second-section",
		triggerHook: 0
	})
		.setClassToggle(".bloc-picto img", "movImg")
		//.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		.addTo(controller);


	var scene = new ScrollMagic.Scene({
		triggerElement: "#third-section",
		triggerHook: 0
	})
		.setClassToggle(".left span", "mov")
		//.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		.addTo(controller);

	var scene = new ScrollMagic.Scene({
		triggerElement: "#third-section",
		triggerHook: 0
	})
		.setClassToggle(".right span", "mov")
		//.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		.addTo(controller);

	// CLOUD ANS WAVES
	
	$('#scene-nuage').parallax();
	
});
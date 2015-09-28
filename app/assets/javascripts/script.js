$(document).ready(function() {

	// PARALAX 

	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		triggerElement: "#bloc-crea",
		triggerHook: 0
	})
		.setClassToggle(".submarine img", "mov")
		.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		.addTo(controller);


    
    new ScrollMagic.Scene({ triggerElement: "#bloc-crea", triggerHook: 0 })
    .on('ready', function () {
        $('.circlestat').circliful();
    })
    .addTo(controller);


	var scene = new ScrollMagic.Scene({
		triggerElement: "#submarine",
		triggerHook: 0
	})
		//$('.circlestat').circliful();
		.addIndicators({name: "3 - add a class"}) // add indicators (requires plugin)
		.addTo(controller);

	// CLOUDS
	
	$('#scene-nuage').parallax();

	// CREA

	$('#more').on('click', function() {

		nb_click = $('#more').attr('data-click');

		initial_size = $('#bloc-crea').find('ul').height();

		$('#bloc-crea').animate({
			height: $('#bloc-crea').height() + initial_size + 30
		}, 100);


		nb_grid = $("#bloc-crea .grid").length;

		nb_bloc = parseInt(nb_click) + 1;

		console.log(nb_bloc);

		if (nb_bloc <= nb_grid) {
			grid = $("#bloc-crea .grid:eq(" + nb_bloc + ")");
			console.log(grid);
			grid.fadeIn(500);

			grid.find('li:eq(0)').addClass("animate");

			setTimeout(function(){
				nb_click = $('#more').attr('data-click');
				nb_bloc = parseInt(nb_click);
				grid = $("#bloc-crea .grid:eq(" + nb_bloc + ")");
				grid.find('li:eq(1)').addClass("animate");
			}, 500);

			setTimeout(function(){
				nb_click = $('#more').attr('data-click');
				nb_bloc = parseInt(nb_click);
				grid = $("#bloc-crea .grid:eq(" + nb_bloc + ")");
				grid.find('li:eq(2)').addClass("animate");
			}, 1000);
		}
		
		nb_click ++;
		$('#more').attr('data-click', nb_click);
	});

	// CIRCLE STAT

	// pos = $("#submarine").offset().top;

	// $(window).scroll(function(){
	// 	if( $(window).scrollTop() = pos ) {
	// 		$('.circlestat').circliful();
	// 	}
	// });

});
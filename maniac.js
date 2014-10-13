 $(function() {
	 
 	var path = $('[data-path="self"]').attr('src');
 	var s = path.split("/");
 	s.pop();
 	s = s.join("/");

 	 
 	var tb = '<div id="draggable" class="ui-widget-content"><div class="main-monitor"><span class="baseline-amount">12</span><i class="baseline-icon fa fa-bars"></i><span class="vert-col-amount">12</span><i class="v-grid-icon fa fa-ellipsis-v"></i><span class="hor-col-amount">3</span><i class="h-grid-icon fa fa-ellipsis-v"></i><div class="m-circle"><a href="#">center</a></div></div><div class="baseline-container block-r"><a href="#" data-act="++" class="in-d-act pl ">+</a><a href="#" data-act="--"class="in-d-act min ">-</a><span class="baseline-amount">12</span><a href="#" class="bl-switch"><i class="fa fa-toggle-off"></i></a><div class="pie_progress" role="progressbar"></div></div><div class="vertical-grid-container block-r"><a href="#" data-act="++" class="in-v-act pl ">+</a><a href="#" data-act="--"class="in-v-act min ">-</a><span class="vert-col-amount">12</span><a href="#" class="vc-switch"><i class="fa fa-toggle-off"></i></a><div class="pie_progress_vert" role="progressbar"></div></div><div class="horizontal-grid-container"></div><div class="row-monitor"><div class="row-info z4"><a href="#"><i class="fa fa-dot-circle-o"></i></a><span>Row is </span><span class="status">on</span></div><a href="#" class="minimize"><i class="fa fa-ellipsis-h"></i></a></div><a class="ca left-a" href="#"><i class="fa fa-angle-left "></i></a><a class="ca top-a" href="#"><i class="fa fa-angle-up "></i></a><a class="ca right-a" href="#"><i class="fa fa-angle-right "></i></a><a href="#" class="maximize"><i class="fa fa-bars"></i></a></div>'
 	var vGrid = '<div class="vert-grid"><div class="grid-holder"><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div><div class="sm-1"><div class="col"></div></div></div></div>'
 	$("body").append(tb);
 	$("body").append(vGrid);

 	$(".vert-grid").height($(document).height());

 	$("#draggable").draggable();

 	$(".row-info").click(function(e) {
 		e.preventDefault();
 		$(this).toggleClass('on');
 		$(".grid-holder").toggleClass("rower");
 	});

 	$(".minimize").dblclick(function(e) {
 		e.preventDefault();
 		$(this).parents("#draggable").addClass('minimized');
 		$(".maximize").fadeIn();
 	});
 	$(".maximize").dblclick(function(e) {
 		e.preventDefault();
 		$(this).parents("#draggable").removeClass('minimized');
 		$(".maximize").fadeOut();
 	});

 	$(".m-circle a").click(function(e) {
 		e.preventDefault();
 		$(this).toggleClass('is-on');

 		if ($(this).hasClass('is-on')) {
 			$(".vc-switch").children('i').addClass('fa-toggle-on');
 			$(".v-grid-icon").addClass('active');
 			$(".vert-grid").fadeIn();
 		} else {
 			$(".vc-switch").children('i').removeClass('fa-toggle-on');
 			$(".v-grid-icon").removeClass('active');
 			$(".vert-grid").fadeOut();
 		};
 		if ($(this).hasClass('is-on')) {
 			$(".bl-switch").children('i').addClass('fa-toggle-on');
 			$(".baseline-icon").addClass('active');
 			$("body").append('<div style="background-image: url('+s+'/img/grid-pattern/g-' + num + '.png)" id="baseline"></div>');
 		} else {
 			$(".bl-switch").children('i').removeClass('fa-toggle-on');
 			$(".baseline-icon").removeClass('active');
 			$('#baseline').remove();
 		};


 	});

 	var num = 24;
 	var num_v = 12;
 	$('.pie_progress').asPieProgress({
 		'namespace': 'pie_progress',
 		size: 190,
 		barsize: '3',
 		barcolor: "#f0c721",
 		trackcolor: 'none',
 		speed: 50,
 		min: 16,
 		max: 50,
 		goal: num, // 100%
 		// size: 160, // in px
 		// speed: 15, // speed of 1/100
 		// barcolor: '#ef1e25',
 		// barsize: '4',
 		// trackcolor: '#f2f2f2',
 		// fillcolor: 'none',
 		// numberCallback: function(n) {
 		// 	var percentage = this.getPercentage(n);
 		// 	return percentage + '%';
 		// },
 		// contentCallback: null
 	});

 	$('.pie_progress_vert').asPieProgress({
 		'namespace': 'pie_progress',
 		size: 190,
 		barsize: '3',
 		barcolor: "#F36A36",
 		trackcolor: 'none',
 		speed: 50,
 		min: 1,
 		max: 12,
 		goal: 10, // 100%
 		// size: 160, // in px
 		// speed: 15, // speed of 1/100
 		// barcolor: '#ef1e25',
 		// barsize: '4',
 		// trackcolor: '#f2f2f2',
 		// fillcolor: 'none',
 		// numberCallback: function(n) {
 		// 	var percentage = this.getPercentage(n);
 		// 	return percentage + '%';
 		// },
 		// contentCallback: null
 	});

 	$(".top-a").click(function(e) {
 		e.preventDefault();
 		$(this).toggleClass("active");
 		$(".baseline-container").toggleClass("block-r");
 		$(".row-info").toggleClass('z4');
 		$(".main-monitor .baseline-amount, .main-monitor .vert-col-amount, .main-monitor .hor-col-amount").toggleClass('z0');
 	});

 	$(".right-a").click(function(e) {
 		e.preventDefault();
 		$(this).toggleClass("active");
 		$(".vertical-grid-container").toggleClass("block-r")
 		$(".row-info").toggleClass('z4');
 		$(".main-monitor .baseline-amount, .main-monitor .vert-col-amount, .main-monitor .hor-col-amount").toggleClass('z0');
 	});

 	$('.pie_progress').asPieProgress('start');


 	$(".baseline-amount").text(num + 'px');
 	$(".vert-col-amount").text(num_v);

 	$(".bl-switch").click(function(e) {
 		e.preventDefault();
 		if ($(this).children('i').hasClass('fa-toggle-on')) {

 			$(this).children('i').removeClass('fa-toggle-on');
 			$('#baseline').remove();
 			$(".baseline-icon").removeClass('active');

 		} else if ($(".m-circle a").hasClass('is-on') && $(this).children('i').hasClass('fa-toggle-on') == false) {
 			$(this).children('i').addClass('fa-toggle-on');
 			$(".baseline-icon").addClass('active');
 			$("body").append('<div style="background-image: url('+s+'/img/grid-pattern/g-' + num + '.png)" id="baseline"></div>');
 		};


 	});

 	$(".vc-switch").click(function(e) {
 		e.preventDefault();
 		if ($(this).children('i').hasClass('fa-toggle-on')) {

 			$(this).children('i').removeClass('fa-toggle-on');
 			$(".v-grid-icon").removeClass('active');
 			$(".vert-grid").fadeOut();

 		} else if ($(".m-circle a").hasClass('is-on') && $(this).children('i').hasClass('fa-toggle-on') == false) {
 			$(this).children('i').addClass('fa-toggle-on');
 			$(".v-grid-icon").addClass('active');
 			$(".vert-grid").fadeIn();
 		};

 	});

 	$(".in-d-act").click(function(e) {
 		e.preventDefault();
 		var act = $(this).data('act');
 		if (act == "--") {
 			num--;
 			$('.pie_progress').asPieProgress('go', num);
 			$(".baseline-amount").text(num + 'px');
 			if ($("#baseline").length) {
 				$("#baseline").css({
 					backgroundImage: 'url('+s+'/img/grid-pattern/g-' + num + '.png)'
 				});
 			};
 		};
 		if (act == "++") {
 			num++;
 			$('.pie_progress').asPieProgress('go', num);
 			$(".baseline-amount").text(num + 'px');
 			if ($("#baseline").length) {
 				$("#baseline").css({
 					backgroundImage: 'url('+s+'/img/grid-pattern/g-' + num + '.png)'
 				});
 			};
 		};

 	});
 });
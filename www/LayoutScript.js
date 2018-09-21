
$(document).ready( function() {

// alias callback for convenience
resizePaneAccordions	= $.layout.callbacks.resizePaneAccordions;
	resizeTabLayout			  = $.layout.callbacks.resizeTabLayout;

// OUTER/PAGE LAYOUT
	myLayout = $('body').layout({
		west__size:		  	500
		// RESIZE Accordion widget when panes resize
	//,	west__onresize:		resizePaneAccordions
	});

	// TABS IN WEST-PANE
	// create tabs before wrapper-layout so elems are correct size before creating layout
	myLayout.panes.west.tabs({
		activate:			  resizeTabLayout // tab2-accordion is wrapped in a layout
	});
	myLayout.panes.center.tabs({
		activate:			  resizeTabLayout // tab2-accordion is wrapped in a layout
	});
// WRAPPER-LAYOUT FOR TABS/TAB-PANELS, INSIDE OUTER-WEST PANE
	myLayout.panes.center.layout({
		closable:			  true
	,	resizable:			false
	,	spacing_open:		0
	,	center__onresize:	resizeTabLayout // tabs/panels are wrapped with an inner-layout
	});


/*
	// ACCORDION - in the West pane
	$("#accordion-west").accordion({
		heightStyle:	"fill"
	,	active:			1
	});
	 */
});
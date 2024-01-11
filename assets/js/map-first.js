/**
 * Map First JavaScript
 *
 * Map First uses the jQuery JavaScript library (included with WordPress)
 * to interact with HTML DOM elements.
 *
 * Learn More
 *
 * https://api.jquery.com/
 *
 **/

// Once the DOM is fully loaded.
jQuery("document").ready(function () {
	var nav = jQuery("select#breadcrumb-nav");

	nav.change(function () {
		document.location.href = jQuery(this).val();
	});

	// You could use the body class to target specific pages.
	var body = jQuery("body").first();
	switch (true) {
		//Single Map Page
		case body.hasClass("single-waymark_map"):
			break;

		//Collection Page
		case body.hasClass("tax-waymark_collection"):
			break;
	}
});

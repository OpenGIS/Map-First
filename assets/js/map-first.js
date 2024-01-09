/**
 * Map First JavaScript
 *
 * Map First uses jQuery (included with WordPress) to modify the page upon load.
 *
 * Learn More
 *
 * https://api.jquery.com/
 *
 **/

jQuery("document").ready(function () {
	var nav = jQuery("select#breadcrumb-nav");

	nav.change(function () {
		document.location.href = jQuery(this).val();
	});

	var body = jQuery("body").first();

	switch (true) {
		//Single Map Page
		case body.hasClass("single-waymark_map"):
			var content = jQuery(".type-waymark_map").first();

			//Modify Table Styles
			jQuery("table", content).each(function () {
				jQuery(this).addClass("table table-striped");
			});

			break;

		//Collection Page
		case body.hasClass("tax-waymark_collection"):
			break;
	}
});

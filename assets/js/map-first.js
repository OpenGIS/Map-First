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

/**
 * Overlay List Callback Function
 *
 * This function is called when a Waymark Shortcode has finished
 * loading and has been provided this function name as a callback
 * using the "loaded_callback" shortcode attribute.
 *
 * It is passed a single argument - the Waymark_Instance object.
 *
 * Adapted From
 *
 * https://www.waymark.dev/docs/creating-an-interactive-overlay-list/
 *
 * Learn More
 *
 * https://www.waymark.dev/docs/callback-function/
 * https://www.waymark.dev/docs/shortcodes/#callback-function
 **/
const map_first_overlay_list = (Waymark) => {
	// Ensure Waymark and jQuery are loaded
	if (typeof Waymark !== "object" || typeof jQuery !== "function") {
		console.error("Waymark or jQuery not loaded");
	}

	//Create container
	let overlays_content = jQuery(`<div />`).addClass("waymark-overlays");

	// Iterate over each Overlay type
	["marker", "line", "shape"].forEach((type) => {
		if (typeof Waymark[type + "_sub_groups"] === "object") {
			// Get property keys
			const type_keys = Object.keys(Waymark[type + "_sub_groups"]);

			// Ensure we have
			if (!type_keys.length) {
				console.error("Waymark." + type + "_sub_groups is empty");

				return false;
			}

			// Container for each type
			let type_content = jQuery(`<div />`)
				.addClass("waymark-type")
				.append(jQuery(`<strong>${type.toUpperCase()}S</strong>`));

			//Iterate over property keys
			type_keys.forEach((key) => {
				const group = Waymark[type + "_sub_groups"][key];

				// Ensure we have a valid group
				if (
					typeof group !== "object" ||
					typeof group.getLayers !== "function"
				) {
					return false;
				}

				// Container for each group
				let group_content = jQuery(`<div />`).addClass("waymark-group");

				// Use Waymark helper functions to get icon data
				const type_data = Waymark.get_type("marker", key);
				const icon_data = Waymark.build_icon_data(type_data);

				// Build icon
				group_content.append(
					jQuery("<div />").html(icon_data.html).addClass(icon_data.className),
				);

				//Iterate over sub groups
				group.getLayers().forEach((layer) => {
					if (typeof layer.feature !== "object") {
						return;
					}

					// Build link
					group_content.append(
						jQuery("<a />")
							.attr("href", "#")
							.css("display", "block")
							.text(layer.feature.properties.title || "Click to view")

							// Add event listener
							.on("click", (e) => {
								e.preventDefault();

								// Open popup
								layer.openPopup();

								// Focus on layer
								switch (type) {
									case "marker":
										Waymark.map.setView(
											layer.getLatLng(),
											Waymark.map.getZoom(),
										);
										break;
									case "line":
									case "shape":
										Waymark.map.fitBounds(layer.getBounds());
										break;
								}
							}),
					);

					type_content.append(group_content);
				});

				overlays_content.append(type_content);
			}); // End iterate
		} else {
			console.error("Waymark." + type + "_sub_groups not found");
		}
	});

	Waymark.jq_map_container.parent().append(overlays_content);
};

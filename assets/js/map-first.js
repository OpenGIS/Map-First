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
const map_first_overlay_sidebar = (Waymark_Instance) => {
	var waymark_container = Waymark_Instance.jq_map_container;

	if (typeof waymark_container !== "object") {
		return;
	}
	waymark_container.addClass("map-first-sidebar-active");

	var waymark_shortcode_container =
		waymark_container.parent(".waymark-shortcode");
	waymark_shortcode_container.addClass("map-first-sidebar-active");

	var sidebar = jQuery(".map-first-sidebar").first();
	var container = jQuery(".waymark-shortcode.waymark-container").first();

	if (!sidebar.length || !container.length) {
		console.error("Map First: Sidebar or Container not found");

		return;
	}
	//sidebar.remove();

	/* 
		 =========================== 
		 ========== SETUP ==========
		 ===========================	
	*/

	// 	var sidebar_wrap = sidebar.parents('.map-first-sidebar-wrapper');
	sidebar.css("height", waymark_shortcode_container.height() + "px");

	// 	jQuery('.map-first-overlay').each(function() {
	// 		var overlay_width = jQuery(this).outerWidth();
	//
	// 		//Make Overlay Square
	// 		jQuery(this).css('height', overlay_width);
	//
	// 		jQuery('.map-first-overlay-image', jQuery(this)).each(function() {
	// 			jQuery(this).css({
	// 				'width': overlay_width,
	// 				'height': overlay_width,
	// 				'maxWidth': overlay_width,
	// 				'maxHeight': overlay_width
	// 			});
	// 		});
	// 	});

	/* 
		 =========================== 
		 ========= MARKERS =========
		 ===========================	
	*/

	jQuery(".map-first-markers .map-first-overlay-type", sidebar).each(
		function () {
			var type_container = jQuery(this);
			var type_key = type_container.data("type_key");

			if (typeof type_key !== "string") {
				return;
			}

			if (typeof Waymark_Instance.marker_sub_groups[type_key] !== "object") {
				console.log(Waymark_Instance);
				console.log(type_key);
			}

			//Show This Marker Type only
			type_container.hover(
				//On
				function () {
					var type_container = jQuery(this);

					//Iterate
					for (key in Waymark_Instance.marker_sub_groups) {
						//Show this type
						if (key == type_container.data("type_key")) {
							var marker_group = Waymark_Instance.marker_sub_groups[key];

							Waymark_Instance.map.addLayer(marker_group);
							//Hide others
						} else {
							Waymark_Instance.map.removeLayer(
								Waymark_Instance.marker_sub_groups[key],
							);
						}
					}
				},
				//Off
				function () {
					//Show All
					for (key in Waymark_Instance.marker_sub_groups) {
						var marker_group = Waymark_Instance.marker_sub_groups[key];

						Waymark_Instance.map.addLayer(marker_group);
					}
				},
			);

			//Each Type
			for (i in Waymark_Instance.config.marker_types) {
				if (
					type_key ===
					Waymark_Instance.make_key(
						Waymark_Instance.config.marker_types[i]["marker_title"],
					)
				) {
					var type = Waymark_Instance.config.marker_types[i];
					var icon_data = Waymark_Instance.build_icon_data(type);

					// === Legend ===
					var legend = jQuery("legend", type_container).first();

					//Title
					var type_count = legend.html().replace(type_key, "");
					legend.html(
						icon_data.html + "&nbsp;" + type.marker_title + type_count,
					);
					legend.css({
						background: type.marker_colour,
						color: type.icon_colour,
					});
				}
			}

			//Each Marker
			var markers = jQuery(".map-first-overlay-marker", type_container);
			markers.each(function () {
				var marker = jQuery(this);

				var marker_latlng = marker.data("marker_latlng");

				//Sync Sidebar Markers
				Waymark_Instance.marker_sub_groups[type_key].eachLayer(
					function (layer) {
						//Valid location
						if (typeof layer._latlng === "object") {
							//Closer than a meter
							if (layer._latlng.distanceTo(marker_latlng) < 1) {
								var jquery_marker = jQuery(layer.getElement());

								marker.data({
									leaflet_layer: layer,
									width_px: parseInt(
										jquery_marker.css("width").replace("px", ""),
									),
									height_px: parseInt(
										jquery_marker.css("height").replace("px", ""),
									),
								});
							}
						}
					},
				);

				//Click
				marker.on("click", function () {
					var marker = jQuery(this);

					var markers = jQuery(".map-first-overlay-marker", type_container);
					markers.each(function () {
						jQuery(this).removeClass("map-first-active");
					});

					if (typeof marker.data("leaflet_layer") === "object") {
						var layer = marker.data("leaflet_layer");
						Waymark_Instance.map.setView(layer.getLatLng(), 15);

						marker.addClass("map-first-active");
					}
				});

				marker.hover(
					//On
					function () {
						var marker = jQuery(this);

						if (typeof marker.data("leaflet_layer") === "object") {
							var layer = marker.data("leaflet_layer");
							var jquery_marker = jQuery(layer.getElement());

							if (!jquery_marker.hasClass("map-first-active")) {
								jquery_marker.addClass("map-first-active");

								jquery_marker.css({
									width: marker.data("width_px") * 1.25 + "px",
									height: marker.data("height_px") * 1.25 + "px",
								});
							}
						}
					},

					//Off
					function () {
						var marker = jQuery(this);

						if (typeof marker.data("leaflet_layer") === "object") {
							var layer = marker.data("leaflet_layer");
							var jquery_marker = jQuery(layer.getElement());

							if (jquery_marker.hasClass("map-first-active")) {
								jquery_marker.removeClass("map-first-active");

								jquery_marker.css({
									width: marker.data("width_px") + "px",
									height: marker.data("height_px") + "px",
								});
							}
						}
					},
				);
			});
		},
	);

	//Iterate all Leaflet *** Markers ***
	for (key in Waymark_Instance.marker_sub_groups) {
		Waymark_Instance.marker_sub_groups[key].eachLayer(function (layer) {
			//On Click
			layer.on("click", function (e) {
				//Iterate Sidebar
				jQuery(".map-first-sidebar .map-first-overlay-marker").each(
					function () {
						var marker = jQuery(this);
						var type_key = marker
							.parents(".map-first-overlay-type")
							.data("type_key");

						//Match
						if (
							typeof marker.data("leaflet_layer") === "object" &&
							marker.data("leaflet_layer") === e.target
						) {
							//Exclude these
							if (type_key == "toilet" || type_key == "drinkingwater") {
								return false;
							}

							//Hide others
							jQuery(
								".map-first-sidebar .map-first-overlay-type .waymark-accordion-group-content",
							).each(function () {
								jQuery(this).hide();
							});

							marker.addClass("map-first-active");

							//Show this
							marker.parents(".waymark-accordion-group-content").show();

							//Scroll To Marker
							marker.get(0).scrollIntoView({
								behavior: "smooth",
								block: "nearest",
								inline: "nearest",
							});
						} else {
							marker.removeClass("map-first-active");
						}
					},
				);
			});
		});
	}

	/* 
		 =========================== 
		 ========== LINES ==========
		 ===========================	
	*/

	//Each Line Type
	jQuery(".map-first-lines .map-first-overlay-type", sidebar).each(function () {
		var type_container = jQuery(this);
		var type_key = type_container.data("type_key");

		if (typeof type_key !== "string") {
			return;
		}

		if (typeof Waymark_Instance.line_sub_groups[type_key] !== "object") {
			console.log(Waymark_Instance);
			console.log(type_key);
		}

		//Show This Line Type only
		type_container.hover(
			//On
			function () {
				var type_container = jQuery(this);

				//Iterate
				for (key in Waymark_Instance.line_sub_groups) {
					//Show this type
					if (key == type_container.data("type_key")) {
						var line_group = Waymark_Instance.line_sub_groups[key];

						Waymark_Instance.map.addLayer(line_group);
						//Hide others
					} else {
						Waymark_Instance.map.removeLayer(
							Waymark_Instance.line_sub_groups[key],
						);
					}
				}
			},
			//Off
			function () {
				//Show All
				for (key in Waymark_Instance.line_sub_groups) {
					var line_group = Waymark_Instance.line_sub_groups[key];

					Waymark_Instance.map.addLayer(line_group);
				}
			},
		);

		//Each Type
		for (i in Waymark_Instance.config.line_types) {
			if (
				type_key ===
				Waymark_Instance.make_key(
					Waymark_Instance.config.line_types[i]["line_title"],
				)
			) {
				var type = Waymark_Instance.config.line_types[i];

				// === Legend ===
				var legend = jQuery("legend", type_container).first();

				//Title
				var type_count = legend.html().replace(type_key, "");
				legend.html(
					'<i class="fa fa-blind"></i>&nbsp;' + type.line_title + type_count,
				);
				legend.css({
					background: type.line_colour,
				});
			}
		}

		//Each Line
		var lines = jQuery(".map-first-overlay-line", type_container);
		lines.each(function () {
			var line = jQuery(this);

			var line_start_latlng = line.data("line_start_latlng");

			//Sync Sidebar Lines
			Waymark_Instance.line_sub_groups[type_key].eachLayer(function (layer) {
				//Valid location
				if (typeof layer._latlngs === "object") {
					//

					//Closer than a meter
					if (layer._latlngs[0].distanceTo(line_start_latlng) < 1) {
						// 						var jquery_line = jQuery(layer.getElement());

						line.data({
							leaflet_layer: layer,
						});
					}
				}
			});

			//Click
			line.on("click", function (e) {
				// 				e.preventDefault();

				var line = jQuery(this);

				var lines = jQuery(".map-first-overlay-line", type_container);
				lines.each(function () {
					jQuery(this).removeClass("map-first-active");
				});

				if (typeof line.data("leaflet_layer") === "object") {
					var layer = line.data("leaflet_layer");
					Waymark_Instance.map.fitBounds(layer.getBounds());

					line.addClass("map-first-active");
				}

				// 				return false;
			});

			line.hover(
				//On
				function () {
					var line = jQuery(this);

					if (typeof line.data("leaflet_layer") === "object") {
						var layer = line.data("leaflet_layer");

						//Elevation
						if (typeof Waymark_Instance.elevation_control === "object") {
							//Clear Map layer
							Waymark_Instance.elevation_control.clear();
							if (
								typeof Waymark_Instance.elevation_control.layer !== "undefined"
							) {
								Waymark_Instance.elevation_control.layer.removeFrom(
									Waymark_Instance.map,
								);
							}

							//Add this Line
							Waymark.elevation_control.loadData(layer.feature);
						}
					}
				},

				//Off
				function () {
					var line = jQuery(this);

					if (typeof line.data("leaflet_layer") === "object") {
						// 						var layer = marker.data('leaflet_layer');
						// 						var jquery_marker = jQuery(layer.getElement());
						//
						// 						if(jquery_marker.hasClass('map-first-active')) {
						// 							jquery_marker.removeClass('map-first-active');
						//
						// 							jquery_marker.css({
						// 								'width' : marker.data('width_px') + 'px',
						// 								'height' : marker.data('height_px')  + 'px'
						// 							});
						// 						}
					}
				},
			);
		});
	});

	//Iterate all Leaflet *** Lines ***
	for (key in Waymark_Instance.line_sub_groups) {
		Waymark_Instance.line_sub_groups[key].eachLayer(function (layer) {
			//On Click
			layer.on("click", function (e) {
				//Iterate Sidebar
				jQuery(".map-first-sidebar .map-first-overlay-line").each(function () {
					var line = jQuery(this);

					//Match
					if (
						typeof line.data("leaflet_layer") === "object" &&
						line.data("leaflet_layer") === e.target
					) {
						//Hide others
						jQuery(".map-first-sidebar .map-first-overlay-type").each(
							function () {
								jQuery(this).removeClass("waymark-active");

								jQuery(".waymark-accordion-group-content", jQuery(this)).hide();
							},
						);

						line.addClass("map-first-active");

						//Show this
						line.parents(".map-first-overlay-type").each(function () {
							jQuery(this).addClass("waymark-active");

							jQuery(".waymark-accordion-group-content", jQuery(this)).show();
						});

						//Scroll To Marker
						line.get(0).scrollIntoView({
							behavior: "smooth",
							block: "nearest",
							inline: "nearest",
						});
					} else {
						line.removeClass("map-first-active");
					}
				});
			});
		});
	}

	//container.append(sidebar);
};

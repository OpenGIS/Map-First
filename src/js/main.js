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

import "bootstrap/dist/css/bootstrap.min.css";
import "@/less/main.less";

// Once the DOM is fully loaded.
jQuery("document").ready(function () {
  // Set up the breadcrumb navigation
  var nav = jQuery("select#breadcrumb-nav");

  nav.change(function () {
    document.location.href = jQuery(this).val();
  });

  //Set up the header content
  var header = jQuery("#navbarHeader");
  var button = jQuery("button.navbar-toggler");

  // When the button is clicked, toggle the "show" class on the header
  button.click(function () {
    header.toggleClass("show");
  });

  /*
  // By WordPress page type
  switch(true) {
    
    //Single Map Page
    
    case body.hasClass('single-waymark_map') :
      console.log('Single Map Page');
      
      break;
    
    //Collection
    case body.hasClass('tax-waymark_collection') :
      console.log('Collection Page');
      
      break;    
  }  
*/
});

/**
 * Map Details Sidebar
 *
 * This function is called when a Waymark Shortcode has finished
 * loading and has been provided this function name as a callback
 * using the "loaded_callback" shortcode attribute.
 *
 * It iterates over each Leaflet layer and creates an interactive
 * list of overlays. Clicking on an overlay will open its popup
 * and zoom to its location.
 *
 * It is passed a single argument - the Waymark Instance object.
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
window.map_first_single = function (Waymark) {
  // Check for the Map First Sidebar
  if (!jQuery(".map-first-sidebar").length) {
    return false;
  }

  const container = jQuery(".map-first-sidebar-content").empty();

  // Adjust the container height
  container.css("height", Waymark.jq_map_container.height());

  let overlays_content = jQuery(`<div />`).addClass(
    "waymark-overlays waymark-accordion-container",
  );

  // Each Overlay Type
  ["marker", "line", "shape"].forEach((type) => {
    if (typeof Waymark[type + "_sub_groups"] === "object") {
      //Get property keys
      const type_keys = Object.keys(Waymark[type + "_sub_groups"]);

      if (!type_keys.length) {
        return false;
      }

      let type_content = jQuery(`<div />`)
        .addClass("waymark-type waymark-accordion-group")
        .append(jQuery(`<legend>${type.toUpperCase()}S</legend>`));

      //Iterate over property keys
      type_keys.forEach((key) => {
        const group = Waymark[type + "_sub_groups"][key];

        // Must be a LayerGroup
        if (
          typeof group !== "object" ||
          typeof group.getLayers !== "function"
        ) {
          return false;
        }

        // Create group content
        // Uses the very hand build_type_heading() helper function
        let group_content = jQuery(`<div />`)
          .addClass("waymark-group waymark-accordion-group-content")
          .append(Waymark.build_type_heading(type, key));
        //Iterate over sub groups
        group.getLayers().forEach((layer) => {
          if (typeof layer.feature !== "object") {
            return;
          }

          // Create overlay content
          let type_data = Waymark.get_type(type, layer.feature.properties.type);
          // Uses the very hand build_overlay_content() helper function
          let overlay_content = Waymark.build_overlay_content(
            layer.feature,
            type,
            type_data,
          );

          group_content.append(
            jQuery("<div />")
              .attr({
                href: "#",
                title: "Click to Focus on this " + type_data[type + "_title"],
              })
              .css("display", "block")
              .html(overlay_content)
              .addClass("waymark-overlay-content")
              .on("click", (e) => {
                e.preventDefault();

                // Close all popups
                Waymark.map.closePopup();

                // Hide .waymarkmap-first-image
                jQuery(".map-first-sidebar .map-first-image").hide();

                // Trigger click on .waymark-elevation-close button to close elevation popup
                jQuery(".waymark-elevation-close").trigger("click");

                //Smooth scroll to main content <main role="main">
                jQuery("html, body").animate(
                  {
                    scrollTop: jQuery("main").offset().top,
                  },
                  500,
                );

                switch (type) {
                  case "marker":
                    Waymark.map.setView(
                      layer.getLatLng(),
                      Waymark.map.getZoom() + 6,
                    );
                    break;
                  case "line":
                  case "shape":
                    Waymark.map.fitBounds(layer.getBounds());
                    break;
                }

                // Open popup
                layer.openPopup();
              }),
          );

          type_content.append(group_content);
        });

        overlays_content.append(type_content);
      }); // End iterate
    }
  });

  container.append(overlays_content);
};

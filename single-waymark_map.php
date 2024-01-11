<?php
/**
 * Map Details Template
 *
 * Waymark uses the custom post type 'waymark_map' to store Map data.
 *
 * Instead of using the WordPress Loop, we extract the Map Data / Meta
 * using the Waymark_Map class, which we pass the Post ID.
 *
 * Learn More
 *
 * http://codex.wordpress.org/Template_Hierarchy
 * https://www.waymark.dev/maps/route-map/
 * https://developer.wordpress.org/themes/basics/the-loop/
 *
 **/

$Map = new Waymark_Map(get_the_ID());

get_header();?>

<article id="post-<?php the_ID();?>" <?php post_class();?>>

	<div class="map-first-single">
		<div class="map-first-map">
<?php
// Output Map using Waymark Shortcode
// Here we also pass the name of the JavaScript function to call when
// Waymark has finished loading, defined below
echo do_shortcode('[Waymark shortcode_header="0" show_elevation="1" loaded_callback="map_first_single" map_id="' . get_the_ID() . '" ]');

$map_meta = Waymark_Helper::get_map_meta($Map);

//Do we have something to display?
if (sizeof($map_meta)) {
	echo Waymark_Helper::map_meta_html($map_meta, false);
}
//END Meta

?>
		</div>

		<div class="map-first-sidebar"><?php
// Get Map data
$map_data = $Map->data['map_data'];

// Convert to Array
$map_data = Waymark_GeoJSON::string_to_feature_collection($map_data);

// Get Overlays by Type
$overlays = Waymark_GeoJSON::features_by_overlay_type($map_data);

// Output Overlays
echo Waymark_Helper::overlays_list_html($overlays);
?>
		</div>
	</div>
</article>

<?php map_first_single_pagination();?>

<script>
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
const map_first_single = (Waymark) => {
  if (typeof Waymark !== "object" || typeof jQuery !== "function") {
    console.error("Waymark or jQuery not loaded");
  }

  // Check for the Map First Sidebar
  if (!jQuery(".map-first-sidebar").length) {
		return false;
	}

	const container = jQuery(".map-first-sidebar").empty();


  let overlays_content = jQuery(`<div />`).addClass("waymark-overlays waymark-accordion-container");


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

        if (
          typeof group !== "object" ||
          typeof group.getLayers !== "function"
        ) {
          return false;
        }

        let group_content = jQuery(`<div />`)
          .addClass("waymark-group waymark-accordion-group-content")
        	.append(Waymark.build_type_heading(type, key))
        ;

        //Iterate over sub groups
        group.getLayers().forEach((layer) => {
          if (typeof layer.feature !== "object") {
            return;
          }

          group_content.append(
            jQuery("<a />")
              .attr("href", "#")
              .css("display", "block")
              .text(layer.feature.properties.title || "Click to view")

              .on("click", (e) => {
                e.preventDefault();

                // Open popup
                layer.openPopup();

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
    }
  });

  container.append(overlays_content);

  // waymark_setup_accordions();
};
</script>

<!-- <?php get_sidebar();?> -->
<?php get_footer();?>
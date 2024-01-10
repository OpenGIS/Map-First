<?php

/**
 * Home Template
 *
 * This template is used to display the home page of the site.
 *
 * Learn More
 *
 * https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 **/

// Get all Maps
$Map = new Waymark_Map();

$overlays = [];
foreach ($Map->get_posts() as $map) {
	// Get Map data
	$map_data = get_post_meta($map->ID, 'waymark_map_data', true);

	// Convert to Array
	$map_data = Waymark_GeoJSON::string_to_feature_collection($map_data);

	// Merge recursively

	$overlays = array_merge_recursive($overlays, Waymark_GeoJSON::features_by_overlay_type($map_data));
}

get_header();?>

<!-- All Maps -->
<div class="row">
	<article class="container-fluid">
		<?php echo do_shortcode('[Waymark shortcode_header="0" loaded_callback="map_first_home" map_hash="home" ]'); ?>
	</article>
</div>

<!-- Individual Maps -->
<div class="row">
	<?php echo map_first_list_overlays($overlays); ?>
</div>

<?php get_sidebar();?>

<script>
	/**
	 * Callback function for the Map
	 *
	 * This **JavaScript** function is called when Waymark has finished loading to appropriate Shortcode.
	 *
	 * It is passed a single argument - the Waymark_Instance object.
	 *
	 * Learn More
	 *
	 * https://www.waymark.dev/docs/callback-function/
	 *
	 **/
	function map_first_home(Waymark_Instance) {
<?php
$i = 1;
foreach ($Map->get_posts() as $map) {
	// Get Map data
	$map_data = get_post_meta($map->ID, 'waymark_map_data', true);

	// Setting for Embed / Fetch via XJAX (Waymark Settings > Maps > Collections)

	// Embed
	if ('embed' === Waymark_Config::get_setting('misc', 'collection_options', 'load_method')) {

		//Modify map data
		$map_data = Waymark_Helper::add_map_link_to_description($map->ID, $map->post_title, $map_data);

		$out .= 'Waymark_Instance.load_json(' . $map_data . ');' . "\n";
		// AJAX
	} else {
		//Reset view (last map only)
		if ($i == sizeof($Map->get_posts())) {
			$reset_view = 'true';
		} else {
			$reset_view = 'false';
		}

		$out .= 'waymark_load_map_data(Waymark_Instance, ' . $map->ID . ', true, ' . $reset_view . ');' . "\n";
	}

	$i++;
}
?>

	}
</script>

<?php get_footer();?>
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

<article id="post-<?php the_ID();?>" <?php post_class('container-fluid');?>>

	<div class="map-first-single row">
		<!-- Map: Full width on mobile, 75% otherwise -->
		<div class="map-first-map col-sm-12 col-md-9">
<?php
// Output Map using Waymark Shortcode
// Here we also pass the name of the JavaScript function to call when
// Waymark has finished loading, defined below
echo do_shortcode('[Waymark
  shortcode_header="0"
  show_elevation="1"
  loaded_callback="map_first_single"
  map_id="' . get_the_ID() . '"
]');

$map_meta = Waymark_Helper::get_map_meta($Map);
?>
</div>
		<!-- Sidebar: Full width on mobile, 25% otherwise -->
		<div class="map-first-sidebar col-sm-12 col-md-3">
			<!-- WordPress custom post type Thumbnail -->
			<?php if (has_post_thumbnail()): ?>

				<!-- Hide on mobile -->
			<div class="map-first-image d-none d-md-block">

				<?php the_post_thumbnail('large', array(
	'class' => 'img-fluid',
));?>
			</div>
			<?php endif;?>

			<div class="map-first-sidebar-content">
			<?php
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

<?php get_sidebar();?>
<?php get_footer();?>
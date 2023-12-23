<?php

$Map = new Waymark_Map();

get_header();?>

<!-- All Maps -->
<div class="row">
	<article class="container-fluid">
		<?php echo do_shortcode('[Waymark shortcode_header="0" loaded_callback="map_first_home" map_hash="home" ]'); ?>
	</article>
</div>

<!-- Individual Maps -->
<div class="row">
	<?php foreach ($Map->get_posts() as $map): ?>
	<article class="col-4 py-4">
		<?php echo do_shortcode('[Waymark map_id="' . $map->ID . '"  map_height="300" shortcode_header="1" show_gallery="0" ]'); ?>
	</article>
	<?php endforeach;?>
</div>

<?php get_sidebar();?>

<script>
	function map_first_home(Waymark_Instance) {
<?php
foreach ($Map->get_posts() as $map) {
	$map_data = get_post_meta($map->ID, 'waymark_map_data', true);

	//Modify map data
	$map_data = Waymark_Helper::add_map_link_to_description($map->ID, $map->post_title, $map_data);

	echo 'Waymark_Instance.load_json(' . $map_data . ');' . "\n";

}
?>
	}
</script>

<?php get_footer();?>
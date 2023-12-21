<?php get_header();?>

<?php

$Map = new Waymark_Map();

foreach ($Map->get_posts() as $map) {
	echo do_shortcode('[Waymark map_id="' . $map->ID . '" ]');
}

?>

<?php get_sidebar();?>
<?php get_footer();?>
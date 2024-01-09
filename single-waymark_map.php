<?php
/**
 * Map Details Template
 *
 * Waymark uses the custom post type 'waymark_map' to store Map data.
 *
 * By default, viewing the Map Details page will display the Map using the
 * template single post template. This template allows you to customize how
 * the Map is displayed.
 *
 * Learn More
 *
 * http://codex.wordpress.org/Template_Hierarchy
 * https://www.waymark.dev/maps/route-map/
 *
 **/

get_header();?>

<?php
//Content
if (have_posts()) {
	//The WordPress Loop (See https://developer.wordpress.org/themes/basics/the-loop/
	while (have_posts()) {
		the_post();
		?>
		<article id="post-<?php the_ID();?>" <?php post_class();?>>
			<?php the_content();?>
		</article>
<?php
}
//No Content
} else {
	?>
<article id="not-found" <?php post_class();?>>
	<?php echo do_shortcode('[Waymark file_url="' . get_template_directory_uri() . '/assets/geo/404.geojson"]'); ?>
</article>
<?php
}
?>

<?php map_first_single_pagination();?>

<?php get_sidebar();?>
<?php get_footer();?>
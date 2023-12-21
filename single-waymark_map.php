<?php get_header();?>

<?php
//Content
if (have_posts()) {
	//The Loop
	while (have_posts()) {
		the_post();

		//$map_meta = Waymark_Helper::get_meta(get_the_ID());
		?>
		<article id="post-<?php the_ID();?>" <?php post_class();?>>
			<?php the_content();?>
		</article>
<?php
}
//No Content
} else {
	?>
<article id="map-not-found" <?php post_class();?>>
	<?php echo do_shortcode('[Waymark file_url="' . get_template_directory_uri() . '/assets/geo/404.geojson"]'); ?>
</article>
<?php
}
?>

<?php map_first_single_pagination();?>

<?php get_sidebar();?>
<?php get_footer();?>
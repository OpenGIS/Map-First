<?php get_header();?>

<?php
//Content
if (have_posts()) {
	//The Loop
	while (have_posts()) {
		the_post();
		?>
		<article id="post-<?php the_ID();?>" <?php post_class();?>>
				<h1><?php the_title();?></h1>
				<?php the_content();?>
		</article>
<?php
}
//No Content
} else {
	?>
	<article id="not-found" <?php post_class();?>>
		<h1>Not Found</h1>

		<?php echo do_shortcode('[Waymark file_url="' . get_template_directory_uri() . '/assets/geo/404.geojson"]'); ?>
	</article>
<?php
}
?>

<?php map_first_archive_pagination();?>

<?php get_sidebar();?>
<?php get_footer();?>
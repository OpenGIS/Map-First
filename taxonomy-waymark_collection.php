<?php get_header();?>

<article id="collection-<?php the_ID();?>" <?php post_class();?>>

	<!-- Shortcode with all Maps in Collection -->
	<?php echo do_shortcode('[Waymark  show_gallery="0" shortcode_header="0" collection_id="' . get_queried_object()->term_id . '"]'); ?>

	<p class="lead text-center mb-5"><?php echo get_queried_object()->description; ?></p>
</article>

<?php map_first_archive_pagination();?>

<!-- Mini Maps -->
<div class="row mb-4">
	<?php
//Content
if (have_posts()) {
	//The Loop
	while (have_posts()) {
		the_post();
		?>
		<article <?php post_class('col-sm-6 col-md-4 py-4');?>>
			<?php echo do_shortcode('[Waymark map_id="' . $post->ID . '" map_height="300" shortcode_header="1" show_gallery="0"]'); ?>
		</article>
<?php
}
	//No Content
} else {

}
?>
</div>

<?php map_first_archive_pagination();?>

<?php get_sidebar();?>
<?php get_footer();?>
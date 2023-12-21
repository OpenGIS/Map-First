<?php get_header(); ?>

<article id="collection-<?php the_ID(); ?>" <?php post_class(); ?>>

	<!-- Shortcode with all Maps in Collection -->
	<?php echo do_shortcode('[Waymark shortcode_header="0" collection_id="' . get_queried_object()->term_id . '"]'); ?>
		
	<p class="lead text-center mb-5"><?php echo get_queried_object()->description; ?></p>
</article>

<?php map_first_archive_pagination(); ?>

<div class="row mb-4">
	<?php
	//Content
	if(have_posts()) {
		//The Loop
		while(have_posts()) {
			the_post();
			get_template_part('template-parts/content/content', 'excerpt');
		}
	//No Content
	} else {
		get_template_part('template-parts/content/content', 'none');
	}
	?>
</div>

<?php map_first_archive_pagination(); ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
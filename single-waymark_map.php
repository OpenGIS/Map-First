<?php get_header(); ?>

<?php
//Content
if(have_posts()) {
	//The Loop
	while(have_posts()) {
		the_post();
		get_template_part('template-parts/content/content', 'map');
	}

	// Previous/next page navigation.
	//twentynineteen_the_posts_navigation();
//No Content
} else {
	get_template_part('template-parts/content/content', 'none');
}
?>

<?php map_first_single_pagination(); ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
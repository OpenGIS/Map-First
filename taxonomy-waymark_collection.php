<?php

/**
 * Collection Archive Template
 *
 * Waymark uses the custom taxonomy 'waymark_collection' to group maps together.
 *
 * By default, viewing the Collection page will list maps in that Collection the
 * same as any other archive page. This template allows you to customize that
 * how the maps are displayed. Here we are using the Shortcode to display the
 * entire collection in a single Map. Below that we are using the Shortcode to
 * display each Map in the Collection as a small Map.
 *
 * Learn More
 *
 * http://codex.wordpress.org/Template_Hierarchy
 * https://www.waymark.dev/docs/shortcodes/
 *
 **/

get_header();?>

<article id="collection-<?php the_ID();?>" <?php post_class();?>>

	<!-- Shortcode with all Maps in Collection -->
	<?php echo do_shortcode('[Waymark collection_id="' . get_queried_object()->term_id . '" show_gallery="0" shortcode_header="0"]'); ?>

	<!-- Collection Description -->
	<p class="lead text-center mb-5"><?php echo get_queried_object()->description; ?></p>
</article>

<?php map_first_archive_pagination();?>

<!-- Mini Maps -->
<div class="row mb-4">
	<!-- This is the WordPress Loop (See https://developer.wordpress.org/themes/basics/the-loop/) -->
	<?php if (have_posts()): while (have_posts()): the_post();?>
		<!-- Bootstrap utility classes for layout -->
		<article <?php post_class('col-sm-6 col-md-4 py-4');?>>
			<!-- Tweak the Shortcode to display a smaller Map with some custom options -->
			<?php echo do_shortcode('[Waymark map_id="' . $post->ID . '" map_height="300" shortcode_header="1" show_gallery="0"]'); ?>
		</article>
		<?php endwhile;endif;?>
</div>

<?php map_first_archive_pagination();?>

<?php get_sidebar();?>
<?php get_footer();?>
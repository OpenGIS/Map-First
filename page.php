<?php get_header(); ?>

<?php
//Content
if(have_posts()) {
	//The Loop
	while(have_posts()) {
		the_post();
		get_template_part('template-parts/content/content');
	}

	echo '<hr />' . "\n";

	//Home?
	if(is_front_page()) {
		echo '<p>Sitemap:</p>' . "\n";
		echo '<ul>' . "\n";
		wp_list_pages(array(
			'title_li' => null,
			'exclude' => get_option('page_on_front')
		));		
		echo '</ul>' . "\n";
	}

	//Children?
	$post_children = get_posts(array(
		'post_type' => $post->post_type,
		'post_parent' => $post->ID
	));
	
	if($post_children) {
		echo '<p>Sub-pages:</p>' . "\n";
		echo '<ul>' . "\n";
		foreach($post_children as $child) {
			//No home
			if($child->ID != get_option('page_on_front')) {
				echo '	<li><a href="' . get_permalink($child->ID) . '">' . $child->post_title . '</a></li>' . "\n";					
			}
		}
		echo '</ul>' . "\n";
	}

	//Parent?
	if($post->post_parent) {
		$ancestors = get_post_ancestors($post);
		$parent_id = $ancestors[0];
		
		echo '<p>Parent page:</p>' . "\n";
		echo '<ul>' . "\n";
		echo '	<li><a href="' . get_permalink($parent_id) . '">' . get_the_title($parent_id) . '</a></li>' . "\n";					
		echo '</ul>' . "\n";			
	}			

	// Previous/next page navigation.
	//twentynineteen_the_posts_navigation();
//No Content
} else {
	get_template_part('template-parts/content/content', 'none');
}
?>


<?php get_sidebar(); ?>
<?php get_footer(); ?>
<?php 
$collection = get_queried_object();

get_header(); ?>

<article id="collection-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php echo do_shortcode('[' . Waymark_Config::get_item('shortcode') . ' collection_id="' . $collection->term_id . '"]'); ?>
		
<?php
		//Create Collection object
// 		$Collection = new Waymark_Collection($collection->term_id);
// 		
// 		$objects = array();
// 		foreach($Collection->Maps as $Map) {
// 			//Ensure we have map_data and that it is valid JSON
// 			if(isset($Map->data['map_data']) && $FeatureCollection = json_decode($Map->data['map_data'])) {
// 				$objects = array_merge_recursive($objects, waymark_geojson_to_objects($FeatureCollection));				
// 			}
// 		}
// 		
// 		echo waymark_list_objects($objects);									
	?>

	<p class="lead text-center mb-5"><?php echo $collection->description; ?></p>
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
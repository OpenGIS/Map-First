<?php

$Map = new Waymark_Map();

get_header();?>

<div class="row mb-4">
	<?php foreach ($Map->get_posts() as $map): ?>
	<article class="col-6 py-4">
		<?php echo do_shortcode('[Waymark map_id="' . $map->ID . '"  map_height="300" shortcode_header="1" show_gallery="0" ]'); ?>
	</article>
	<?php endforeach;?>
</div>

<?php get_sidebar();?>
<?php get_footer();?>
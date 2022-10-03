<article id="post-<?php the_ID(); ?>" <?php post_class('col-md-4 mt-3 map-first-excerpt'); ?>>
	<div class="card">
		<?php echo do_shortcode('[' . Waymark_Config::get_item('shortcode') . ' map_id="' . get_the_ID() . '" map_height="240" show_gallery="0"]'); ?>

		<div class="card-body">
			<h6 class="card-title"><a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h5>
		</div>
	</div>
</article>

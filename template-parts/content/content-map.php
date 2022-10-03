<?php
	//$map_meta = Waymark_Helper::get_meta(get_the_ID());
?>
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php the_content(); ?>
</article>

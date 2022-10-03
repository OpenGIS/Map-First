<?php
$page_children = get_posts(array(
	'post_type' => 'page',
	'post_parent' => get_the_ID()
));
?>
	
<?php if($page_children) : ?>
<div class="container"style="border:1px solid red">
	<?php foreach($page_children as $child) : ?>
	<?php echo $child->post_title; ?>
	<?php endforeach; ?>
</div>
<?php endif; ?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<h1><?php the_title(); ?></h1>
		<?php the_content(); ?>
</article>

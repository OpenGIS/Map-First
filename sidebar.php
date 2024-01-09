<?php
/**
 * Dynamic Sidebar Template
 *
 * Creates a dynamic sidebar for the theme that can be administered via
 * Appearance > Widgets in the WordPress Dashboard.
 *
 * Learn More
 *
 * https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 *
 **/

if (is_active_sidebar(1)): ?>
<!-- START Sidebar -->
<div id="secondary" class="widget-area" role="complementary">
	<?php dynamic_sidebar(1);?>
</div>
<!-- END Sidebar -->
<?php endif;?>

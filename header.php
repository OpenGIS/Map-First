<?php
//Thanks! https://wordpress.stackexchange.com/a/29432/11684
$theme_locations = get_nav_menu_locations();
if (array_key_exists('map-first-header-nav', $theme_locations)) {
	$menu_obj = get_term($theme_locations['map-first-header-nav'], 'nav_menu');

	if ($menu_obj && isset($menu_obj->name)) {
		$menu_name = $menu_obj->name;
	} else {
		$menu_name = '';
	}
} else {
	$menu_name = '';
}

$menu_list = wp_nav_menu(array(
	'theme_location' => 'map-first-header-nav',
	'container' => false,
	'menu_class' => 'list-unstyled',
	'echo' => false,
	'fallback_cb' => false,
));
$menu_list = str_replace(
	array(
		'<a href',
		'sub-menu',
	),
	array(
		'<a class="text-white" href',
		'sub-menu list-unstyled pl-4',
	),
	$menu_list
);
?>

<!DOCTYPE html>
<html <?php language_attributes();?>>
	<head>
		<meta charset="<?php bloginfo('charset');?>" />
		<meta name="viewport" content="width=device-width" />
		<title><?php wp_title('|', true, 'right');?><?php echo get_bloginfo('name', 'display'); ?></title>
		<link rel="pingback" href="<?php echo esc_url(get_bloginfo('pingback_url')); ?>">
		<?php wp_head();?>

		<style type="text/css">
			/* Reset common HTML elements */
			html, body, pre, code, strong, b, ol, form, label, legend, table {
				background-color: <?php echo get_theme_mod('map_first_body_background', '#eeeeee'); ?>;
				color: <?php echo get_theme_mod('map_first_body_color', '#111111'); ?>;
			}
			.waymark-shortcode .waymark-header,
			.navbar, #navbarHeader, .navbar select {
				background-color: <?php echo get_theme_mod('map_first_header_background', '#212529'); ?> !important;
			}
			.waymark-shortcode .waymark-header,
			.navbar *, #navbarHeader * {
				color: <?php echo get_theme_mod('map_first_header_color', '#fff'); ?> !important;
			}
			.navbar-toggler-icon {
				background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='<?php echo urlencode(get_theme_mod('map_first_header_color', '#ffffff')); ?>' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
			}
			.navbar-toggler {
				border-color: <?php echo get_theme_mod('map_first_header_color', '#ffffff'); ?> !important;
			}
			main a:hover,
			.pagination a:hover,
			main a,
			.pagination a {
				color: <?php echo get_theme_mod('map_first_link_color', '#0056b3'); ?>;
			}
			.page-item.active .page-link {
				border-color: <?php echo get_theme_mod('map_first_link_color', '#0056b3'); ?>;
				background-color: <?php echo get_theme_mod('map_first_link_color', '#0056b3'); ?>;
			}
		</style>
	</head>
	<body <?php body_class();?>>
		<?php wp_body_open();?>

		<!-- START Header -->
		<header>
			<div class="collapse bg-dark" id="navbarHeader">
				<div class="container">
					<div class="row">
						<div class="col-sm-8 col-md-7 py-4">
							<?php if (function_exists('dynamic_sidebar')) {dynamic_sidebar('map-first-header-content');}?>
						</div>
						<div class="col-sm-4 offset-md-1 py-4">

							<h4 class="text-white"><?php echo $menu_name; ?></h4>
							<?php echo $menu_list; ?>
						</div>
					</div>
				</div>
			</div>

			<div class="navbar navbar-dark bg-dark shadow-sm mb-2">
				<div class="container justify-content-between">
					<div class="navbar-left">
						<!-- Brand -->
						<?php if (is_front_page()): ?>
						<span class="navbar-brand"><?php if ($header_logo = get_theme_mod('map_first_header_logo', '')): ?><img src="<?php echo $header_logo; ?>" alt="<?php echo get_bloginfo('name', 'display'); ?>" /><?php endif;?><?php echo get_bloginfo('name', 'display'); ?></span>
						<?php else: ?>
						<a href="<?php echo esc_url(home_url('/')); ?>" class="navbar-brand"><?php if ($header_logo = get_theme_mod('map_first_header_logo', '')): ?><img src="<?php echo $header_logo; ?>" alt="<?php echo get_bloginfo('name', 'display'); ?>" /><?php endif;?><?php echo get_bloginfo('name', 'display'); ?></a>
						<?php endif;?>

						<!-- Breadcrumb -->
						<div class="navbar-text pt-0">
							<?php map_first_breadcrumb();?>
						</div>
  				</div>

  				<!-- Menu Toggle -->
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
				</div>
			</div>
		</header>
		<!-- END Header -->

		<!-- START Main -->
		<main role="main" class="container">

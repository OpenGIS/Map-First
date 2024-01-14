	</main>
	<!-- END Main -->

	<!-- START Footer (not on home) -->
	<?php if (!is_front_page()): ?>
	<footer>
		<?php if (function_exists('dynamic_sidebar')) {dynamic_sidebar('map-first-footer-content');}?>
	</footer>
	<!-- END Footer -->
	<?php endif;?>

	<?php wp_footer();?>
</body>
</html>

<?php

function map_first_pre_get_posts($query){
  if(is_archive() && is_tax('waymark_collection')) {
		$query->set('order', 'ASC' );	  
  }
}
add_action('pre_get_posts', 'map_first_pre_get_posts'); 

function map_first_customize_register($wp_customize) {
	$wp_customize->add_section('map_first_section', array(
		'title' => 'Map First',
	));	

	$wp_customize->add_setting('map_first_header_logo', array(
		'default' => '',
		'transport' => 'refresh',
		'sanitize_callback' => 'esc_url_raw'
	));

	$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'map_first_header_logo', array(
		'label' => 'Header Logo Image',
		'section' => 'map_first_section'
	)));
 
	$wp_customize->add_setting('map_first_header_background', array(
		'default' => '#212529',
		'transport' => 'refresh',
		'sanitize_callback' => 'sanitize_hex_color'
	));
 
	$wp_customize->add_control('map_first_header_background', array(
		'label' => 'Header Background Colour',
		'section' => 'map_first_section',
		'type' => 'color'
	));

	$wp_customize->add_setting('map_first_header_color', array(
		'default' => '#fff',
		'transport' => 'refresh',
		'sanitize_callback' => 'sanitize_hex_color'
	));
 
	$wp_customize->add_control('map_first_header_color', array(
		'label' => 'Header Text Colour',
		'section' => 'map_first_section',
		'type' => 'color'
	));	 
	 
	$wp_customize->add_setting('map_first_link_color', array(
		'default' => '#0056b3',
		'transport' => 'refresh',
		'sanitize_callback' => 'sanitize_hex_color'
	));
 
	$wp_customize->add_control('map_first_link_color', array(
		'label' => 'Content Link Colour',
		'section' => 'map_first_section',
		'type' => 'color'
	));		 
}
add_action('customize_register', 'map_first_customize_register' );

function map_first_widget() {
	register_sidebar(array(
		'name' => 'Map First Header Content',
		'id' => 'map-first-header-content',
		'before_widget' => '<div>',
		'after_widget' => '</div>',
		'before_title' => '<h4 class="text-white">',
		'after_title' => '</h4>'
	));
}
add_action('widgets_init', 'map_first_widget');

function map_first_menu() {
  register_nav_menu('map-first-header-nav', 'Map First Header Nav');
}
add_action('init', 'map_first_menu');

function map_first_breadcrumb() {
	global $post; 
	

	if($post) {
		$crumbs = array();
		
		switch(true) {
			// ========= Home  =========
			case is_front_page() :
	
				break;
	
			// ========= Taxonomy  =========
			case is_archive() :
				$tax = get_queried_object();		
				if(isset($tax->name)) {
					$crumbs[] = array(
						'prepend' => ' Maps / ',
						'text' => $tax->name
					);			
				}
				
				break;
				
			// ========= Map  =========
			case is_singular('waymark_map') :
				//Collections
				$collections = wp_get_post_terms($post->ID, 'waymark_collection');
	
				//If we have Collections
				if(sizeof($collections)) {
					//Sort by count ASC
					usort($collections, function($a, $b) {
						return $a->count < $b->count;
					});
				
					$crumbs[] = array(
						'prepend' => ' Map / ',
						'text' => $collections[0]->name,
						'link' => get_term_link($collections[0])
					);
				}
	
				//Map Title
				$crumbs[] = array(
					'text' => get_the_title()
				);
				
				break;
			// ========= Posts / Pages  =========
			case is_page() :
			case is_single() :
				//Ancestors?
				if($post->post_parent) {
					$ancestors = get_post_ancestors($post);
					$ancestors = array_reverse($ancestors);
					
					foreach($ancestors as $ancestor) {
						$crumbs[] = array(
							'text' => get_the_title($ancestor),
							'link' => get_permalink($ancestor)
						);
					}				
				}			
				
				//Map Title
				$crumbs[] = array(
					'text' => get_the_title()
				);	
						
				break;	
		}	
		
		//Do we have something to display?
		if(sizeof($crumbs)) {
			echo '<span vocab="https://schema.org/" typeof="BreadcrumbList">' . "\n";
	
			$position = 1;
			foreach($crumbs as $crumb) {
				$prepend = isset($crumb['prepend']) ? $crumb['prepend'] : '';			
				$append = isset($crumb['append']) ? $crumb['append'] : '';
				$text = isset($crumb['text']) ? $crumb['text'] : '';
			
				echo '	/' . "\n";
				echo '	<span property="itemListElement" typeof="ListItem">' . "\n";
				echo $prepend;
				if(isset($crumb['link'])) {
					echo '		<a property="item" typeof="WebPage" href="' . $crumb['link'] . '">' . "\n";
				}
				echo '			<span property="name">' . $text . $append . '</span>' . "\n";
				if(isset($crumb['link'])) {
					echo '		</a>' . "\n";
				}
				echo $append;
				echo '		<meta property="position" content="' . $position . '" />' . "\n";
				echo '	</span>' . "\n";
			}	
	
			echo '	</span>' . "\n";
		}
		
		//Children?
		if(is_front_page()) {
			$post_children = get_posts(array(
				'post_type' => 'page',
				'post_parent' => '0'
			));		
		} else {
			$post_children = get_posts(array(
				'post_type' => $post->post_type,
				'post_parent' => $post->ID
			));
		}
			
		if($post_children) {
			echo '	/' . "\n";
			echo '<select id="breadcrumb-nav">' . "\n";
			echo '	<option selected="selected">...</option>' . "\n";
			foreach($post_children as $child) {
				//No home
				if($child->ID != get_option('page_on_front')) {
					echo '	<option value="' . get_permalink($child->ID) . '">' . $child->post_title . '</option>' . "\n";					
				}
			}
			echo '</select>' . "\n";
		}
		
	}
}

function map_first_enqueue_assets() {
	//CSS
	wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css', false, '4.3.1');
	wp_enqueue_style('map-first', get_template_directory_uri() . '/assets/css/map-first.css');
	
	//JS
	wp_enqueue_script('bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array('jquery'), '4.3.1', true);
	wp_enqueue_script('map-first', get_template_directory_uri() . '/assets/js/map-first.js', array('bootstrap'), false, true);	
}
add_action('wp_enqueue_scripts', 'map_first_enqueue_assets');


//Thanks! https://njengah.com/wordpress-custom-pagination/
function map_first_archive_pagination() {
	global $wp_query;

	$big = 9999999;
	$pagination_list = paginate_links(array(
	 'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
	 'format' => '?paged=%#%',
	 'current' => max(1, get_query_var('paged')),
	 'total' => $wp_query->max_num_pages,
	 'type' => 'array',
	 'prev_text' => '&lt;',
	 'next_text' => '&gt;'	 
	));
	
	//If we have a list
	if(isset($pagination_list) && sizeof($pagination_list)) {
  	//Format for Bootstrap
	  echo '<ul class="pagination justify-content-center mt-5">' . "\n";

		$count = 0;
	  foreach($pagination_list as $link) {
	  	$class = 'page-item';
	  	if(strpos($link, '<span') !== false) {
	  		$class .= ' active';
	  	}
		  echo '<li class="' . $class . '">' . "\n";	  

	  	$bad = array(
	  		'page-numbers'	
	  	);
	  	$good = array(
	  		'page-link'		  	
	  	);	  	
	  	echo str_replace($bad, $good, $link);	  	

		  echo '</li>' . "\n";	  
	  }

	  echo '</ul>' . "\n";	  
	}
}

function map_first_single_pagination() {
	//Format for Bootstrap
	echo '<ul class="pagination justify-content-center mt-5">' . "\n";
	
  echo '	<li class="page-item">' . "\n";	  
  $link = get_previous_post_link('%link', '&lt; %title', true, '', 'waymark_collection');
  echo str_replace('<a', '<a class="page-link"', $link);
  echo '	</li>' . "\n";	  

  echo '	<li class="page-item">' . "\n";	    
  $link = get_next_post_link('%link', '%title &gt;', true, '', 'waymark_collection');
  echo str_replace('<a', '<a class="page-link"', $link); 
  echo '	</li>' . "\n";	
  
  echo '</ul>' . "\n";	    
}

// ----
// Unused...

function waymark_geojson_to_objects($FeatureCollection) {
	$objects = array(
		'markers' => array(),
		'lines' => array(),
		'shapes' => array()		
	);
	
	foreach($FeatureCollection->features as $feature) {
		if(isset($feature->geometry->type)) {
			switch($feature->geometry->type) {
				case 'Point' :
					//Waymark_Helper::debug($feature);
					
					//Circle
					if(isset($feature->properties->radius)) {
						$objects['shapes'][$feature->properties->type][] = $feature->properties;										
					//Marker
					} else {
						$objects['markers'][$feature->properties->type][] = $feature->properties;					
					}

					break;

				case 'LineString' :
				case 'MultiLineString' :
					$objects['lines'][$feature->properties->type][] = $feature->properties;

					break;
				case 'Polygon' :
					$objects['shapes'][$feature->properties->type][] = $feature->properties;
					
					break;
			}
		}
	}	

	return $objects;
}

function waymark_list_objects($objects) {
	$out = '';
	
	//Waymark_Helper::debug($objects);
	
	foreach($objects as $object_type => $object) {
		switch($object_type) {
			case 'markers' :
				$out .= '<p>Markers:</p>' . "\n";
				$out .= '<ul>' . "\n";
				foreach($object as $marker_type => $markers) {
					$out .= '<li>' . $marker_type . ' (' . sizeof($markers) . ')</li>' . "\n";				
				}
				$out .= '</ul>' . "\n";
								
				break;
			case 'lines' :
				$out .= '<p>Lines:</p>' . "\n";
				$out .= '<ul>' . "\n";
				foreach($object as $line_type => $lines) {
					$out .= '<li>' . $line_type . ' (' . sizeof($lines) . ')</li>' . "\n";				
				}
				$out .= '</ul>' . "\n";
								
				break;
			case 'shapes' :
				$out .= '<p>Shapes:</p>' . "\n";
				$out .= '<ul>' . "\n";
				foreach($object as $shape_type => $shapes) {
					$out .= '<li>' . $shape_type . ' (' . sizeof($shapes) . ')</li>' . "\n";				
				}
				$out .= '</ul>' . "\n";
								
				break;								
		}
	}
	
	return $out;
}

function waymark_head_css() {
	if(! class_exists('Waymark_CSS')) {
		return;
	}

	global $current_user;

	if(! in_array('administrator', $current_user->roles)) {
		Waymark_CSS::add_chunk('.waymark-map .waymark-marker-information { display: none !important; }');
	}
}
add_action('wp_head', 'waymark_head_css');
jQuery('document').ready(function() {
	var nav = jQuery('select#breadcrumb-nav');

	nav.change(function() {
		document.location.href = jQuery(this).val();
	});

	var body = jQuery('body').first();
	
	switch(true) {
		//Single Map Page
		case body.hasClass('single-waymark_map') :
			var content = jQuery('.type-waymark_map').first();

			jQuery('table', content).each(function() {
				var table = jQuery(this);
				
				table.addClass('table table-striped');
			});
			
			break;
		
		//Collection Page
		case body.hasClass('tax-waymark_collection') :
			break;		
	}
});
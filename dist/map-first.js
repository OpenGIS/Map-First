jQuery("document").ready(function(){var e=jQuery("select#breadcrumb-nav");e.change(function(){document.location.href=jQuery(this).val()});var r=jQuery("#navbarHeader"),a=jQuery("button.navbar-toggler");a.click(function(){r.toggleClass("show")})});window.map_first_single=function(e){if(!jQuery(".map-first-sidebar").length)return!1;const r=jQuery(".map-first-sidebar-content").empty();let a=jQuery("<div />").addClass("waymark-overlays waymark-accordion-container");["marker","line","shape"].forEach(t=>{if(typeof e[t+"_sub_groups"]=="object"){const s=Object.keys(e[t+"_sub_groups"]);if(!s.length)return!1;let c=jQuery("<div />").addClass("waymark-type waymark-accordion-group").append(jQuery(`<legend>${t.toUpperCase()}S</legend>`));s.forEach(u=>{const n=e[t+"_sub_groups"][u];if(typeof n!="object"||typeof n.getLayers!="function")return!1;let p=jQuery("<div />").addClass("waymark-group waymark-accordion-group-content").append(e.build_type_heading(t,u));n.getLayers().forEach(o=>{if(typeof o.feature!="object")return;let i=e.get_type(t,o.feature.properties.type),d=e.build_overlay_content(o.feature,t,i);p.append(jQuery("<div />").attr("href","#").css("display","block").html(d).addClass("waymark-overlay-content").on("click",l=>{switch(l.preventDefault(),e.map.closePopup(),jQuery(".waymark-elevation-close").trigger("click"),jQuery("html, body").animate({scrollTop:jQuery("main").offset().top},500),t){case"marker":e.map.setView(o.getLatLng(),e.map.getZoom()+6);break;case"line":case"shape":e.map.fitBounds(o.getBounds());break}o.openPopup()})),c.append(p)}),a.append(c)})}}),r.append(a)};

jQuery("document").ready(function(){var e=jQuery("select#breadcrumb-nav");e.change(function(){document.location.href=jQuery(this).val()});var n=jQuery("#navbarHeader"),r=jQuery("button.navbar-toggler");r.click(function(){n.toggleClass("show")});var a=jQuery("body").first();switch(!0){case a.hasClass("single-waymark_map"):break;case a.hasClass("tax-waymark_collection"):break}});window.map_first_single=function(e){if(!jQuery(".map-first-sidebar").length)return!1;const n=jQuery(".map-first-sidebar").empty();let r=jQuery("<div />").addClass("waymark-overlays waymark-accordion-container");["marker","line","shape"].forEach(a=>{if(typeof e[a+"_sub_groups"]=="object"){const s=Object.keys(e[a+"_sub_groups"]);if(!s.length)return!1;let c=jQuery("<div />").addClass("waymark-type waymark-accordion-group").append(jQuery(`<legend>${a.toUpperCase()}S</legend>`));s.forEach(u=>{const o=e[a+"_sub_groups"][u];if(typeof o!="object"||typeof o.getLayers!="function")return!1;let i=jQuery("<div />").addClass("waymark-group waymark-accordion-group-content").append(e.build_type_heading(a,u));o.getLayers().forEach(t=>{if(typeof t.feature!="object")return;let p=e.get_type(a,t.feature.properties.type),d=e.build_overlay_content(t.feature,a,p);i.append(jQuery("<div />").attr("href","#").css("display","block").html(d).addClass("waymark-overlay-content").on("click",l=>{switch(l.preventDefault(),t.openPopup(),a){case"marker":e.map.setView(t.getLatLng(),e.map.getZoom()+6);break;case"line":case"shape":e.map.fitBounds(t.getBounds());break}})),c.append(i)}),r.append(c)})}}),n.append(r)};

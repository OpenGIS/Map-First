# Map First

## A Minimal Wordpress Theme With An Obsession For Maps

Turn your WordPress site into a Map-First experience to showcase your Geographic data.

Designed for use with [Waymark](https://github.com/OpenGIS/Waymark), Map First is a minimal WordPress theme that demonstrates many of Waymark's features. View the source code to see comments that explain how the theme works, or use it to start building a custom Geographical Information System (GIS) powered by WordPress.

**[View the Demo](https://www.ogis.app/yosemite/)**

![Screenshot of Map First WordPress theme](https://www.ogis.app/yosemite/wp-content/themes/map-first/screenshot.png)

## Features

-  Minimal, responsive design for viewing Maps on screens big and small.
-  Display **all** of your Maps on the homepage.
-  Clicking an Overlay (Marker/Line/Shape) on the homepage provides a link to the [Map Details](https://www.ogis.app/yosemite/map/half-dome/) page (and Collection if applicable).
-  Each [Collection Details](https://www.ogis.app/yosemite/collection/hikes/) page displays a large Map featuring all child Maps, as well as each Map individually.
-  The Map Details page includes an interactive Overlay Sidebar.
-  Organise your site content as regular Pages, a minimal navigation is added to the site header.

> [!IMPORTANT]
> Map First requires the [Waymark WordPress plugin](https://github.com/OpenGIS/Waymark) to be installed and activated.

## Waymark

Waymark is an open-source [WordPress plugin](https://wordpress.org/plugins/waymark/) that allows you to create beautiful, interactive Maps. See the [Getting Started](https://www.waymark.dev/docs/getting-started/) guide for more information on how to create Maps from scratch, or import your existing data.

It has some nice features for customising how Mapping data is integrated with WordPress:

-  Maps can be embedded anywhere using the `[Waymark]` [Shortcode](https://www.waymark.dev/docs/shortcodes/) anywhere Shortcodes are supported.
-  Most elements can be [styled using CSS](https://www.waymark.dev/docs/styling-with-css-selectors/) and have sensibly named `waymark-` classes.
-  Geographical features are stored in the [GeoJSON format](https://geojson.org/).
-  Maps are stored using the [Custom Post Type](https://developer.wordpress.org/plugins/post-types/registering-custom-post-types/) `waymark_map`.
-  Meta is stored as [Custom Fields](https://developer.wordpress.org/plugins/metadata/managing-post-metadata/) (prefixed with `waymark_`).
-  Maps can be grouped using Collections, which use the `waymark_collection` [Taxonomy](https://developer.wordpress.org/plugins/taxonomies/working-with-custom-taxonomies/).
-  Use the [JavaScript callback function](https://www.waymark.dev/docs/callback-function/) to extend Waymark functionality.

## Settings

The following theme settings are available in the Customizer (`Appearance > Customize`):

-  Header Logo Image
-  Header Background Colour
-  Header Text Colour
-  Page Background Colour
-  Page Text Colour
-  Content Link Colour

Custom content can also be added to the site Header and Footer as [Widgets](https://wordpress.org/support/article/wordpress-widgets/) via the Customizer (`Appearance > Customize`).

## Installation

Like any WordPress theme, it can be installed via the WordPress admin or by manually uploading the theme files.

To start, download the [latest release](https://codeload.github.com/morehawes/map-first/zip/refs/heads/master).

### WordPress Admin

1. In your WordPress admin, go to `Appearance > Themes`.
2. Click `Add New`.
3. Click `Upload Theme`.
4. Upload the `map-first.zip` file you downloaded.
5. Click `Install Now`.
6. Click `Activate`.

### Manual

1. Unzip the `map-first.zip` file you downloaded
2. Upload the `map-first` folder to your `wp-content/themes` directory.
   -  You can use FTP, or your hosting provider's file manager.
3. In your WordPress admin, go to `Appearance > Themes`.
4. Click `Activate`.

## Extending Map First

WordPress theme (`.php`) files are located in the directory root, these contain comments to help you understand what's going on and where to make changes. If you're new to WordPress theme development, check out the [WordPress Theme Handbook](https://developer.wordpress.org/themes/).

I recommend creating a child theme to make any changes, this will ensure your changes are not overwritten when the theme is updated.

You can create a child theme by creating a new directory in `wp-content/themes/` and adding a `style.css` file with the following content:

```css
/*
Theme Name: Map First Child
Template: map-first
*/
```

You can then activate your child theme in the WordPress admin (`Appearance > Themes`). Copy any of the theme files from the parent theme into your child theme directory, and make changes as needed.

Feel free to use the [Feedback Form](https://forms.gle/mthqAgSsMoTPM8SR9) to share how you've used Map First, or to suggest improvements.

## Development

If you would like to contribute to the development of the theme, please feel free to fork the repository and submit a pull request. Please provide a detailed description of the changes you've made, and why you think they should be included. Alternatively, you can [open an issue](https://github.com/OpenGIS/Waymark/issues) to discuss your idea.

Edits made to the assets in the `src/` directory (JavaScript, LESS, etc) will need to be compiled before they can be used. To do this, you'll need to install the dependencies and run the build script ([Vite](https://vitejs.dev/) is awesome!):

```sh
# Or npm/yarn install
pnpm install
pnpm run build
```

All PRs welcome!

## Changelog

### 1.0.0

-  Initial release

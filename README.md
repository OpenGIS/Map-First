# Map First

A minimal WordPress theme with an obsession for Maps.

## Description

> [!IMPORTANT]
> Map First requires the [Waymark WordPress plugin](https://github.com/OpenGIS/Waymark) to be installed and activated.

<!-- TODO: Write a description of the theme -->

### Features

<!-- TODO: List theme features -->

## Screenshots

<!-- TODO: Add screenshot of theme -->

## Installation

Like any WordPress theme, it can be installed via the WordPress admin or by manually uploading the theme files.

To start, download the [latest release](https://codeload.github.com/morehawes/map-first/zip/refs/heads/master).

### WordPress Admin

1. In your WordPress admin, go to `Appearance > Themes`.
2. Click `Add New`.
3. Click `Upload Theme`.
4. Upload the `map-first.zip` file you downloaded
5. Click `Install Now`.
6. Click `Activate`.

### Manual

1. Unzip the `map-first.zip` file you downloaded
2. Upload the `map-first` folder to your `wp-content/themes` directory.
   -  You can use FTP, or your hosting provider's file manager.
3. In your WordPress admin, go to `Appearance > Themes`.
4. Click `Activate`.

## Usage

See the [Waymark Documentation](https://www.waymark.dev/docs/) for more information.

### Customization

## Frequently Asked Questions

## Development

The theme files contain comments to help you understand what's going on and where to make changes. If you're new to WordPress theme development, check out the [WordPress Theme Handbook](https://developer.wordpress.org/themes/).

WordPress theme (`.php`) files are located in the directory root.

Production theme assets (`.css` and `.js`) are located in the `dist` directory. Source theme assets are located in the `src` directory, to rebuild the theme assets, you'll need to install the dependencies and run the build script, which will watch for changes in the `src` directory and rebuild the theme assets.

```sh
# Or npm/yarn install
pnpm install
pnpm run build
```

The build script uses the watch flag, so it will continue to run and watch for changes.

Pull requests welcome!

## Changelog

### 1.0.0

-  Initial release

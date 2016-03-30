<?php
/*
  Plugin Name: WP AppKit Last Read Addon
  Description: Add last read post list management module to WP AppKit plugin
  Version: 0.1
 */

if ( !class_exists( 'WpAppKitLastRead' ) ) {

    class WpAppKitLastRead {

        const slug = 'wpak-addon-lastread';

        public static function hooks() {
            add_filter( 'wpak_addons', array( __CLASS__, 'wpak_addons' ) );

            // 11 to pass after WP-AppKit components declaration
            add_action( 'plugins_loaded', array( __CLASS__, 'plugins_loaded' ), 11 );
        }

        public static function wpak_addons( $addons ) {
            $addon = new WpakAddon( 'WP AppKit Last Read', self::slug );

            $addon->set_location( __FILE__ );

            $addon->add_js( 'js/wpak-lastread.js', 'module' );
            $addon->add_js( 'js/model.js', 'module' );
            $addon->add_js( 'js/view.js', 'module' );
            $addon->add_js( 'js/wpak-lastread-app.js', 'theme', 'before' );

            $addons[] = $addon;

            return $addons;
        }

        public static function plugins_loaded() {
            require_once dirname( __FILE__ ) . '/component-type.php';
        }

    }

    WpAppKitLastRead::hooks();
}
define(function (require) {

    "use strict";

    var _                   = require( 'underscore' ),
        App                 = require( 'core/app' ),
        Utils               = require( 'core/app-utils' ),
        LastRead           = require( 'addons/wpak-addon-lastread/js/model' );

    var wpak_lastread = {};

    wpak_lastread.lastread = new LastRead;

    /**
     * Add a post to the favorites list.
     * Refresh the current view in order to reflect this addition (the link/button should be updated).
     *
     * @param   int         id              The post id.
     * @param   callable    callback        The callback to call after favorite has been added.
     * @param   string      default_global  The default value to use as global key for this post id.
     */
    wpak_lastread.addToLastRead = function( id, callback, default_global ) {
        var item_global = App.getPostGlobal( id, default_global );
        var item = App.getGlobalItem( item_global, id );
        var saved = false;

        if( null !== item ) {
            wpak_lastread.favorites.add( _.extend( { global: item_global }, item ) );
            wpak_lastread.favorites.saveAll();
            saved = true;
        }

        if( undefined !== callback ) {
            callback( saved, id );
        }
    };

    /**
     * Remove a post from the favorites list.
     * Refresh the current view in order to reflect this removal (the link/button should be updated).
     *
     * @param   int     id              The post id.
     */
    wpak_lastread.removeFromFavorites = function( id, callback ) {
        var item = App.getGlobalItem( App.getPostGlobal( id ), id );
        var saved = false;

        if( null !== item ) {
            wpak_lastread.favorites.remove( item );
            wpak_lastread.favorites.saveAll();
            saved = true;
        }

        if( undefined !== callback ) {
            callback( saved, id );
        }
    };

    /**
     * Reset the list of favorites.
     */
    wpak_lastread.resetFavorites = function( callback ) {
        wpak_lastread.favorites.resetAll();

        if( undefined !== callback ) {
            callback();
        }
    };

    /**
     * Return true or false whether the post is in the favorites list or not.
     *
     * @param   int     post_id     The post id.
     * @return  bool    isFavorite  The HTML for the button.
     */
    wpak_lastread.isFavorite = function( post_id ) {
        var isFavorite = false;

        if( undefined !== post_id ) {
            isFavorite = undefined !== wpak_lastread.favorites.get( post_id );
        }

        return isFavorite;
    };

    /**
     * Add favorite posts objects to the core's global var.
     * This ensures that an user still can see a single post that has been removed from the sync webservice.
     */
    wpak_lastread.addFavoritesToGlobals = function() {
        _.each( wpak_lastread.favorites.toJSON(), function( item, index ) {
            App.addGlobalItem( item.global, item );
        });

        Utils.log( 'Favorites added to globals', { globals: App.globals } );
    };

    return wpak_lastread;
});
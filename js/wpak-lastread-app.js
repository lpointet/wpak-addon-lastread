define( [ 'core/theme-app', 'core/app-utils', 'addons/wpak-addon-lastread/js/wpak-lastread' ], function( App, Utils, WpakLastRead ) {

    // App.filter( 'component-data', function( component_data, component ) {
    //     var component_type = component.get( 'type' );

    //     if( 'favorites' === component_type ) {
    //         var data = component.get('data');

    //         component_data = {
    //               type: component_type,
    //               view_data: { posts: WpakFavorites.favorites, title: component.get( 'label' ), total: WpakFavorites.favorites.length },
    //               data: data
    //         };
    //     }

    //     return component_data;
    // });

    // App.filter( 'template-args', function( template_args ) {
    //     template_args.WpakFavorites = WpakFavorites;

    //     return template_args;
    // });

    // App.filter( 'component-custom-type', function( screen_view_data, component ) {
    //     if( 'favorites' === component.type ) {
    //         screen_view_data = {
    //             view_type: 'favorites',
    //             view_data: component.view_data,
    //             screen_data: { screen_type: 'list', component_id: component.id, item_id: 0, global: component.global, data: component.data, label: component.label }
    //         };
    //     }

    //     return screen_view_data;
    // });

    // App.filter( 'custom-view', function( customView, view_type ) {
    //     if( 'favorites' === view_type ) {
    //         customView = 'addons/wpak-addon-favorites/js/view';
    //     }

    //     return customView;
    // });

    // App.filter( 'post-global', function( global, id ) {
    //     // If global isn't returned by app.getCurrentScreenGlobal, it could be in favorites list
    //     if( '' == global ) {
    //         var post = WpakFavorites.favorites.get( id );
    //         if( undefined !== post ) {
    //             global = post.get( 'global' );
    //         }
    //     }

    //     return global;
    // });

    // App.action( 'components-fetched', function( components, response, options, deferred ) {
    //     WpakFavorites.favorites.fetch({
    //         'success': function( appFavorites, response, options ) {
    //             Utils.log( 'Favorites retrieved from local storage.', { favorites: appFavorites } );
    //             deferred.resolve();
    //         },
    //         'error': function( appFavorites, response, options ) {
    //             Utils.log( 'Error occured while retrieving favorites.', { favorites: appFavorites } );
    //             deferred.resolve();
    //         }}
    //     );
    // });

    // App.on( 'refresh:end', WpakFavorites.addFavoritesToGlobals );

    App.on( 'screen:showed', function( current_screen, current_view ) {
        if( current_screen.screen_type == 'single' ) {

        }
    });

});
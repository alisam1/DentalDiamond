jQuery(function($) {
				function generatePages() {
					var _total, i, _link;

					_total = $( "#carousel--mobile" ).rcarousel( "getTotalPages" );

					for ( i = 0; i < _total; i++ ) {
						_link = $( "<a href=''></a>" );

						$(_link)
							.bind("click", {page: i},
								function( event ) {
									$( "#carousel--mobile" ).rcarousel( "goToPage", event.data.page );
									event.preventDefault();
								}
							)
							.addClass( "bullet off" )
							.appendTo( "#pages-mobile" );
					}

					// mark first page as active
					$( "a:eq(0)", "#pages-mobile" )
						.removeClass( "off" )
						.addClass( "on" )
						.css( "background-image",  "url(img/icon_dotCurrent.svg)" );

				}

				function pageLoaded( event, data ) {
					$( "a.on", "#pages-mobile" )
						.removeClass( "on" )
						.css( "background-image", "url(img/icon_dot.svg)" );

					$( "a", "#pages-mobile" )
						.eq( data.page )
						.addClass( "on" )
						.css( "background-image", "url(img/icon_dotCurrent.svg)" );
				}

				$("#carousel--mobile").rcarousel(
					{
						visible: 1,
						step: 1,
						speed: 700,
						auto: {
							enabled: false
						},
						width: 320,
						height: 400,
						start: generatePages,
						pageLoaded: pageLoaded
					}
				);

				$( "#ui-carousel-next--mobile" )
					.add( "#ui-carousel-prev--mobile" )
					.add( ".bullet" )
					.hover(
						function() {
							$( this ).css( "opacity", 0.7 );
						},
						function() {
							$( this ).css( "opacity", 1.0 );
						}
					);
			});

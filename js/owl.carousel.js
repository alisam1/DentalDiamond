jQuery(function($) {
				function generatePages() {
					var _total, i, _link;

					_total = $( "#carousel" ).rcarousel( "getTotalPages" );

					for ( i = 0; i < _total; i++ ) {
						_link = $( "<a href=''></a>" );

						$(_link)
							.bind("click", {page: i},
								function( event ) {
									$( "#carousel" ).rcarousel( "goToPage", event.data.page );
									event.preventDefault();
								}
							)
							.addClass( "bullet off" )
							.appendTo( "#pages" );
					}

					// mark first page as active
					$( "a:eq(0)", "#pages" )
						.removeClass( "off" )
						.addClass( "on" )
						.css( "background-image",  "url(img/icon_dotCurrent.svg)" );

				}

				function pageLoaded( event, data ) {
					$( "a.on", "#pages" )
						.removeClass( "on" )
						.css( "background-image", "url(img/icon_dot.svg)" );

					$( "a", "#pages" )
						.eq( data.page )
						.addClass( "on" )
						.css( "background-image", "url(img/icon_dotCurrent.svg)" );
				}

				$("#carousel").rcarousel(
					{
						visible: 1,
						step: 1,
						speed: 800,
						auto: {
							enabled: false
						},
						width: 1200,
						height: 261,
						start: generatePages,
						pageLoaded: pageLoaded
					}
				);

				$( "#ui-carousel-next" )
					.add( "#ui-carousel-prev" )
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

jQuery(function($) {
				function generatePages() {
					var _total, i, _link;

					_total = $( "#carousel" ).rcarousel( "getTotalPages" );

					for ( i = 0; i < _total; i++ ) {
						_link = $( "<div></div>" );

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
					$( "div:eq(0)", "#pages" )
						.removeClass( "off" )
						.addClass( "on" )
						.css( "background-image", "url(../img/icon_dotCurrent.sv)" );

				}

				function pageLoaded( event, data ) {
					$( "div.on", "#pages" )
						.removeClass( "on" )
						.css( "background-image", "url(../img/icon_dot.svg)" );

					$( "div", "#pages" )
						.eq( data.page )
						.addClass( "on" )
						.css( "background-image", "url(../img/icon_dotCurrent.svg)" );
				}

				$("#carousel").rcarousel(
					{
						visible: 1,
						step: 1,
						speed: 700,
						auto: {
							enabled: true
						},
						width: 1170,
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

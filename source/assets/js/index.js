

// Give Modernizr.load a string, an object or an arry of strings and objects
Modernizr.load([
	{
		load: '//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js',
		complete: function() {
			if (!window.jQuery) {
				Modernizr.load('assets/js/vendor/jquery-1.8.0.min.js');
			}
		}
	},
	{
		test: Modernizr.mq('only all'),
		nope: 'assets/js/vendor/polyfills/respond.min.js'
	}, 
	{
		test: Modernizr.input.placeholder,
		nope: 'assets/js/vendor/polyfills/jquery.placeholder.js',
		callback: function() {
			$('input[placeholder], textarea[placeholder]').placeholder();
		}
	},
	{
		test: Modernizr.borderradius,
		nope: 'assets/js/vendor/polyfills/PIE_IE678.js',
		callback: function() {
			// Add class to the element that needs border styling 
			$().addClass('pie');
			if (window.PIE) {
				$('.pie').each(function() {
					PIE.attach(this);
				});
			}
		}
	},
	{
		test: window.matchMedia,
		nope: [
				'assets/js/vendor/polyfills/matchMedia.js', 
				'assets/js/vendor/polyfills/matchMedia.addListener.js'
		]
	},

	'assets/js/main.js'
]);
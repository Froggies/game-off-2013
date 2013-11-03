var game = (function() {

	var fps = 50;
	var nbLoop = 0;
	var timeout;

	function start() {
		
		resume();
	}

	function pause() {
		window.clearInterval(timeout);
	}

	function resume() {
		timeout = window.setInterval(function() {
			nbLoop = nbLoop + 1;
		}, fps);
	}


	return {

		/****************************/
		/****** MAIN FUNCTIONS ******/
		/****************************/

		/**
		 * Start the game, it's the main loop 
		 **/
		start: function() {
			start();
		},
		/**
		 * Stop the main loop, call resume to restart it
		 **/
		pause: function() {
			pause();
		},
		/**
		 * Must be call after pause, else it does nothing
		 **/
		resume: function() {
			resume();
		},

		/****************************/
		/****** GET  FUNCTIONS ******/
		/****************************/

		getFps: function() {
			return fps;
		},
		getNbLoop: function() {
			return nbLoop;
		},
		getBacklog: function() {
			return {};
		}

	}

})();


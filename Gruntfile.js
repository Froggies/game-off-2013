module.exports = function ( grunt ) {
  
  
  var gruntConfig = require( './config/gruntConfig.js' );

  
  var taskConfig = {
  };

  grunt.initConfig( grunt.util._.extend( taskConfig, gruntConfig ) );

  grunt.registerTask( 'default', [  ] );


};

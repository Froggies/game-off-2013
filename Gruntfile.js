module.exports = function ( grunt ) {
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  var gruntConfig = require( './config/gruntConfig.js' );

  var taskConfig = {

    pkg: grunt.file.readJSON("package.json"),
    meta: {
      banner: 
        '/**\n' +
        ' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' *\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
        ' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
        ' */\n'
    },

    clean: [ 
      '<%= build_dir %>', 
      '<%= compile_dir %>'
    ],

    copy: {
      build: {
        files: [
          {
            src: [ '<%= app_files.js %>','<%= vendor_files.js %>', '<%= app_files.assets %>', '<%= app_files.stylesheet %>' ],
            dest: '<%= build_dir %>/',
            cwd: '.',
            expand: true
          }
        ]
      },
      compile: {
        files: [
          {
            src: [ '**' ],
            dest: '<%= compile_dir %>/assets',
            cwd: '<%= build_dir %>/assets',
            expand: true
          }
        ]
      }
    },

    concat: {
      compile_js: {
        options: {
          banner: '<%= meta.banner %>'
        },
        src: [ 
          '<%= vendor_files.js %>', 
          '<%= build_dir %>/app/src//**/*.js'   
        ],
        dest: '<%= compile_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.js'
      }
    },

    recess: {
      build: {
        src: [ '<%= app_files.less %>' ],
        dest: '<%= build_dir %>/assets/<%= pkg.name %>-<%= pkg.version %>.css',
        options: {
          compile: true,
          compress: false,
          noUnderscores: false,
          noIDs: false,
          zeroUnits: false
        }
      },
      compile: {
        src: [ '<%= recess.build.dest %>' ],
        dest: '<%= recess.build.dest %>',
        options: {
          compile: true,
          compress: true,
          noUnderscores: false,
          noIDs: false,
          zeroUnits: false
        }
      },
    },

    uglify: {
      compile: {
        options: {
          banner: '<%= meta.banner %>'
        },
        files: {
          '<%= concat.compile_js.dest %>': '<%= concat.compile_js.dest %>'
        }
      }
    },

    index: {
      build: {
        dir: '<%= build_dir %>',
        src: [
          '<%= vendor_files.js %>',
          '<%= build_dir %>/app/src/**/*.js',
          '<%= build_dir %>/app/stylesheet/**/*.less',
        ]
      }
    }

  };

  grunt.initConfig( grunt.util._.extend( taskConfig, gruntConfig ) );

  grunt.registerTask( 'build', [ 'clean', 'copy:build', 'index:build'] );

  grunt.registerTask( 'default', [ 'build'] );


  function filterForJS ( files ) {
    return files.filter( function ( file ) {
      return file.match( /\.js$/ );
    });
  }

  function filterForLESS ( files ) {
    return files.filter( function ( file ) {
      return file.match( /\.less$/ );
    });
  }

  grunt.registerMultiTask( 'index', 'Process index.html template', function () {
    var dirRE = new RegExp( '^('+grunt.config('build_dir')+'|'+grunt.config('compile_dir')+')\/', 'g' );
    
    var jsFiles = filterForJS( this.filesSrc ).map( function ( file ) {
      return file.replace( dirRE, '' );
    });

    var lessFiles = filterForLESS( this.filesSrc ).map( function ( file ) {
      return file.replace( dirRE, '' );
    });

    grunt.file.copy('app/index.html', this.data.dir + '/index.html', { 
      process: function ( contents, path ) {
        return grunt.template.process( contents, {
          data: {
            scripts: jsFiles,
            styles: lessFiles,
            version: grunt.config( 'pkg.version' )
          }
        });
      }
    });
  });

};

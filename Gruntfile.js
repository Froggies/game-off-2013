module.exports = function ( grunt ) {
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');  
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

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
            src: [ '**/*' ],
            dest: '<%= compile_dir %>/assets',
            cwd: '<%= build_dir %>/app/assets',
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
          '<%= build_dir %>/app/src/**/*.js'   
        ],
        dest: '<%= compile_dir %>/<%= pkg.name %>-<%= pkg.version %>.js'
      }
    },

    recess: {
      compile: {
        src: [ '<%= app_files.less %>' ],
        dest: '<%= compile_dir %>/<%= pkg.name %>-<%= pkg.version %>.css',
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
        dir: '<%= build_dir %>/app',
        src: [
          '<%= build_dir %>/<%= vendor_files.js %>',
          '<%= build_dir %>/app/src/**/*.js',
          '<%= build_dir %>/app/stylesheet/**/*.less',
        ]
      },
      compile: {
        dir: '<%= compile_dir %>',
        src: [
          '<%= concat.compile_js.dest %>',
          '<%= vendor_files.css %>',
          '<%= recess.compile.dest %>'
        ]
      }
    },

    watch: {
      files: [ '<%= app_files.js %>','<%= test_files.js %>','<%= vendor_files.js %>', '<%= app_files.assets %>', '<%= app_files.stylesheet %>', '<%= app_files.html %>' ],
      tasks: ['build']
    },

    karmaconfig: {
      unit: {
        dir: '<%= build_dir %>',
        src: [ 
          '<%= vendor_files.js %>',
          'app/src/**/*.js',
          '<%= test_files.js %>'
        ]
      }
    },

    karma: {
      options: {
        configFile: '<%= build_dir %>/karma.conf.js'
      },
      unit: {
        runnerPort: 9101,
        background: true
      },
      continuous: {
        singleRun: true
      }
    },

  };

  grunt.initConfig( grunt.util._.extend( taskConfig, gruntConfig ) );

  grunt.registerTask( 'build', [ 'clean', 'copy:build', 'index:build', 'karmaconfig', 'karma:continuous'] );
  
  grunt.registerTask( 'compile', [ 'build', 'recess:compile', 'concat:compile_js', 'uglify:compile', 'copy:compile', 'index:compile'] );

  grunt.registerTask( 'dev', [ 'watch'] );

  grunt.registerTask( 'default', [ 'build'] );


  function filterForJS ( files ) {
    return files.filter( function ( file ) {
      return file.match( /\.js$/ );
    });
  }

  function filterForJSWithoutTest ( files ) {
    return files.filter( function ( file ) {
      return !file.match( /test\.js$/ );
    });
  }

  function filterForLESS ( files ) {
    return files.filter( function ( file ) {
      return file.match( /\.less$/ ) || file.match( /\.css$/ );
    });
  }

  function filterForTestFiles ( files ) {
    return files.filter( function ( file ) {
      return file.match( /.*.test\.js$/ ) || file.match( /.*.spec\.js$/ );
    });
  }

  grunt.registerMultiTask( 'index', 'Process index.html template', function () {
    var dirRE = new RegExp( '^('+this.data.dir+')\/', 'g' );
    
    var jsFiles = filterForJS( this.filesSrc ).map( function ( file ) {
      return file.replace( dirRE, '' );
    });

    var lessFiles = filterForLESS( this.filesSrc ).map( function ( file ) {
      return file.replace( dirRE, '' );
    });

    grunt.file.copy('app/index.tpl.html', this.data.dir + '/index.html', { 
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

  grunt.registerMultiTask( 'karmaconfig', 'Process karma config templates', function () {
    var jsFiles = filterForJSWithoutTest( this.filesSrc );
    
    var testsFiles = filterForTestFiles(this.filesSrc).map(function(file) {
        return "../" + file;
    });

    grunt.file.copy( 'config/karma.conf.tpl.js', grunt.config( 'build_dir' ) + '/karma.conf.js', { 
      process: function ( contents, path ) {
        return grunt.template.process( contents, {
          data: {
            vendorsScripts: jsFiles,
            testsScripts: testsFiles
          }
        });
      }
    });
  });

};

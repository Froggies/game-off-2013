module.exports = {
  
  build_dir: 'build',
  compile_dir: 'bin',

  
  app_files: {
    first: [ 
      '<%= build_dir %>/app/src/util/ObjectUtil.js',
      '<%= build_dir %>/app/src/controller/AbstractController.js',
      '<%= build_dir %>/app/src/view/AbstractView.js'
    ],
    js: [ 'app/src/**/*.js' ],
    html: [ 'app/index.tpl.html' ],
    stylesheet: ['app/stylesheet/**/*.less'],
    assets: ['app/assets/**/*'],
    less: 'app/stylesheet/main.less',
  },

  test_files: {
    js: [
      'test/**/*.js'
    ]
  },

  vendor_files: {
    js: [
      'app/vendor/underscore/underscore.js',
      'app/vendor/js-base64/base64.js'
    ],
    css: [
    ],
    assets: [
    ]
  },
};

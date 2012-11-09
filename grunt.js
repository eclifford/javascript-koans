module.exports = function( grunt ) {

  // Towelie Tasks
  grunt.registerTask('build', 'clean:dist coffee compass copy:dist requirejs:js requirejs:css');
  grunt.registerTask('default', 'clean:temp coffee compass connect open-browser watch');
  grunt.registerTask('test', 'clean:temp coffee compass testem');

  //
  // Grunt configuration:
  //
  // https://github.com/cowboy/grunt/blob/master/docs/getting_started.md
  //
  grunt.initConfig({
    //
    // towelie configuration
    // setup towelie configuration to be used by grunt tasks below
    //
    towelie: {
      paths: {
        staging: "temp",
        production: "dist",
        dev: "app",
        test: "test"
      },
      server: {
        hostname: "localhost",
        port: "3501"
      }
    },
    //
    // grunt-contrib-connect
    // http://github.com/gruntjs/grunt-contrib-connect
    //
    connect: {
      port: '<config:towelie.server.port>',
      hostname: '<config:towelie.server.hostname>',
      dev: '<config:towelie.paths.dev>',
      staging: '<config:towelie.paths.staging>',
      middleware: function(connect, options) {
        return [
          connect.static(options.dev),
          connect.static(options.staging),
          connect.directory(options.dev)
        ];
      }
    },
    //
    // grunt-watch
    //
    watch: {
      
      coffee: {
        files: '<%= towelie.paths.dev %>/scripts/**/*.coffee',
        tasks: 'coffee:app'
      },
      
      
      compass: {
        files: [
          '<%= towelie.paths.dev %>/styles/**/*.{scss,sass}'
        ],
        tasks: 'compass:dev'
      },
      
      
      tests: {
        files: [
          '<%= towelie.paths.test %>/specs/**/*.coffee'
        ],
        tasks: 'coffee:tests'
      }
      
    },
    
    //
    // grunt-contrib-coffee
    // https://github.com/gruntjs/grunt-contrib-coffee/
    //
    coffee: {
      app: {
        files: {
          '<%= towelie.paths.staging %>/scripts/*.js': '<%= towelie.paths.dev %>/scripts/**/*.coffee'
        },
        options: {
          basePath: '<%= towelie.paths.dev %>/scripts'
        }
      },
      tests: {
        files: {
          '<%= towelie.paths.staging %>/specs/*.js': '<%= towelie.paths.test %>/specs/**/*.coffee'
        },
        options: {
          basePath: '<%= towelie.paths.test %>/specs'
        }
      }
    },
    
    
    //
    // grunt-compass
    // https://github.com/kahlil/grunt-compass
    //
    compass: {
      dev: {
        src: '<%= towelie.paths.dev %>/styles',
        dest: '<%= towelie.paths.staging %>/styles',
        linecomments: true,
        forcecompile: true,
        require: [
        ],
        debugsass: true,
        images: '<%= towelie.paths.dev %>/images',
        relativeassets: true
      }
    },
    
    //
    // grunt-testem
    // https://github.com/sideroad/grunt-testem
    //
    testem: { 
      options: {
        files: [
          "test/index.html"
        ],
        routes: {
          "/scripts/vendor": "app/scripts/vendor",
          "/scripts": "temp/scripts",
          "/styles": "temp/styles",
          "/specs": "temp/specs",
          "/templates": "app/templates"
        },
        launch_in_ci: [
          "phantomjs"
        ],
        launch_in_dev: [
          "chrome"
        ],
        src_files: [
          "app/templates/**/*.tmpl",
          "temp/scripts/**/*.js",
          "test/specs/**/*.coffee"
        ]
      }
    },
    
    //
    // grunt-contrib-requirejs
    // https://github.com/gruntjs/grunt-contrib-requirejs
    //
    requirejs: {
      js: {
        options: {
          optimize: 'none',
          baseUrl: './',
          wrap: true,
          name: 'scripts/main',
          out: '../<%= towelie.paths.production %>/scripts/app.js',
          mainConfigFile: 'scripts/main.js'
        }
      },
      css: {
        options: {
          baseUrl: './',
          cssIn: "styles/main.css",
          out: "../<%= towelie.paths.production %>/styles/app.css"
        }
      }
    },
    
    //
    // grunt-contrib-copy
    // https://github.com/gruntjs/grunt-contrib-copy
    //
    copy: {
      dist: {
        files: {
          "<%= towelie.paths.production %>/templates/": "<%= towelie.paths.dev %>/templates/**",
          "<%= towelie.paths.production %>/images/": "<%= towelie.paths.dev %>/images/**",
          "<%= towelie.paths.production %>/data/": "<%= towelie.paths.dev %>/data/**",
          "<%= towelie.paths.production %>/": "<%= towelie.paths.dev %>/*"
        }
      }
    },
    //
    // grunt-contrib-clean
    // https://github.com/gruntjs/grunt-contrib-clean
    //
    clean: {
      temp: ['<%= towelie.paths.staging %>/'],
      dist: ['<%= towelie.paths.production %>/']
    }
  });
};

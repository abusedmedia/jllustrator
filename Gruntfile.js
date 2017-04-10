/*
 * jllustrator
 * https://github.com/abusedmedia/jllustrator
 *
 * Copyright (c) 2017 abusedmedia
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      dist:{
        options: {
          compress: {
            drop_console: true
          }
        },
        files: {
          'dist/jllustrator.min.js': ['src/*.js']
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify:dist']);

};

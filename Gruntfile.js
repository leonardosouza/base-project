module.exports = function (grunt) {
    'use strict';

    // Load the plugin that provides the tasks.
    require('time-grunt')(grunt);

    require('matchdep')
        .filterDev('grunt-*', 'package.json')
        .forEach(grunt.loadNpmTasks);
  
    // Load configs
    require('load-grunt-config')(grunt);

    // register tasks
    grunt
        .registerTask('default', ['sass', 'clean:js', 'copy', "jshint", 'jslint', 'uglify', 'notify:default'])
        .registerTask('w', ['watch'])
        .registerTask('img', ['imagemin']);
};
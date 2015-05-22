module.exports = {
    dist: {
      options: {
        outputStyle: 'compressed'
      },
      files: [{
        expand: true,
        cwd: '<%= project.app %>/css',
        src: ['*.scss'],
        dest: '<%= project.dist %>/css',
        ext: '.css'
      }]
    }
};
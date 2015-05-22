module.exports = {
  dist: {
  	options: {
  		report: 'gzip'
  	},
    files: [{
      expand: true,
      cwd: '<%= project.dist %>/css/',
      src: ['*.min.css'],
      dest: '<%= project.dist %>/css/',
      ext: '.min.css'
    }]
  }
};
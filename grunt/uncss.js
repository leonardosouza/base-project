module.exports = {
  options: {
    report: 'gzip'
  },
  index: { files: [ { src: 'index.html', dest: 'assets/dist/css/main.min.css' } ] },
  teste: { files: [ { src: 'teste.html', dest: 'assets/dist/css/teste.min.css' } ] }
};
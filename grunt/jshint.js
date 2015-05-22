module.exports = {
    test: {
        options: {
            force: false,
            reporter: require('jshint-stylish'),
            quotmark: 'single',
            /*nonbsp: true,*/
            latedef: true,
            /*camelcase: true,*/
            freeze: true,
            immed: true,
            /*strict: true,*/
            /*maxparams: 3,*/
            /*maxlen: 80,*/
            '-W018': true
        },
        src: ['<%= project.app %>/js/modules/*.js']
    }
}
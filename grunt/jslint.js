module.exports =  {
    test: {
        src: [ '<%= project.app %>/js/**/*.js' ],
        exclude: [ 
            '<%= project.app %>/js/shared/**/*.js',
            '<%= project.app %>/js/plugins/**/*.js',
            '<%= project.app %>/js/libs/**/*.js',
            '<%= project.app %>/js/vendor/**/*.js'
        ],
        directives: {
            indent: 4,
            bitwise: false,
            browser: true,
            closure: false,
            continue: false,
            couch: false,
            debug: false,
            devel: true,
            eqeq: false,
            evil: false,
            forin: false,
            newcap: false,
            passfail: false,
            plusplus: true,
            regexp: true,
            sloppy: true,
            stupid: false,
            unparam: false,
            vars: false,
            white: true,
            nomen: false,
            predef: [
                '$',
                'jQuery',
                'self',
                'ga'
            ]
        }
    }
};
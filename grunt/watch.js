module.exports = {
    "sass": {
        "files": [
            "<%= project.app %>/css/**/*",
            "<%= project.app %>/img/**/*"
        ],
        "tasks": [
            "clean:css",
            "sass"
        ]
    },
    "js": {
        "files": [
            "<%= project.app %>/js/**/*",
            "<%= project.test %>/js/**/*"
        ],
        "tasks": [            
            "clean:js",
            "copy:js",
            "jshint",
            "jslint",
            "uglify"
        ]
    },
    "imagemin": {
        "files": [
            "<%= project.app %>/img/**/*"
        ],
        "tasks": [
            "clean:img",
            "imagemin"
        ]
    },
    "fonts": {
        "files": [
            "<%= project.app %>/fonts/**/*"
        ],
        "tasks": [
            "clean:fonts",
            "copy:fonts"
        ]
    }
};
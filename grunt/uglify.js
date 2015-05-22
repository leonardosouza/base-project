module.exports = {
    "options": {
        "report": "gzip",
        "preserveComments": false,
        "beautify": false
    },
    "dist": {
        "files": [
            {
                "expand": true,
                "cwd": "<%= project.app %>/js/modules",
                "src": "**/*.js",
                "dest": "<%= project.dist %>/js/modules"
            }
        ]
    }
};
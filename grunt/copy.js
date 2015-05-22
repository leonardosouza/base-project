module.exports = {
    "fonts": {
        "expand": true,
        "cwd": "<%= project.app %>/fonts",
        "src": "**",
        "dest": "<%= project.dist %>/fonts"
    },
    "swf": {
        "expand": true,
        "cwd": "<%= project.app %>/swf",
        "src": "**",
        "dest": "<%= project.dist %>/swf"
    },
    "js": {
        "expand": true,
        "cwd": "<%= project.app %>/js",
        "src": "**",
        "dest": "<%= project.dist %>/js"
    }
};
module.exports = {
    "dynamic": {
        "options": {
            "optimizationLevel": 4,
            "pngquant": true,
            "progressive": true
        },
        "files": [
            {
                "expand": true,
                "cwd": "<%= project.app %>/img/",
                "src": [
                    "**/*.{png,jpg,gif}"
                ],
                "dest": "<%= project.dist %>/img/"
            }
        ]
    }
};
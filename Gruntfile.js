module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['sass/main.scss'],
                tasks: ['compass'],
                options: {
                    livereload: true,
                },
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '*.html',
                    'images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            },
        },
        compass: {
            dist: {
                options: {              // Target options
                    sassDir: 'sass',
                    cssDir: 'css',
                    environment: 'development'
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: 'http://meanday.local:9000',
                }
            }
        },

        //TODO copy files in dist folder
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('serve', [
        'connect',
        'watch'
    ]);
};
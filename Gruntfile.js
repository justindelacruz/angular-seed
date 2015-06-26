"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            dist: {
                options: {
                    specify: 'src/sass/app.scss'
                }
            }
        },

        html2js: {
            options: {
                base: '/',
                module: 'app.templates',
                singleModule: true,
                useStrict: true,
                htmlmin: {
                    caseSensitive: true,
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    preserveLineBreaks: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            dist: {
                src: [ 'src/app/**/*.tpl.html' ],
                dest: 'src/js/templates.js'
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            // Compile modules before everything else
            jsCore: {
                src: [
                    'src/app/**/*.js',
                    'src/js/templates.js',
                    '!src/app/**/*.module.js',
                    '!src/app/**/*.spec.js' // don't compile tests
                ],
                dest: 'tmp/jsCore.js'
            },
            jsApp: {
                src: [
                    'src/app/**/*.module.js',
                    'tmp/**/*.js'
                ],
                dest: 'src/js/app.js'
            }
        },

        clean: {
            temp: {
                src: [ 'tmp' ]
            }
        },

        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            unit: {
                singleRun: true,
                browsers: ['PhantomJS']
            },

            continuous: {
                singleRun: false,
                autoWatch: true
            }
        },

        uglify: {
            dist: {
                files: {
                    'src/js/app.js': [ 'src/js/app.js' ]
                },
                options: {
                    mangle: true
                }
            }
        },

        watch: {
            dev: {
                files: [ 'Gruntfile.js', 'src/app/**/*.js', 'src/app/**/*.tpl.html', 'src/sass/**/*.scss' ],
                tasks: [ 'karma:unit', 'compass', 'html2js:dist', 'concat:jsCore', 'concat:jsApp', 'clean:temp' ],
                options: {
                    atBegin: true
                }
            },
            minified: {
                files: [ 'Gruntfile.js', 'src/app/**/*.js', 'src/app/**/*.tpl.html', 'src/sass/**/*.scss' ],
                tasks: [ 'karma:unit', 'compass', 'html2js:dist', 'concat:jsCore', 'concat:jsApp', 'clean:temp', 'karma:unit', 'uglify:dist' ],
                options: {
                    atBegin: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('dev', [ 'watch:dev' ]);
    grunt.registerTask('test', [ 'karma:continuous' ]);
    grunt.registerTask('minified', [ 'watch:minified' ]);
};

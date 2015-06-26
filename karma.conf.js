module.exports = function(config){
    config.set({

        basePath : './',

        files : [
            'src/bower_components/angular/angular.js',
            'src/bower_components/angular-route/angular-route.js',
            'src/bower_components/angular-mocks/angular-mocks.js',
            'src/app/**/*.module.js',
            'src/js/templates.js',
            'src/app/**/*.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    });
};

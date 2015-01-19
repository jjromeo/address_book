module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap.js',
      'app/bower_components/angular-utils-pagination/dirPagination.js',
      'app/js/app.js',
      'app/js/controllers/ContactListCtrl.js',
      'app/js/controllers/ContactDetailCtrl.js',
      'app/js/controllers/NewContactCtrl.js',
      'app/js/controllers/EditContactCtrl.js',
      'app/js/services/AlertService.js',
      'app/js/services/myTimeout.js',
      'unit-tests/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};

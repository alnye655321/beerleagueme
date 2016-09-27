var app = angular.module('Beersportme', [
  'ngRoute',
  'mobile-angular-ui',
  'mobile-angular-ui.gestures',
  'Beersportme.controllers.Main',
  'Beersportme.services.getRoutesCommon',
  'Beersportme.services.postRoutesCommon',
  'Beersportme.services.putRoutesCommon',
  'Beersportme.controllers.Profile_Form',
  'Beersportme.controllers.Profile_Edit_Form',
  'Beersportme.controllers.getAllTeams',
  'Beersportme.controllers.getAllSports',
]);

app.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
  $routeProvider.when('/tabs', {templateUrl:'tabs.html',  reloadOnSearch: false});
  $routeProvider.when('/swipe', {templateUrl:'swipe.html',  reloadOnSearch: false});
  $routeProvider.when('/forms', {templateUrl:'forms.html',  reloadOnSearch: false});
  $routeProvider.when('/profile', {templateUrl:'profile-form.html',  reloadOnSearch: false});
  $routeProvider.when('/edit_my_profile', {templateUrl:'profile-form-edit.html',  reloadOnSearch: false});
  $routeProvider.when('/view_all_events', {templateUrl:'view_all_events.html',  reloadOnSearch: false});
  $routeProvider.when('/view_all_sports', {templateUrl:'view_all_sports.html',  reloadOnSearch: false});
  $routeProvider.when('/view_my_teams', {templateUrl:'view_my_teams.html',  reloadOnSearch: false});
  $routeProvider.when('/view_all_teams', {templateUrl:'view_all_teams.html',  reloadOnSearch: false});
  $routeProvider.when('/view_my_profile', {templateUrl:'view_my_profile.html',  reloadOnSearch: false});
  $routeProvider.when('/view_my_calandar', {templateUrl:'view_my_calandar.html',  reloadOnSearch: false});
  $routeProvider.when('/view_sports_map', {templateUrl:'view_sports_map.html',  reloadOnSearch: false});
  $routeProvider.when('/add_event', {templateUrl:'add_event.html',  reloadOnSearch: false});
  $routeProvider.when('/add_team', {templateUrl:'add_team.html',  reloadOnSearch: false});
});


app.config(['$httpProvider', function($httpProvider) {

        $httpProvider.defaults.useXDomain = true;

        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }

]);

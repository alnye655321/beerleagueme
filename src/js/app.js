var app = angular.module('Beersportme', [
  'ngRoute',
  'satellizer',
  'mobile-angular-ui',
  'mobile-angular-ui.gestures',
  'Beersportme.controllers.Main',
  'Beersportme.controllers.Home',
  'Beersportme.services.getRoutesCommon',
  'Beersportme.services.postRoutesCommon',
  'Beersportme.services.putRoutesCommon',
  'Beersportme.controllers.Profile_Form',
  'Beersportme.controllers.Profile_Edit_Form',
  'Beersportme.controllers.getAllTeams',
  'Beersportme.controllers.getAllSports',
  'Beersportme.controllers.getAllEvents'
]);

app.config(function($routeProvider, $authProvider) {
    // *** satellizer settings *** //
  $authProvider.github({ //change URL to heroku address
   url: 'http://immense-mountain-80924.herokuapp.com/auth/github',
   clientId: '885c082728340e4b3d3f',
   redirectUri: 'http://immense-mountain-80924.herokuapp.com/auth/github'
  });
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false, restricted: false});
  $routeProvider.when('/members', {template:'<h1>Logged in</h1>',  reloadOnSearch: false, restricted: true});
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

app.run(function ($rootScope, $location, $route, $auth) {
 $rootScope.$on('$routeChangeStart', function (event, next, current) {
   if (next.restricted && !$auth.isAuthenticated()) {
     $location.path('/');
     $route.reload();
   }
 });
});

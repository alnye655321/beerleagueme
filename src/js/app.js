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
  'Beersportme.controllers.getAllEvents',
  'Beersportme.controllers.getMyEvents',
  'Beersportme.controllers.getMyTeams',
  'Beersportme.controllers.getProfile',
  'Beersportme.controllers.getAllLocations',
  'Beersportme.controllers.Add_Event',
  'Beersportme.controllers.carousel',
  'Beersportme.controllers.Add_Team'
]);

app.config(function($routeProvider, $authProvider) {
    // *** satellizer settings *** //
  $authProvider.github({ //change URL to heroku address
   url: 'http://immense-mountain-80924.herokuapp.com/auth/github',
   clientId: '885c082728340e4b3d3f',
   redirectUri: 'http://immense-mountain-80924.herokuapp.com/auth/github'
  });
  $routeProvider.when('/', {templateUrl:'create_profile.html',  reloadOnSearch: false, restricted: false});
  $routeProvider.when('/home', {templateUrl:'home.html',  reloadOnSearch: false, restricted: false});
  $routeProvider.when('/members', {template:'<h1>Logged in</h1>',  reloadOnSearch: false, restricted: true});
  $routeProvider.when('/tabs', {templateUrl:'tabs.html',  reloadOnSearch: false});
  $routeProvider.when('/swipe', {templateUrl:'swipe.html',  reloadOnSearch: false});
  $routeProvider.when('/forms', {templateUrl:'forms.html',  reloadOnSearch: false});
  // $routeProvider.when('/edit_my_profile', {templateUrl:'profile-form-edit.html',  reloadOnSearch: false});
  $routeProvider.when('/edit_my_profile', {templateUrl:'modal_edit_my_profile.html',  reloadOnSearch: false});
  $routeProvider.when('/view_all_events', {templateUrl:'view_all_events.html',  reloadOnSearch: false});
  $routeProvider.when('/view_my_events', {templateUrl:'view_my_events.html',  reloadOnSearch: false});
  $routeProvider.when('/view_all_sports', {templateUrl:'view_all_sports.html',  reloadOnSearch: false});
  $routeProvider.when('/view_my_teams', {templateUrl:'view_my_teams.html',  reloadOnSearch: false});
  $routeProvider.when('/view_all_teams', {templateUrl:'view_all_teams.html',  reloadOnSearch: false});
  $routeProvider.when('/view_my_profile', {templateUrl:'view_my_profile.html',  reloadOnSearch: false});
  $routeProvider.when('/view_my_calandar', {templateUrl:'view_my_calandar.html',  reloadOnSearch: false});
  $routeProvider.when('/view_sports_map', {templateUrl:'view_sports_map.html',  reloadOnSearch: false});
  $routeProvider.when('/add_event', {templateUrl:'add_event.html',  reloadOnSearch: false});
  $routeProvider.when('/add_team', {templateUrl:'add_team.html',  reloadOnSearch: false});
  $routeProvider.when('/carousel', {templateUrl: 'carousel.html', reloadOnSearch: false});
});


// app.config(['$httpProvider', function($httpProvider) {
//
//         $httpProvider.defaults.useXDomain = true;
//
//         delete $httpProvider.defaults.headers.common['X-Requested-With'];
//
//     }
//
// ]);

app.directive('carousel', function() {
  return {
    restrict: 'C',
    scope: {},
    controller: function() {
      this.itemCount = 0;
      this.activeItem = null;

      this.addItem = function() {
        var newId = this.itemCount++;
        this.activeItem = this.itemCount === 1 ? newId : this.activeItem;
        return newId;
      };

      this.next = function() {
        this.activeItem = this.activeItem || 0;
        this.activeItem = this.activeItem === this.itemCount - 1 ? 0 : this.activeItem + 1;
      };

      this.prev = function() {
        this.activeItem = this.activeItem || 0;
        this.activeItem = this.activeItem === 0 ? this.itemCount - 1 : this.activeItem - 1;
      };
    }
  };
});

app.directive('carouselItem', function($drag) {
  return {
    restrict: 'C',
    require: '^carousel',
    scope: {},
    transclude: true,
    template: '<div class="item"><div ng-transclude></div></div>',
    link: function(scope, elem, attrs, carousel) {
      scope.carousel = carousel;
      var id = carousel.addItem();

      var zIndex = function() {
        var res = 0;
        if (id === carousel.activeItem) {
          res = 2000;
        } else if (carousel.activeItem < id) {
          res = 2000 - (id - carousel.activeItem);
        } else {
          res = 2000 - (carousel.itemCount - 1 - carousel.activeItem + id);
        }
        return res;
      };

      scope.$watch(function() {
        return carousel.activeItem;
      }, function() {
        elem[0].style.zIndex = zIndex();
      });

      $drag.bind(elem, {
        //
        // This is an example of custom transform function
        //
        transform: function(element, transform, touch) {
          //
          // use translate both as basis for the new transform:
          //
          var t = $drag.TRANSLATE_BOTH(element, transform, touch);

          //
          // Add rotation:
          //
          var Dx = touch.distanceX;
          var t0 = touch.startTransform;
          var sign = Dx < 0 ? -1 : 1;
          var angle = sign * Math.min((Math.abs(Dx) / 700) * 30, 30);

          t.rotateZ = angle + (Math.round(t0.rotateZ));

          return t;
        },
        move: function(drag) {
          if (Math.abs(drag.distanceX) >= drag.rect.width / 4) {
            elem.addClass('dismiss');
          } else {
            elem.removeClass('dismiss');
          }
        },
        cancel: function() {
          elem.removeClass('dismiss');
        },
        end: function(drag) {
          elem.removeClass('dismiss');
          if (Math.abs(drag.distanceX) >= drag.rect.width / 4) {
            scope.$apply(function() {
              carousel.next();
            });
          }
          drag.reset();
        }
      });
    }
  };
});

app.run(function($http, $rootScope) {

  //$http.defaults.headers.common.Authorization = 'login YmVlcDpi' ;
  //or try this
  $http.defaults.headers.common['Auth_Token'] = $rootScope.userID;
  //$http.defaults.headers.common['userid'] = $rootScope.userID;
  //$http.defaults.headers.common['Auth_Token'] = 'password';

});

// app.run(function ($rootScope, $location, $route, $auth) {
//  $rootScope.$on('$routeChangeStart', function (event, next, current) {
//    if (next.restricted && !$auth.isAuthenticated()) {
//      $location.path('/');
//      $route.reload();
//    }
//  });
// });

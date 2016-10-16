angular.module('Beersportme.directives.eventNameGen', [])
.directive("eventNamer", function ()
{
  return {
      restrict: 'EA',
      replace: 'true',
      scope: true,
      controller: function ($scope) {
        var first = ['Live!','One Night Only!','BYOB','RSVP Required','Clothing Optional'];
        var middle = ['Soccer','Ping Pong','Basketball','Badminton','Flag Football','Kickball','Softball','Beer Pong','Baseball','Hockey','Cornhole'];
        var last = ['Get Dirty','All Night!','Make Friends','Have Fun','Champions','Amateurs','Pros','Noobs'];
        $scope.first = first[Math.floor(Math.random()*first.length)];
        $scope.middle = middle[Math.floor(Math.random()*middle.length)];
        $scope.last = last[Math.floor(Math.random()*last.length)];
      },
      template: '<strong>{{first}}' + ' ' + '{{middle}}' + ' ' + '{{last}}</strong>'
  };


});

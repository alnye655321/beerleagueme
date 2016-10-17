angular.module('Beersportme.filters.availability_calc', [])
.filter("availability", function ()
{
  return function(num) {
  var strNum = num.toString();
  var availabilityArray = [];
      if (strNum.search("1") != -1) {
      availabilityArray.push('AM');
      }
      if (strNum.search("2") != -1) {
      availabilityArray.push('PM');
      }
      if (strNum.search("4") != -1) {
      availabilityArray.push('Weekdays');
      }
      if (strNum.search("5") != -1) {
      availabilityArray.push('Weekends');
      }
      if (strNum.search("3") != -1) {
      availabilityArray.push('AM & PM');
      }
      if (strNum.search("6") != -1) {
      availabilityArray.push('Weekdays & Weekends');
      }
      return availabilityArray.join(" on ");
  };
});

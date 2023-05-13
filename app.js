// MODULE
var angularApp = angular.module("angularApp", []);

// CONTROLLERS
angularApp.controller("mainController", [
  "$scope",
  "$log",
  "$filter",
  "$timeout",
  function ($scope, $log, $filter, $timeout) {
    $scope.name = "Mohit";
    $scope.getName = function (name) {
      return name;
    };
    $timeout(function () {
      $scope.name = "Everyone";
    }, 3000);
    console.log($scope.getName($scope.name));
    console.log($scope);
    console.log($log);
    console.log($filter);
    console.log($filter);

    $scope.filteredName = $filter("uppercase")($scope.name);
    console.log($scope.filteredName);

    $log.error("MayDay!! MayDay!!");
    $log.debug("debug info about my code");
    $log.info("Give some info");
    $log.log("Log something");
    $log.warn("Pull up!!  Pull up!!");

    $scope.linkedin = ""; // 2 way data binding
    $scope.lowerCaseLinkedin = function () {
      return $filter("lowercase")($scope.linkedin);
    };

    $scope.$watch("linkedin", function (newValue, oldValue) {
      console.log("---------");
      console.log(`old: ${oldValue}`);
      console.log(`new: ${newValue}`);
      console.log("---------");
    });

    $scope.rules = [
      { ruleName: "Must be 5 characters" },
      { ruleName: "Must not be used elsewhere" },
      { ruleName: "Must be awesome" },
    ];
  },
]); // put in array to minify the code

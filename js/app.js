var myApp = angular.module("myApp", []);

myApp.controller("HelloWorldCtrl", function ($scope){
    $scope.person = {
        name : "Disha Shimpi",
        age : "20",
        mobile : "8306640313",
        emails : [
            {discription:'official',email:'dishashimpi.it19@scet.ac.in'},
            {discription:'personal1',email:'shimpi*****@gmail.com'},
            {discription:'personal2',email:'disha******@gmail.com'}
        ]
    };
});


/**
 * Created by Frank Qiu on 2016/10/13.
 */
"use strict";


angular.module('frankApp', ['ngRoute','ui.bootstrap','ngAnimate','ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
        })
            .otherwise({
                redirectTo:'/'
            })
    }]);



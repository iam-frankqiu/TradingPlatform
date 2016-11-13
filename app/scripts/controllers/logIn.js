/**
 * Created by Frank Qiu on 2016/10/24.
 */
"use strict";


angular.module('frankApp')
    .controller('LogInCtrl', function ($scope, $uibModal, $log) {

        $scope.register = function () {

            $scope.cancel();

            $log.info('cancel   it !');

            $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/views/verify.html',
                //keyborad: true,

            });
        };

        //$scope.cancel = function () {
        //    $uibModalInstace.dismiss('cancel');
        //}

    });
/**
 * Created by Frank Qiu on 2016/10/14.
 */
'use strict';


angular.module('frankApp')
    .controller('NavbarCtrl', function ($scope, $uibModal, $log) {

        $scope.animationsEnabled = true;

        $scope.test = 'lol';

        $scope.state = false;


        /*注册弹出的模态框*/


        $scope.verify = function (reason) {

            $scope.reason = reason;

            $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/views/verify.html',
                controller: function ($rootScope, $uibModalInstance, $uibModal) {
                    $rootScope.tabs = {
                        'register': '注册验证',
                        'forget': '重置密码'
                    };
                    $rootScope.reason = $scope.reason;


                    $rootScope.logIn = function () {
                        $uibModalInstance.dismiss();
                        return $scope.logIn()
                    };

                    $rootScope.sentCode = function () {

                        //var state = null;
                        //
                        //
                        //User.query(function (users) {
                        //    users.forEach(function (user) {
                        //
                        //        if (user.phone === $rootScope.phone.trim()) {
                        //            state = 'fail';
                        //        }
                        //    });
                        //});
                        //
                        //if (state) {
                        //    $rootScope.error = Error.registerError.phoneIsAlreadyRegisteredError;
                        //}
                        //
                        //else {
                            $uibModalInstance.dismiss();
                            $uibModal.open({
                                animation: $scope.animationsEnabled,
                                templateUrl: 'app/views/register.html',
                                controller: function ($rootScope, $uibModalInstance, User) {

                                    $rootScope.register = function (form) {

                                        User.save(form, function (success) {
                                            console.log(success + '%%%%%%success');
                                        }, function (err) {
                                            console.log(err + '新增数据失败!');
                                        });

                                        //console.log(form.phone + '%%%%%%err');
                                    };

                                }

                            });
                        //}


                    }
                }
            });
        };


        /*登录弹出的模态框*/


        $scope.logIn = function () {
            $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/views/login.html',
                controller: function ($rootScope, $log, $uibModalInstance, User, Error) {
                    $rootScope.verify = function (reason) {
                        $uibModalInstance.dismiss();
                        return $scope.verify(reason)
                    };


                    /*登录功能*/


                    //$rootScope.logIn = function (form) {
                    //
                    //    var state = null;
                    //
                    //    User.query(function (users) {
                    //        users.forEach(function (user) {
                    //
                    //            if (user.phone === form.phone.trim() && user.password === form.password.trim()) {
                    //
                    //                state = 'success';
                    //            }
                    //            else if (user.phone === form.phone.trim() && user.password !== form.password.trim()) {
                    //                $rootScope.error = Error.logInError.passwordError;
                    //                state = 'passwordError';
                    //            }
                    //        });
                    //    });
                    //
                    //    if (!state) {
                    //        $rootScope.error = Error.logInError.accountEmptyError;
                    //    }
                    //
                    //};

                }
            });
        };


    });
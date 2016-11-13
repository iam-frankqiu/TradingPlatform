/**
 * Created by Frank Qiu on 2016/11/2.
 */
'use strict';


angular.module('frankApp')
    .factory('User', function ($resource) {
        return $resource('/api/user/:id', {
            id: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    });
/**
 * Created by Frank Qiu on 2016/11/2.
 */
'use strict';


angular.module('frankApp')
    .factory('Commodity', function ($resource) {
        return $resource('api/commodity/:id', {
            id: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        })
    });

/**
 * Created by Frank Qiu on 2016/11/2.
 */
'use strict';


angular.module('frankApp')
    .factory('Remark', function ($resource) {
        return $resource('remark/api/:id', {
                id: '@_id'
            }, {
                update: {
                    method: 'PUT'
                }
            }
        )
    });
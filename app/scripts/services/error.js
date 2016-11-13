/**
 * Created by Frank Qiu on 2016/11/2.
 */
'use strict';


angular.module('frankApp').value('Error', {
        'inputError': {
            'inputPhoneError': '请输入电话号码',
            'inputPasswordError': '请输入密码',
            'inputCodeError': '请输入验证码',
            'inputCodeAgainError': '请再次输入密码',
            'inputAccountError': '请输入账号',
            'inputnameError': '请输入昵称'
        },
        'logInError': {
            'accountEmptyError': '账号尚未注册',
            'passwordError': '密码错误'
        },
        'registerError': {
            'phoneIsInvalidError': '手机号码不存在',
            'phoneIsAlreadyRegisteredError': '手机号码已注册',
            'ensurePasswordError': '两次密码输入不一致',
            'nameRepeatError': '您的昵称已存在',
            'codeError': '验证码错误'
        }
    }
);
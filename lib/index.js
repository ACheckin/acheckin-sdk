"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ACheckinSDK = (function () {
    function ACheckinSDK() {
    }
    ACheckinSDK.init = function (options) {
        if (options === void 0) { options = {}; }
        if (typeof window.ACheckin.handleSDK !== "function") {
            throw new Error("Bạn phải sử dụng sdk trong ứng dụng ACheckin");
        }
        ACheckinSDK.sdk_ready = true;
        window.ACheckin.handleSDK("init", {
            fields: {
                title: options.title || null,
                use_search_bar: options.use_search_bar || false,
                default_navigation_id: options.default_navigation_id || null
            }
        }).catch();
    };
    ACheckinSDK.validInitSDK = function () {
        if (!ACheckinSDK.sdk_ready) {
            throw new Error("SDK chưa được khởi tạo, vui lòng gọi init()");
        }
    };
    ACheckinSDK.setHeaderTitle = function (title) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("setHeaderTitle", {
            fields: {
                title: title
            }
        });
    };
    ACheckinSDK.getAccessToken = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getAccessToken");
    };
    ACheckinSDK.getUserPersonalInfo = function (fields) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getUserPersonalInfo", {
            fields: fields
        });
    };
    ACheckinSDK.getUserWorkspaceInfo = function (fields) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getUserWorkspaceInfo", {
            fields: fields
        });
    };
    ACheckinSDK.setItem = function (key, value) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("setItem", {
            key: key,
            value: value
        });
    };
    ACheckinSDK.getItem = function (key) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getItem", {
            key: key
        });
    };
    ACheckinSDK.getDeviceInfo = function (fields) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getDeviceInfo", {
            fields: fields
        });
    };
    ACheckinSDK.readBarCode = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("readBarCode");
    };
    ACheckinSDK.addNavigationChangeListener = function (callback) {
        var listenerFn = function (data) {
            callback(data.detail);
        };
        window.addEventListener("ACheckin.NavigationChange", listenerFn);
        return function () {
            window.removeEventListener("ACheckin.NavigationChange", listenerFn);
        };
    };
    ACheckinSDK.addShakeEventListener = function (callback) {
        var listenerFn = function () {
            callback();
        };
        window.addEventListener("ACheckin.ShakeEvent", listenerFn);
        return function () {
            window.removeEventListener("ACheckin.ShakeEvent", listenerFn);
        };
    };
    ACheckinSDK.showBottomTabs = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("showBottomTabs");
    };
    ACheckinSDK.hideBottomTabs = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("hideBottomTabs");
    };
    ACheckinSDK.isCheckedIn = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("isCheckedIn");
    };
    ACheckinSDK.getCurrentLocation = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getCurrentLocation");
    };
    ACheckinSDK.shareScreen = function (message) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("shareScreen", {
            message: message
        });
    };
    ACheckinSDK.setLocalNotification = function (options) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("setLocalNotification", __assign({ title: options.title, body: options.body }, (options.schedule_time && { schedule_time: options.schedule_time })));
    };
    ACheckinSDK.vibrate = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("vibrate");
    };
    ACheckinSDK.getCurrentDomain = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getCurrentDomain");
    };
    ACheckinSDK.getStaffOfLeader = function (offset, limit) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getStaffOfLeader", {
            offset: offset,
            limit: limit
        });
    };
    ACheckinSDK.playAudio = function (url, options) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("playAudio", {
            url: url,
            options: options,
        });
    };
    ACheckinSDK.stopAudio = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("stopAudio", {});
    };
    ACheckinSDK.sdk_ready = false;
    return ACheckinSDK;
}());
exports.ACheckinSDK = ACheckinSDK;

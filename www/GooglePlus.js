var exec = require('cordova/exec');

var GooglePlus = {
  login: function (options, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'GooglePlus', 'login', [options]);
  },
  isAvailable: function (callback) {
    exec(callback, null, 'GooglePlus', 'isAvailable', []);
  },
  trySilentLogin: function (options, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'GooglePlus', 'trySilentLogin', [options]);
  },
  logout: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'GooglePlus', 'logout', []);
  },
  disconnect: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'GooglePlus', 'disconnect', []);
  },
  getSigningCertificateFingerprint: function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'GooglePlus', 'getSigningCertificateFingerprint', []);
  }
};

module.exports = GooglePlus;

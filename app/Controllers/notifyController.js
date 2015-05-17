(function() {
        //Module
        var app = angular.module('notifyApp', ['ngRoute']);

        //Controller
        app.controller('NotificationCtrl', NotificationCtrl);
        NotificationCtrl.$inject = ["$scope", "notifications"];

        function NotificationCtrl($scope, notifications) {

            $scope.notify = notifications;
            $scope.closeAlert = function(item) {
                notifications.pop(item);
            }

            $scope.info = function() {
                setNotification(notifications, 'info', 'Info Header', 'Info Body');
            }

            $scope.success = function() {
                setNotification(notifications, 'success', 'Success Header', 'Success Body');
            }

            $scope.warning = function() {
                setNotification(notifications, 'warning', 'Warning Header', 'Warning Body');
            }

            $scope.error = function() {
                setNotification(notifications, 'danger', 'Error Header', 'Error Body');
            }
        };

    function setNotification(notifications, type, title, body) {
        notifications.add({
            type: type,
            title: title,
            body: body
        });
    }
})();
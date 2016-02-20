(function () {
    'use strict';
    angular.module('starter').directive('catCard', CatCard);

    function CatCard() {

        function Controller($scope, $ionicPopup) {

            var self = this;
            self.michael = 'michael';
            // Triggered on a button click, or some other target
            $scope.showPopup = function(incidentID) {
                $scope.data = {};

                // An elaborate, custom popup
                var myPopup = $ionicPopup.show({
                    template: '<div data-cat-card-details t-card-id="{{vm.incident.id}}"></div>',
                    title: 'Incident records',
                    scope: $scope,
                    buttons: [
                        { text: 'Cancel' },
{
                            text: '<b>Save</b>',
                            type: 'button-positive',
                            onTap: function(e) {
                                if (!$scope.data.wifi) {
                                    //don't allow the user to close unless he enters wifi password
                                    e.preventDefault();
                                } else {
                                    return $scope.data.wifi;
                                }
                            }
                        }

                    ]
                });

                myPopup.then(function(res) {
                    console.log('Tapped!', 555);
                });
            };

            // A confirm dialog
            $scope.showConfirm = function() {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Consume Ice Cream',
                    template: 'Are you sure you want to eat this ice cream?'
                });

                confirmPopup.then(function(res) {
                    if(res) {
                        console.log('You are sure');
                    } else {
                        console.log('You are not sure');
                    }
                });
            };

            // An alert dialog
            $scope.showAlert = function() {
                var alertPopup = $ionicPopup.alert({
                    title: 'Don\'t eat that!',
                    template: 'It might taste good'
                });

                alertPopup.then(function(res) {
                    console.log('Thank you for not eating my delicious ice cream cone');
                });
            };


        }

        function Link(scope, element, attrs, selfCtrl){
        }

        return {
            scope:{
                incident: '=tCatCardIncidnet'
            },
            restrict: 'EA',
            controller: Controller,
            link: Link,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'directives/cat-card.html'
        };
    }

})();

(function () {
    'use strict';
    angular.module('starter').directive('catCardDetails', CatCardDetails);

    function CatCardDetails() {

        function Controller($scope, Chats) {

            var self = this;
            self.cardDetails = Chats.get(self.cardID);
        }

        function Link(scope, element, attrs, selfCtrl){
        }

        return {
            restrict: 'EA',
            scope:{
                cardID: '@tCardId'
            },
            controller: Controller,
            link: Link,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'directives/cat-card-details.html'
        };
    }

})();

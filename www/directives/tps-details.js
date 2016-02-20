(function () {
    'use strict';
    angular.module('starter').directive('tpsDetails', TpsDetails);

    function TpsDetails() {

        function Controller($scope) {

            var self = this;
            $scope.$watch('$parent.incidentDetails', function(newVal, oldVal){
                if ( newVal ) {
                    self.records = newVal.incident.workflows;
                }
            })
            //self.incident = $scope.$parent.incidentDetails;
        };


        function Link(scope, element, attrs, selfCtrl){
            console.log(selfCtrl);
        }

        return {
            restrict: 'EA',
            require: '?^tpsCard',
            scope:{},
            controller: Controller,
            link: Link,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'directives/tps-details.html'
        };
    }

})();
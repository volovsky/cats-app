(function () {
    'use strict';
    angular.module('starter').directive('catAllIncidentsCards', CatAllIncidentsCards);

    function CatAllIncidentsCards() {

        function Controller($scope, Chats) {

            var self = this;
            self.getIncidents = {incidents: Chats.all()};

/*            document.addEventListener("deviceready", function () {

                var options = {
                    quality: 50,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 100,
                    targetHeight: 100,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false,
                    correctOrientation:true
                };

                $cordovaCamera.getPicture(options).then(function(imageData) {
                    var image = document.getElementById('myImage');
                    image.src = "data:image/jpeg;base64," + imageData;
                }, function(err) {
                    // error
                });

            }, false);*/

        }

        function Link(scope, element, attrs, selfCtrl){

        }

        return {
            restrict: 'EA',
            controller: Controller,
            link: Link,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'directives/cat-all-incidents-cards.html'
        };
    }

})();

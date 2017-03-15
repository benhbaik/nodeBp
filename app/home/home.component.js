angular.
    module('home').
    component('home', {
        templateUrl: 'home/home.html',
        // templateUrl: 'yummm-search/search.html'
        controller: function() {
            this.name = 'world!'
        }
    });

'use strict';

angular.module('yummm', [
  'ngRoute',
  'core',
  'home',
  'navbar',
  'search',
  'registration',
  'dashboard'
]);

// TODO: should route to home if dashboard is clicked and not logged in
// TODO: should route to dashboard if home is clicked and logged in

angular
    .module('contact', ['ui.router'])
    .config(function ($stateProvider) {
        $stateProvider.state({
            redirectTo: 'contact.phone',
            name: 'contact',
            url: '/contact',
            templateUrl: '../../templates/contact.html'
        }),
        $stateProvider.state({
            name: 'contact.phone',
            url: '/phone',
            templateUrl: '../../templates/phone.html'
        }),
        $stateProvider.state({
            name: 'contact.email',
            url: '^/email',
            templateUrl: '../../templates/email.html'
        }),
        $stateProvider.state({
            name: 'contact.phone.bio',
            url: '/bio',
            templateUrl: '../../templates/bio.html'
        })
    });

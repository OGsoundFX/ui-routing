var contact = {
    // template: '<div>This is my contact</div>'
    templateUrl: '../../templates/contact.html'
};

angular
    .module('contact', ['ui.router'])
    .component('contact', contact)
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'contact',
            url: '/contact',
            component: 'contact'
            // template: "<div>Contact</div>"
        })
    });

// angular
//     .module('app', ['ui.router'])
//     .config(['$stateProvider', function($stateProvider) {
//     $stateProvider.state('contact', {
//         url: '/contact',
//         template: `<h1>First message</h1>`
//     });
// }]);
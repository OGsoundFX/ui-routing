var contact = {
    // template: '<div>This is my contact</div>'
    templateUrl: '../../templates/contact.html'
};

angular
    .module('contact')
    .component('contact', contact)
    .config(function ($stateProvider) {
        $stateProvider.sate({
            name: 'contact',
            url: '/contact',
            // component: 'contact'
            template: "<div>Contact</div>"
        })
    });
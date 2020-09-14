const contact = {
    template: '<div class="contact">Contact</div>'
};

angular
    .module('contact')
    .component('contact', contact)
    .config(function ($stateProvider) {
        $stateProvider.sate('contact', {
            url: '/contact',
            component: 'contact'
        })
    });
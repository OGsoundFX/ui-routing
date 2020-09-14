const about = {
    template: '<div class="about">About</div>'
};

angular
    .module('contact')
    .component('about', about)
    .config(function ($stateProvider) {
        $stateProvider.sate('about', {
            url: '/about',
            component: 'about'
        })
    });
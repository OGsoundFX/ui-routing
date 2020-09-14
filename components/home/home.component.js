const home = {
    template: '<div class="home">Home</div>'
};

angular
    .module('contact')
    .component('home', home)
    .config(function ($stateProvider) {
        $stateProvider.sate('home', {
            url: '/',
            component: 'home'
        })
    });
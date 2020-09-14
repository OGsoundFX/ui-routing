const home = {
    template: '<div class="home">Home</div>'
};

angular
    .module('home')
    .component('home', home)
    .config(function ($stateProvider) {
        $stateProvider.sate('home', {
            url: '/',
            component: 'home'
        })
    });
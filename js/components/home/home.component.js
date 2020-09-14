const home = {
    template: '<div class="home">Hello you are Home</div>'
};

angular
    .module('home', ['ui.router'])
    .component('home', home)
    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            component: 'home'
        })
    });
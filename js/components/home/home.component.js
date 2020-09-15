const home = {
    // template: '<div class="home">Hello you are Home</div>'
    templateUrl: '../../templates/home.html'
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
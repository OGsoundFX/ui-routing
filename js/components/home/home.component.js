const home = {
    // template: '<div class="home">Hello you are Home</div>'
    templateUrl: '../../templates/home.html'
};

angular
    .module('home')
    .component('home', home)
    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            component: 'home'
        })
    });
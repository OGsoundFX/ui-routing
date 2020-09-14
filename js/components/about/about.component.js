const about = {
    template: '<div class="about">About</div>'
};
    
angular
    .module('about', ['ui.router'])
    .component('about', about)
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'about',
            url: '/about',
            component: 'about',
            // template: "<div>About</div>"
        })
    });
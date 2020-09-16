const about = {
    // template: '<div class="about">About</div>'
    templateUrl: '../../templates/about.html'
};
    
angular
    .module('about')
    // .component('about', about)
    .config(function ($stateProvider) {
        $stateProvider.state({
            name: 'about',
            url: '/about',
            // templateUrl: '../../templates/about.html'
            // component: 'about', // this can replace the views bellow if we just need the defaul view
            views: {
                '@': {
                    templateUrl: '../../templates/about.html'
                },
                // 'history@about': {
                //     templateUrl: '../../templates/history.html'
                // }
            }
            // views: {
            //     '@': {
            //         component: 'about'
            //     },
            //     'history@about': {
            //         component: 'history'
            //     }
            // }
        }),
        $stateProvider.state({
            name: 'about.history',
            url: '/history',
            // component: 'history'
            templateUrl: '../../templates/history.html' 
        }),
        $stateProvider.state({
            name: 'about.politics',
            url: '/politics',
            templateUrl: '../../templates/politics.html'
        })
    });
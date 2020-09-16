const repos = {
    templateUrl: '../../templates/repos.html',
    controller: function (ReposService) {
        const ctrl = this;
        this.entry = "";
        this.searchEntry = () => {
            this.list = [];
            ReposService.getRepos(ctrl.entry).then(function (response) {
                ctrl.list = response;
            });
        };
    }
};

angular
    .module('repos')
    .component('repos', repos)
    .config(function ($stateProvider) {
        $stateProvider.state('repos', {
            url: '/repos',
            component: 'repos'
            // templateUrl: '../../templates/repos.html'
        })
    });
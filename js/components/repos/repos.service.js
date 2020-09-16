function ReposService ($http) {
    this.getRepos = function (entry) {
        return $http
            .get(`https://api.github.com/users/${entry}/repos`)
            .then(function (response) {
                return response.data;
            });
    };
};

angular
    .module('repos')
    .service('ReposService', ReposService)
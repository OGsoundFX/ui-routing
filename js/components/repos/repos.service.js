function ReposService ($http) {
    this.getRepos = function () {
        return $http
            .get('https://api.github.com/users/ogsoundfx/repos')
            .then(function (response) {
                return response.data;
            });
    };
};

angular
    .module('repos')
    .service('ReposService', ReposService)
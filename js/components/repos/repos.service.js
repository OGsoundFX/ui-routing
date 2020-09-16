function ReposService ($http) {
    this.getRepos = (entry) => {
        return $http
            .get(`https://api.github.com/users/${entry}/repos`)
            .then(function (response) {
                return response.data;
            });
    };

// Same result but using factory instead of service:
    // return {    
    //     getRepos: function (entry) {
    //         return $http
    //         .get(`https://api.github.com/users/${entry}/repos`)
    //         .then(function (response) {
    //             return response.data;
    //         });
    //     }
    // };
};

angular
    .module('repos')
    .service('ReposService', ReposService)
    // .factory('ReposService', ReposService)
let module = angular.module('app.home', [])

    //Services
        .service('itemsService', require('./services/items.service'))
        .config(require('./pages/routes'))
        .config(require('./config'))
    ;
export default  module.name;

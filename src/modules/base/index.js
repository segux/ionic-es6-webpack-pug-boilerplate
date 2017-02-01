let module = angular.module('app.base', [])

    //Services
        .config(require('./pages/routes'))
        .config(require('./config'))
    ;
export default  module.name;

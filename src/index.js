import 'ionic-sdk/release/js/ionic.bundle';
import 'expose?_!lodash';

// Style entry point
import './modules/ui/styles/bootstrap';


// Create our prototype module
let mod = angular.module('app', [
    'ionic',
    'ui.router',
    require('./modules/base'),
    require('./modules/i18n/language/language.module'),
    require('./modules/home')

]);
// IONIC CONFIG
mod.config(require('./ionic.config'));
// Run
mod.run(require('./boot'));

//export default mod = mod.name;

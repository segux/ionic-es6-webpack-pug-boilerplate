import angularTranslate from 'angular-translate';
import urlTranslateLoader from 'angular-translate/dist/angular-translate-loader-url/angular-translate-loader-url';

import LanguageConfig from './language.config.js';

let module = angular.module('app.language', ['pascalprecht.translate'])
        .config(LanguageConfig)
    ;
export default  module.name;

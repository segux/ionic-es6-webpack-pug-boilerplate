import base from './base';
import menu from './menu';
export default function ($stateProvider) {
    'ngInject';
    $stateProvider.decorator('views', (state, parent) => {
        let views = parent(state);
        if (state.name === 'base') {
            views['menu@base'] = {
                template: menu.template
            };
        }

        return views;
    });
    return $stateProvider.state('base', {
        abstract: true,
        views: {
            '@': {
                template: base.template
            }
        },
    });
};

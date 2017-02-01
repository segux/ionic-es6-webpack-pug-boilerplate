import posts from './posts';
import postDetalle from './post-detalle';

export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('base.posts', {
        url: "/posts",
        views: {
            'content@base': {
                template: posts.template,
                controller: posts.controller,
                controllerAs: "postsCtrl"
            }
        }
    }).state('base.post', {
        url: "/post/:id",
        views: {
            'content@base': {
                template: postDetalle.template,
                controller: postDetalle.controller,
                controllerAs: "postCtrl",
            }
        }
    })
    ;
    $urlRouterProvider.otherwise("/posts");
}
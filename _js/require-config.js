requirejs.config({
    urlArgs: '01',
    baseUrl: '/assets/js/modules',
    paths: {
        'EventEmitter': '../lib/EventEmitter.min',
        'jquery.selectBox': '../lib/jquery.selectBox',
        'GameResizer': '../lib/GameResizer',
        'globologin-light': '../lib/globologin-light',
        'jquery': '../lib/jquery.min',
        'jquery.accordion': '../lib/jquery.accordion',
        'jquery.cookie': '../lib/jquery.cookie.min',
        'jquery.easytabs': '../lib/jquery.easytabs.min',
        'jquery.endless-scroll': '../lib/jquery.endless-scroll',
        'jquery.swiper': '../lib/swiper.jquery.min',
        'jquery-asPieProgress': '../lib/jquery-asPieProgress',
        'jquery-private': '../lib/jquery-private',
        'lazysizes': '../lib/lazysizes.min',
        'passwordStrength': '../lib/passwordStrength',
        'remodal': '../lib/remodal.min',
        'sockjs': '../lib/sockjs.min',
        'Timer': '../lib/Timer',
        'Vue': '../lib/Vue.min',

        'app_bundle': '/assets/js/bundle.min',
    },
    bundles: {
        'app_bundle': [
            'btn_all_games',
            'cashbox'
        ]
    },
    shim: {
        'jquery,accordion': ['jquery'],
        'jquery.easytabs': ['jquery'],
        'jquery.endless-scroll': ['jquery'],
        'jquery.selectBox': ['jquery'],
        'netrox': ['jquery']
    },
    deps: [
        'jquery',
        'lazysizes',
        'dmp_listener',
        'ga_listener',
        'popup_thanks'
    ]
});

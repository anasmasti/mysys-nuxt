export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'mysys-website',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { href: "https://fonts.googleapis.com/icon?family=Material+Icons", rel: "stylesheet" }
        ],
        script: [
            {
                src: "https://code.jquery.com/jquery-3.6.0.slim.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js",
                type: "text/javascript"
            },
            {
                src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
                type: "text/javascript"
            }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/_style.scss',
        'slick-carousel/slick/slick.css',
        'slick-carousel/slick/slick-theme.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/formation/convertJsonToView.js', ssr: false },
        { src: '@/plugins/formation/displayCardOnScroll.js', ssr: false },
        { src: '@/plugins/home/domaine/scrollLeft.js', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: [
            '~/components',
            '~/components/home',
            '~/components/common',
            '~/components/specificity'
        ]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/moment',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',

        // social media sharing
        'vue-social-sharing/nuxt',

        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {// base api url 
        baseUrl: 'https://dashboard.mysys.ma'
    },

    // customize route configurations
    router: {
        linkExactActiveClass: 'nuxt-link-exact-active'
    },

    // customize loading configurations
    loading: {
        color: '#188eee',
        height: '4px'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
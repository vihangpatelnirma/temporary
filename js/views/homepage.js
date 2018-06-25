define('homepage', [
    'backbone', 'carousel', 'appconfig'
], function (Backbone, Carousel, appConfig) {

    utils.loadCSS('/styles/homepage.css');
    utils.loadCSS('/styles/carousel.css');

    return Backbone
        .View
        .extend({

            el: '#main-content',

            tabIndex: 0,

            templateName: 'templates/homepage.handlebars',

            initialize: function () {

                this
                    .model
                    .set('selectedTab', this.tabIndex);
                this.render();
            },

            render: function () {
                console.log(appConfig)

                this
                    .$el
                    .html(window.JST[this.templateName]({
                        testimonials: appConfig.TESTIMONIALS,
                        review: appConfig.REVIEWS[0]
                    }));

                this
                    .$el
                    .scrollTop(0);

            }
        })

});
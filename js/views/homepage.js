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
                new Carousel({el: '.testimonial', margin: 0, visibleItems: 3, mobileVisibleItems: 1, autoSlide: false})

                var index = 0,
                    _this = this,
                    $reviewEl = this.$el.find('.reviews'),
                    $name = $reviewEl.find(".reviewer-name"),
                    $description = $reviewEl.find(".review-description"),
                    $rating = $reviewEl.find(".review-rating");

                setInterval(function() {
                    var review = appConfig.REVIEWS[index]

                    if(!review.text.length) {
                        index++
                        index = index % appConfig.REVIEWS.length;
                        return
                    }

                    $description.text(review.text)
                    $name.text('- ' + review.name)

                    $reviewEl.fadeIn(1000)

                    setTimeout(function() {
                        $reviewEl.fadeOut(1000)
                    },3000)

                    index++
                    index = index % appConfig.REVIEWS.length;
                    
                },5500)
            }
        })

});

define('prescription', 
    ['backbone', 'templates/pres'],
    function(Backbone) {

        utils.loadCSS('/styles/patients.css');

        return Backbone.View.extend({

            el : '#main-content',

            tabIndex : 4,

            templateName : {
                'get-my-prescription' : 'templates/presGet.handlebars',
                'filling-prescription' : 'templates/presFill.handlebars'
            },

            subType: null,

            initialize : function(options) {

                this.subType = options.subType;

                this.model.set('selectedTab', this.tabIndex);
                this.render();
            },

            render : function() {

                var templatePath = this.templateName[this.subType];

                this.$el.html(window.JST[templatePath]());        
            }
        })

    });
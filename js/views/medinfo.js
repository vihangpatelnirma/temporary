
define('medinfo', 
    ['backbone', 'templates/medinfo'],
    function(Backbone) {

        utils.loadCSS('/styles/patients.css');

        return Backbone.View.extend({

            el : '#main-content',

            tabIndex : 2,

            templateName : {
                'terms-types' : 'templates/medinfoTerms.handlebars',
                'medical-uses' : 'templates/medinfoUses.handlebars'
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
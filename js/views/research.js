
define('research', 
    ['backbone','templates/research'],
    function(Backbone) {

        utils.loadCSS('/styles/patients.css');

        return Backbone.View.extend({

            el : '#main-content',

            tabIndex : 5,

            templateName : {
                'info' : 'templates/researchInfo.handlebars',
                'policy-issues' : 'templates/researchPolicy.handlebars'
            },

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
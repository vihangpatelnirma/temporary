
define('team', 
    ['backbone','templates/team'],
    function(Backbone) {

        utils.loadCSS('/styles/team.css');

        return Backbone.View.extend({

            el : '#main-content',

            tabIndex : 1,

            templateName : 'templates/team.handlebars',

            initialize : function() {

                this.model.set('selectedTab', this.tabIndex);
                this.render();
            },

            render : function() {
                this.$el.html(window.JST[this.templateName]());        
            }
        })

    });
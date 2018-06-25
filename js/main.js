

define('main', ['utils', 'backbone', 'router' , 'header' , 'footer', 'templates/templates' , 'mainmodel'] ,
     function(Utils , Backbone, Router, Header, Footer, templates, MainModel) {

         utils.loadCSS('/styles/main.css');

        var MainClass = Backbone.View.extend({
            

            initialize : function() {

                this.render();
            },


            render : function() {

                this.$el.html(window.JST['templates/main.handlebars']);

                var header = new Header({
                    model : this.model
                });
                var footer = new Footer({
                    model : this.model
                });

                this.$el.append(header.$el);
                this.$el.append(footer.$el);
            }

        });

        var mainModel = new MainModel();

        var mainInstance = new MainClass({
            el : 'body',
            model : mainModel
        });

        window.mainModel = mainModel;
        // Start the router
        window.routerInstance = new Router();
        Backbone.history.start({
            pushState : true
        });

        return mainInstance;
});
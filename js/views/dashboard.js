
define('dashboard', 
    ['backbone', 'templates/dashboard'],
    function(Backbone) {

        utils.loadCSS('/styles/dashboard.css');

        return Backbone.View.extend({

            el : 'body',

            templateName : {
                'dashboard' : 'templates/dashboard.handlebars',
            },

            events : {
                "click #submit-btn" : 'getData'
            },

            initialize : function(options) {
                this.render();
                this.getData();
            },

            render: function() {
                this.renderTable();
            },

            getData: function() {
                $.ajax({
                    type: "POST",
                    url : "/get-data",
                    data : {
                        "token" : this.$el.find('input').val()
                    },
                    dataType : "json",
                    success : this.onSuccess.bind(this),
                    error : this.onError.bind(this)
                })
            },

            onSuccess: function(response) {

                this.renderTable(response);

            },

            renderTable : function(response = {}) {

                var templatePath = this.templateName['dashboard'];

                this.$el.html(window.JST[templatePath]({
                    contacts : response.data
                }));  

                if(response.success) {
                    this.$el.find('.active').hide();
                    this.$el.find('.in-active').show();
                }      
            },

            onError : function(error) {
                console.log('error occured', error);
            }
        })

    });
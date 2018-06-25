
define('patients', 
    ['backbone', 'templates/patient'],
    function(Backbone) {

        utils.loadCSS('/styles/patients.css');

        return Backbone.View.extend({

            el : '#main-content',

            tabIndex : 3,

            templateName :  {
                'eligibility' : 'templates/patientEligibility.handlebars',
                'legal' : 'templates/patientLegal.handlebars',
                'how-to-register' : 'templates/patientRegistration.handlebars',
                'treatment-costs' : 'templates/patientCost.handlebars',
                'forms' : 'templates/patientForms.handlebars'
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
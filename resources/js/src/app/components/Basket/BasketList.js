var ResourceService       = require('services/ResourceService');

Vue.component('basket-list', {

    template: '#vue-basket-list',

    props: [
        "size"
    ],

    data: function()
    {
        return {
            basketItems: []
        };
    },

    ready: function()
    {
        ResourceService.bind( "basketItems", this );
        this.size = this.size || "large";
    }
});
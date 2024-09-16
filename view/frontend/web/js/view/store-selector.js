define([
    'jquery',
    'Magento_InventoryInStorePickupFrontend/js/model/pickup-locations-service'
], function ($, pickupLocationsService) {
    'use strict';

    return Component.extend({
        initialize: function () {
            this._super();

            var searchTerm = '';
            this.updateNearbyLocations(searchTerm);

            return this;
        },

        selectPickupLocation: function (location) {
            pickupLocationsService.selectForShipping(location);
        }
    });
});
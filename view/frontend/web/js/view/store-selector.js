define([
    'Magento_InventoryInStorePickupFrontend/js/model/pickup-locations-service'
], function (pickupLocationsService) {
    'use strict';

    return function (Component) {
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
    }
});
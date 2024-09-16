var config = {
    map: {
        '*': {
            'Magento_InventoryInStorePickupFrontend/template/store-selector.html': 'SweatyApe_StoreSelector/template/store-selector.html',
            'Magento_InventoryInStorePickupFrontend/template/store-selector/popup.html': 'SweatyApe_StoreSelector/template/store-selector/popup.html'
        }
    },
    config: {
        mixins: {
            'Magento_InventoryInStorePickupFrontend/js/view/store-selector': 'SweatyApe_StoreSelector/js/view/store-selector'
        }
    }
};
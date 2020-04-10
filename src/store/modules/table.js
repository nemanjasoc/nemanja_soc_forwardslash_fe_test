const state = {
    selectBrands:[
        {
            value: 1,
            option: 'Garmin'
        },
        {
            value: 2,
            option: 'Alfred Sung'
        },
        {
            value: 3,
            option: 'Wrangler'
        },
        {
            value: 4,
            option: 'G-Shock'
        },
        {
            value: 5,
            option: 'Schaffhausen'
        }
    ],
    selectColors:[
        {
            value: 1,
            option: 'Black'
        },
        {
            value: 2,
            option: 'Gray'
        },
        {
            value: 3,
            option: 'White'
        },
        {
            value: 4,
            option: 'Brown'
        },
        {
            value: 5,
            option: 'Blue'
        }
    ],
    selectMaterials:[
        {
            value: 1,
            option: 'Plastic'
        },
        {
            value: 2,
            option: 'Metal'
        },
        {
            value: 3,
            option: 'Gum'
        },
        {
            value: 4,
            option: 'Gilt'
        }
    ],
    selectFeatures:[
        {
            value: 1,
            option: 'Waterproof'
        },
        {
            value: 2,
            option: 'Stopwatch'
        },
        {
            value: 3,
            option: 'Automatic'
        },
        {
            value: 4,
            option: 'Manual'
        }
    ],
    selectPrices:[
        {
            value: 1,
            option: '$100.00 - $1,000.00'
        },
        {
            value: 2,
            option: '$1,000.00 - $2,000.00'
        },
        {
            value: 3,
            option: '$2,000.00 - $4,000.00'
        },
        {
            value: 4,
            option: '$4,000.00 - $6,000.00'
        },
        {
            value: 5,
            option: '$6,000.00 - $8,000.00'
        },
        {
            value: 6,
            option: '$8,000.00 - $10,000.00'
        },
        {
            value: 7,
            option: '> $10,000.00'
        }
    ],
    selectGenders:[
        {
            value: 1,
            option: 'Male'
        },
        {
            value: 2,
            option: 'Female'
        },
        {
            value: 3,
            option: 'Other'
        }
    ],
    tableRows:[
        {
            id: 1,
            img_table_watch: 'table-watch1.png',
            brand_name: 'ALFRED SUNG',
            brand_collection: 'Slim Collection Series 5',
            item_no: 'AS7104SL-1A',
            listing_price: 3700,
            wholesale_price: 3700,
            quantity: 0,
            low_on_stock: true,
            isBrown: false,
            showMore: false,
            added: false,
            isDecreaseQuantityDisabled: true,
            isAddButtonDisabled: false
        },
        {
            id: 2,
            img_table_watch: 'table-watch2.png',
            brand_name: 'GARMIN',
            brand_collection: 'Classic Collection',
            item_no: 'AW2304WE-9Q',
            listing_price: 4200,
            wholesale_price: 4000,
            quantity: 0,
            isBrown: false,
            showMore: false,
            added: false,
            isDecreaseQuantityDisabled: true,
            isAddButtonDisabled: false
        },
        {
            id: 3,
            img_table_watch: 'table-watch1.png',
            brand_name: 'ALFRED SUNG',
            brand_collection: 'Slim Collection Series 5',
            item_no: 'AS7104SL-1A',
            listing_price: 3700,
            wholesale_price: 3700,
            quantity: 0,
            isBrown: false,
            showMore: false,
            added: false,
            isDecreaseQuantityDisabled: true,
            isAddButtonDisabled: false
        },
        {
            id: 4,
            img_table_watch: 'table-watch3.png',
            brand_name: 'WRANGLER',
            brand_collection: 'Western Collection',
            item_no: 'AS7494SL-8R',
            listing_price: 5600,
            wholesale_price: 5200,
            quantity: 0,
            isBrown: false,
            showMore: false,
            added: false,
            isDecreaseQuantityDisabled: true,
            isAddButtonDisabled: false
        },
        {
            id: 5,
            img_table_watch: 'table-watch1.png',
            brand_name: 'ALFRED SUNG',
            brand_collection: 'Slim Collection Series 5',
            item_no: 'AS7104SL-1A',
            listing_price: 3700,
            wholesale_price: 3700,
            quantity: 0,
            out_of_stock: true,
            isBrown: false,
            showMore: false,
            added: false,
            isDecreaseQuantityDisabled: true,
            isAddButtonDisabled: false
        },
        {
            id: 6,
            img_table_watch: 'table-watch4.png',
            brand_name: 'GARMIN',
            brand_collection: 'Classic Collection Series 6',
            item_no: 'AS2E0G8E-2U',
            listing_price: 2100,
            wholesale_price: 2000,
            quantity: 0,
            isBrown: false,
            showMore: false,
            added: false,
            isDecreaseQuantityDisabled: true,
            isAddButtonDisabled: false
        }
    ]
}

const getters = {
    selectBrands: function (state) {
        return state.selectBrands;
    },
    selectColors: function (state) {
        return state.selectColors;
    },
    selectMaterials: function (state) {
        return state.selectMaterials;
    },
    selectFeatures: function (state) {
        return state.selectFeatures;
    },
    selectPrices: function (state) {
        return state.selectPrices;
    },
    selectGenders: function (state) {
        return state.selectGenders;
    },
    tableRows: function (state) {
        return state.tableRows;
    }
}

export default {
    state,
    getters
}

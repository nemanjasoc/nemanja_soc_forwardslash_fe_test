const state = {
    selectBrands:[
        {
            value: 0,
            name: 'Brand:'
        },
        {
            value: 1,
            name: 'Garmin'
        },
        {
            value: 2,
            name: 'Alfred Sung'
        },
        {
            value: 3,
            name: 'Wrangler'
        },
        {
            value: 4,
            name: 'G-Shock'
        },
        {
            value: 5,
            name: 'Schaffhausen'
        }
    ],
    selectColours:[
        {
            value: 0,
            color: 'Colours:'
        },
        {
            value: 1,
            color: 'Black'
        },
        {
            value: 2,
            color: 'Gray'
        },
        {
            value: 3,
            color: 'White'
        },
        {
            value: 4,
            color: 'Brown'
        },
        {
            value: 5,
            color: 'Blue'
        }
    ],
    selectMaterials:[
        {
            value: 0,
            material: 'Materials:'
        },
        {
            value: 1,
            material: 'Plastic'
        },
        {
            value: 2,
            material: 'Metal'
        },
        {
            value: 3,
            material: 'Gum'
        },
        {
            value: 4,
            material: 'Gilt'
        }
    ],
    selectFeatures:[
        {
            value: 0,
            feature: 'Features:'
        },
        {
            value: 1,
            feature: 'Waterproof'
        },
        {
            value: 2,
            feature: 'Stopwatch'
        },
        {
            value: 3,
            feature: 'Automatic'
        },
        {
            value: 4,
            feature: 'Manual'
        }
    ],
    selectPrices:[
        {
            value: 0,
            price: 'Price:'
        },
        {
            value: 1,
            price: '$100.00 - $1,000.00'
        },
        {
            value: 2,
            price: '$1,000.00 - $2,000.00'
        },
        {
            value: 3,
            price: '$2,000.00 - $4,000.00'
        },
        {
            value: 4,
            price: '$4,000.00 - $6,000.00'
        },
        {
            value: 5,
            price: '$6,000.00 - $8,000.00'
        },
        {
            value: 6,
            price: '$8,000.00 - $10,000.00'
        },
        {
            value: 7,
            price: '> $10,000.00'
        }
    ],
    selectGenders:[
        {
            value: 0,
            gender: 'Gender:'
        },
        {
            value: 1,
            gender: 'Male'
        },
        {
            value: 2,
            gender: 'Female'
        },
        {
            value: 3,
            gender: 'Other'
        }
    ],
    tableRows:[
        {
            id: 1,
            img_table_watch: 'table-watch1.png',
            brand_name: 'ALFRED SUNG',
            brand_collection: 'Slim Collection Series 5',
            item_no: 'AS7104SL-1A',
            listing_price: '$3,700.00',
            wholesale_price: '$3,700.00',
            caret_number: 0,
            low_on_stock: true,
            isBrown: false,
            showMore: false
        },
        {
            id: 2,
            img_table_watch: 'table-watch2.png',
            brand_name: 'GARMIN',
            brand_collection: 'Classic Collection',
            item_no: 'AW2304WE-9Q',
            listing_price: '$4,200.00',
            wholesale_price: '$4,000.00',
            caret_number: 4,
            isBrown: false,
            showMore: false
        },
        {
            id: 3,
            img_table_watch: 'table-watch1.png',
            brand_name: 'ALFRED SUNG',
            brand_collection: 'Slim Collection Series 5',
            item_no: 'AS7104SL-1A',
            listing_price: '$3,700.00',
            wholesale_price: '$3,700.00',
            caret_number: 0,
            isBrown: false,
            showMore: false
        },
        {
            id: 4,
            img_table_watch: 'table-watch3.png',
            brand_name: 'WRANGLER',
            brand_collection: 'Western Collection',
            item_no: 'AS7494SL-8R',
            listing_price: '$5,600.00',
            wholesale_price: '$5,200.00',
            caret_number: 0,
            isBrown: false,
            showMore: false
        },
        {
            id: 5,
            img_table_watch: 'table-watch1.png',
            brand_name: 'ALFRED SUNG',
            brand_collection: 'Slim Collection Series 5',
            item_no: 'AS7104SL-1A',
            listing_price: '$3,700.00',
            wholesale_price: '$3,700.00',
            caret_number: 0,
            out_of_stock: true,
            isBrown: false,
            showMore: false
        },
        {
            id: 6,
            img_table_watch: 'table-watch4.png',
            brand_name: 'GARMIN',
            brand_collection: 'Classic Collection Series 6',
            item_no: 'AS2E0G8E-2U',
            listing_price: '$2,100.00',
            wholesale_price: '$2,000.00',
            caret_number: 0,
            isBrown: false,
            showMore: false
        }
    ]
}

const getters = {
    selectBrands: function (state) {
        return state.selectBrands;
    },
    selectColours: function (state) {
        return state.selectColours;
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

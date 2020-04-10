const state = {
    slides:[
        {
            id: 1,
            label: 'G-shock',
            title: 'Venice silver automatic',
            button_title: 'View watch',
            title_explore: 'Explore G-SHOCK',
            img_watch: 'slider-watch.png'
        },
        {
            id: 2,
            label: 'G-shock',
            title: 'Venice silver automatic',
            button_title: 'View watch',
            title_explore: 'Explore G-SHOCK',
            img_watch: 'slider-watch.png'
        },
        {
            id: 3,
            label: 'G-shock',
            title: 'Venice silver automatic',
            button_title: 'View watch',
            title_explore: 'Explore G-SHOCK',
            img_watch: 'slider-watch.png'
        },
        {
            id: 4,
            label: 'G-shock',
            title: 'Venice silver automatic',
            button_title: 'View watch',
            title_explore: 'Explore G-SHOCK',
            img_watch: 'slider-watch.png'
        }
    ],
    thumbnailImages: [
        {
            id: '1',
            img_thumbnail_watch: 'table-watch1.png'
        },
        {
            id: '2',
            img_thumbnail_watch: 'thumbnail-watch.png'
        },
        {
            id: '3',
            img_thumbnail_watch: 'table-watch3.png'
        }
    ]
}

const getters = {
    slides: function (state) {
        return state.slides;
    },    
    thumbnailImages: function (state) {
        return state.thumbnailImages;
    }
}

export default {
    state,
    getters
}

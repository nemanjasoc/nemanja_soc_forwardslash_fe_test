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
    thumbnails: [
        {
            id: 1,
            img_thumbnail_watch: 'thumbnail-watch.png'
        }
    ]
}

const getters = {
    slides: function (state) {
        return state.slides;
    },    
    thumbnails: function (state) {
        return state.thumbnails;
    }
}

export default {
    state,
    getters
}

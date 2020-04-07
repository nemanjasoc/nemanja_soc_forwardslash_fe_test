<template>
    <div class="banner-container">
        <carousel paginationPosition="bottom" 
            :perPageCustom="[[200, 1]]" 
            :paginationPadding=6 
            paginationColor="#ddccb8" 
            paginationActiveColor="#a0765b">
            <slide v-for="slide in slides" :key="slide.id">
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <span class="slide-label">{{ slide.label }}</span>
                        <span class="slide-title">{{ slide.title }}</span>
                        <div class="button-wrapper">
                            <button class="slide-button">{{ slide.button_title }}</button>
                            <span class="title-explore">{{ slide.title_explore }}</span>
                            <img class="explore-arrow" src="../../assets/images/arrow-right.png" alt="explore-arrow">
                        </div>
                    </div>
                    <img class="banner-watch" :src="getImgUrl(slide.img_watch)" :alt="slide.img_watch">
                </div>
            </slide>
        </carousel>

        <div class="slider-boxes">
            <div class="left-box">
                <i class="fa fa-long-arrow-left" aria-hidden="true" @mouseover="showPreviousWatchThumbnailImage" @mouseleave="hidePreviousWatchThumbnailImage"></i>
            </div>
            <div class="right-box">
                <i class="fa fa-long-arrow-right" aria-hidden="true" @mouseover="showNextWatchThumbnailImage" @mouseleave="hideNextWatchThumbnailImage"></i>
            </div>     
            <div class="watch-thumbnail">
                <img class="thumbnail-watch-img" :src="('src/assets/images/' + watchThumbnailImage)" alt="thumbnail-img">
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'slides',
            'thumbnailImages'
        ])
    },
    data() {
        return {
            watchThumbnailImage: 'thumbnail-watch.png'
        }
    },
    methods: {
        showPreviousWatchThumbnailImage() {
            var newImage = '';
            
            for (let i = 0; i < this.thumbnailImages.length; i++) {
                let currentThumbnailImage = this.thumbnailImages[i];
                let prevThumbnailImage = this.thumbnailImages[i-1];
               
                if (currentThumbnailImage.img_thumbnail_watch.indexOf(this.watchThumbnailImage) != -1) {
                    newImage = prevThumbnailImage;
                }
            }

            this.watchThumbnailImage = newImage.img_thumbnail_watch;
        },
        hidePreviousWatchThumbnailImage() {
            var newImage = '';
            
            for (let i = 0; i < this.thumbnailImages.length; i++) {
                let currentThumbnailImage = this.thumbnailImages[i];
                let nextThumbnailImage = this.thumbnailImages[i+1];
               
                if (currentThumbnailImage.img_thumbnail_watch.indexOf(this.watchThumbnailImage) != -1) {
                    newImage = nextThumbnailImage;
                }
            }

            this.watchThumbnailImage = newImage.img_thumbnail_watch;
        },
        showNextWatchThumbnailImage() {
            var newImage = '';
            
            for (let i = 0; i < this.thumbnailImages.length; i++) {
                let currentThumbnailImage = this.thumbnailImages[i];
                let nextThumbnailImage = this.thumbnailImages[i+1];
               
                if (currentThumbnailImage.img_thumbnail_watch.indexOf(this.watchThumbnailImage) != -1) {
                    newImage = nextThumbnailImage;
                }
            }

            this.watchThumbnailImage = newImage.img_thumbnail_watch;
        },
        hideNextWatchThumbnailImage() {
            var newImage = '';
            
            for (let i = 0; i < this.thumbnailImages.length; i++) {
                let currentThumbnailImage = this.thumbnailImages[i];
                let prevThumbnailImage = this.thumbnailImages[i-1];
               
                if (currentThumbnailImage.img_thumbnail_watch.indexOf(this.watchThumbnailImage) != -1) {
                    newImage = prevThumbnailImage;
                }
            }

            this.watchThumbnailImage = newImage.img_thumbnail_watch;
        },
        getImgUrl(pic) {
            return require('../../assets/images/'+pic)
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/variables';
@import 'src/scss/mixins';

.banner-container {
    background-image: url("../../assets/images/banner-image.png");
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 809px;
    border-bottom: 3px solid $base-blue;
    position: relative;
    margin-top: 78px;
}

.VueCarousel-pagination[data-v-438fd353] {
    width: 50%;
    text-align: center;
    position: absolute;
    left: 25px;
    top: 280px;
}

.VueCarousel-dot-container[data-v-438fd353] {
    display: flex;
    flex-direction: column;
}

.slide-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 10%;
    width: 68%;
}

.slide-wrapper {
    display: flex;
    flex-direction: column;
    width: 48%;
}

.banner-watch {
    width: 263px;
    height: 427px;
    background-color: transparent;
}

.button-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.slide-label {
    text-transform: uppercase;
    color: #a0765b;
    font-family: "Sample";
    font-size: 21px;
}

.slide-title {
    color: #304061;
    font-size: 82px;
    margin: 31px 0 90px 0;
    font-family: "Sample";
    letter-spacing: 3px;
    line-height: 89px;
}

.slide-button {
    color: #304061;
    max-width: 238px;
    width: 100%;
    height: 65px;
    outline: none;
    border: none;
    background-color: #ffffff;
    margin-right: 40px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 16px;
    letter-spacing: 5px;
    @include box-shadow(0px 10px 35px 0px #ddccb8);
}

.fa-long-arrow-right {
    color: #a0765b;
}

.title-explore {
    color: #a67e64;
    margin-right: 20px;
    font-size: 19px;
}

.slider-boxes {
    display: flex;
    position: absolute;
    left: 10%;
    bottom: 0;
}

.left-box {
    width: 114px;
    height: 114px;
    background-color: #ddccb8;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a0765b;
}

.right-box {
    width: 114px;
    height: 114px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b18e78
}

.watch-thumbnail {
    width: 114px;
    height: 114px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide-watch {
    display: flex;
}

@media only screen and (max-width: 1400px) {
    .slide-container {
        padding-top: 15%;
    }

    .slide-label {
        font-size: 18px;
    }

    .banner-watch {
        width: 200px;
        height: 324px;
    }

    .slide-title {
        line-height: 70px;
        margin: 31px 0 25px 0;
        font-size: 65px;
    }

    .slide-button {
        margin: 15px 15px 20px 0;
        font-size: 13px;
        max-width: 180px;
        height: 45px;
    }

    .title-explore {
        font-size: 17px;
    }
}

@media only screen and (max-width: 992px) {
    .slide-container {
        width: 100%;
        padding-top: 20%;
    }
}

@media only screen and (max-width: 768px) {
    .slide-container {
        padding-top: 25%;
    }

    .slide-label {
        font-size: 16px;
    }

    .banner-watch {
        width: 150px;
        height: 243px;
    }

    .slide-title {
        line-height: 70px;
        margin: 31px 0 25px 0;
        font-size: 55px;
    }

    .slide-button {
        font-size: 12px;
        max-width: 160px;
        height: 35px;
    }

    .title-explore {
        font-size: 15px;
    }

    .explore-arrow {
        width: 27px;
    }
}

@media only screen and (max-width: 600px) {
    .slide-label {
        font-size: 15px;
    }

    .banner-watch {
        width: 130px;
        height: 211px;
    }

    .slide-title {
        line-height: 60px;
        margin: 28px 0 20px 0;
        font-size: 48px;
    }

    .slide-button {
        font-size: 10px;
        max-width: 150px;
        height: 32px;
    }

    .title-explore {
        font-size: 13px;
    }
}

@media only screen and (max-width: 480px) {
    .slide-wrapper {
        width: 73%;
        justify-content: center;
    }

    .left-box,
    .right-box,
    .watch-thumbnail {
        width: 80px;
        height: 80px;
    }

    .thumbnail-watch-img1 {
        width: 32px;
        height: 52px;
    }
}
</style>

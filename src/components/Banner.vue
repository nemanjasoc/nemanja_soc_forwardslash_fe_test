<template>
    <div class="banner-container">
        <carousel paginationPosition="bottom" 
            :perPageCustom="[[200, 1]]" 
            :paginationPadding=6 
            paginationColor="#ddccb8" 
            paginationActiveColor="#a0765b">
            <slide>
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <span class="slide-label">G-shock</span>
                        <span class="slide-title">Venice silver automatic</span>
                        <div class="button-wrapper">
                            <button class="slide-button">View watch</button>
                            <span class="title-explore">Explore G-SHOCK</span>
                            <img class="explore-arrow" src="../assets/images/arrow-right.png" alt="explore-arrow">
                        </div>
                    </div>
                    <img class="banner-watch" src="../assets/images/slider-watch.png" alt="banner-watch">
                </div>
            </slide>

            <slide>
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <span class="slide-label">G-shock</span>
                        <span class="slide-title">Venice silver automatic</span>
                        <div class="button-wrapper">
                            <button class="slide-button">View watch</button>
                            <span class="title-explore">Explore G-SHOCK</span>
                            <img class="explore-arrow" src="../assets/images/arrow-right.png" alt="explore-arrow">
                        </div>
                    </div>
                    <div class="slide-watch">
                        <img class="banner-watch" src="../assets/images/slider-watch.png" alt="banner-watch">
                    </div>
                </div>
            </slide>

            <slide>
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <span class="slide-label">G-shock</span>
                        <span class="slide-title">Venice silver automatic</span>
                        <div class="button-wrapper">
                            <button class="slide-button">View watch</button>
                            <span class="title-explore">Explore G-SHOCK</span>
                            <img class="explore-arrow" src="../assets/images/arrow-right.png" alt="explore-arrow">
                        </div>
                    </div>
                    <img class="banner-watch" src="../assets/images/slider-watch.png" alt="banner-watch">
                </div>
            </slide>

            <slide>
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <span class="slide-label">G-shock</span>
                        <span class="slide-title">Venice silver automatic</span>
                        <div class="button-wrapper">
                            <button class="slide-button">View watch</button>
                            <span class="title-explore">Explore G-SHOCK</span>
                            <img class="explore-arrow" src="../assets/images/arrow-right.png" alt="explore-arrow">
                        </div>
                    </div>
                    <img class="banner-watch" src="../assets/images/slider-watch.png" alt="banner-watch">
                </div>
            </slide>
        </carousel>

        <div class="slider-boxes">
            <div class="left-box">
                <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
            </div>
            <div class="right-box">
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </div>
            <div class="watch-thumbnail">
                <img class="thumbnail-watch-img" src="../assets/images/thumbnail-watch.png" alt="thumbnail-watch">
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss">
.banner-container {
    background-image: url("../assets/images/banner-image.png");
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 809px;
    margin-top: 78px;
    border-bottom: 3px solid#2f4061;
    position: relative;
}

.VueCarousel-pagination[data-v-438fd353] {
    width: 50%;
    text-align: center;
    position: absolute;
    left: 25px;
    top: 280px;
    font-size: 3px;
}

.VueCarousel-dot-container[data-v-438fd353] {
    display: flex;
    margin: 0 auto;
    padding: 0;
    flex-direction: column;
}

.VueCarousel-dot[data-v-438fd353] {
    margin-top: 6px;
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

    .thumbnail-watch-img {
        width: 32px;
        height: 52px;
    }
}
</style>

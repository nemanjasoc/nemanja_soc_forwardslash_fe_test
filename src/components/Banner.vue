<template>
    <div class="banner-container">
        <!--img src="../assets/images/banner-image.png"-->
        <carousel paginationPosition="bottom" :perPageCustom="[[200, 1]]" paginationColor="#ddccb8" paginationActiveColor="#a0765b">
            <slide>
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <span class="slide-label">G-shock</span>
                        <span class="slide-title">Venice silver automatic</span>
                        <div class="button-wrapper">
                            <button class="slide-button">View watch</button>
                            <span class="title-explore">Explore G-shock</span>
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <img src="../assets/images/slider-watch.png">
                </div>
            </slide>
            <slide>
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <span class="slide-label">G-shock</span>
                        <span class="slide-title">Venice silver automatic</span>
                        <div class="button-wrapper">
                            <button class="slide-button">View watch</button>
                            <span class="title-explore">Explore G-shock</span>
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <img src="../assets/images/slider-watch.png">
                </div>
            </slide>
            <slide>
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <span class="slide-label">G-shock</span>
                        <span class="slide-title">Venice silver automatic</span>
                        <div class="button-wrapper">
                            <button class="slide-button">View watch</button>
                            <span class="title-explore">Explore G-shock</span>
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <img src="../assets/images/slider-watch.png">
                </div>
            </slide>
            <slide>
                <div class="slide-container">
                    <div class="slide-wrapper">
                        <span class="slide-label">G-shock</span>
                        <span class="slide-title">Venice silver automatic</span>
                        <div class="button-wrapper">
                            <button class="slide-button">View watch</button>
                            <span class="title-explore">Explore G-shock</span>
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <img src="../assets/images/slider-watch.png">
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>

</script>

<style lang="scss">
/*
img {
    width: 100%;
    height: auto;
    position: relative;
}
*/

.banner-container {
    background-image: url("../assets/images/banner-image.png");
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 809px;
}

.VueCarousel-wrapper {
    width: 100%;
    position: absolute;
    overflow: hidden;
    left: 150px;
    top: 129px;
}

.VueCarousel-pagination[data-v-438fd353] {
    width: 50%;
    text-align: center;
    position: absolute;
    left: 25px;
    top: 200px;
}

.VueCarousel-dot-container[data-v-438fd353] {
    display: flex;
    margin: 0 auto;
    padding: 0;
    flex-direction: column;
}

.slide-container {
    display: flex;
    justify-content: space-around;
    width: 60%;
}

.slide-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.button-wrapper {
    display: flex;
}

.slide-label {
    text-transform: uppercase;
    color: #a0765b;
    font-weight: 600;
}

.slide-title {
    color: #304061;
    font-size: 45px;
    font-weight: 700;
}

.slide-button {
    color: #304061;
    width: 150px;
    height: 35px;
    outline: none;
    border: none;
    background-color: #ffffff;
}

.fa-long-arrow-right {
    color: #a0765b;
}

.title-explore {
    color: #a67e64;
}
</style>

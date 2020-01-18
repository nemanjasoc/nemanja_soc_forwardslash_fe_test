<template>
    <div class="box-container">
        <div class="box-row">
            <img class="box-img" src="../assets/images/box-runner.png" alt="box-runner">
            <div class="empty-box">
                <div class="empty-box-runner-inner">
                    <div class="inner-content">
                        <h1>Lorem Ipsum</h1>
                        <p>Vistatech achieves 20-year milestone as market leader for casio calculators, 
                        electronic organizers, musical instruments, audio equipment, digital
                        cameras, and cash registers. Vistatech achieves 20-year milestone as market
                        leader for casio calculators, electronic organizers, musical instruments,
                        audio equipment, digital cameras, and cash registers Vistatech achieves
                        20-year milestone as market
                        leader</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="box-row">
            <div class="empty-box">
                <div class="empty-box-watch-inner">
                    <div class="inner-content">
                        <h1>Lorem Ipsum</h1>
                        <p>Vistatech achieves 20-year milestone as market leader for casio calculators, 
                        electronic organizers, musical instruments, audio equipment, digital
                        cameras, and cash registers. Vistatech achieves 20-year milestone as market
                        leader for casio calculators, electronic organizers, musical instruments,
                        audio equipment, digital cameras, and cash registers Vistatech achieves
                        20-year milestone as market
                        leader</p>
                    </div>
                </div>
            </div>
            <img class="box-img" src="../assets/images/box-watch.png" alt="box-watch">
        </div>
    </div> 
</template>

<script>
</script>

<style lang="scss">
@import 'src/scss/mixins';
@import 'src/scss/variables';

.box-container {
    display: flex;
    flex-direction: column;
    border-top: 3px solid $base-blue;
}

.box-row {
    display: flex;
    width: 100%;
}

.box-img {
    width: 50%;
    height: auto;
}

.empty-box {
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    position: relative;
}

.empty-box-runner-inner {
    background-color: $main-color;
    right: 20%;
    @include empty-box-inner;

    h1 {
        color: #a9836b;
        font-family: "Sample";
    }

    p {
        color: #4a5874;
    }
}

.inner-content {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    font-size: 1vw;
}

.empty-box-watch-inner {
    background-color: #2f4061;
    left: 20%;
    @include empty-box-inner;

    h1 {
        color: #ffffff;
        font-family: "Sample";
    }

    p {
        color: #ffffff;
    }
}
</style>

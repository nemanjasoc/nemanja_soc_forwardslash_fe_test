<template>
    <div class="box-container">
        <div class="box-first-row">
            <img class="box-runner" src="../assets/images/box-runner.png" alt="box-runner">
            <div class="empty-box-runner">
                <div class="empty-box-runner-inner">
                    <div class="inner-content">
                        <h2>Lorem Ipsum</h2>
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
        
        <div class="box-second-row">
            <div class="empty-box-watch">
                <div class="empty-box-watch-inner">
                    <div class="inner-content">
                        <h2>Lorem Ipsum</h2>
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
            <img class="box-watch" src="../assets/images/box-watch.png" alt="box-watch">
        </div>
    </div> 
</template>

<script>
</script>

<style lang="scss">
.box-container {
    display: flex;
    flex-direction: column;
    border-top: 2px solid #2f4061;
}

.box-first-row {
    display: flex;
    width: 100%;
}

.box-runner {
    width: 50%;
    height: auto;
}

.empty-box-runner {
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    position: relative;
}

.empty-box-runner-inner {
    width: 90%;
    height: 70%;
    background-color: #f5f2ee;
    position: absolute;
    right: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        color: #a9836b;
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

.box-second-row {
    display: flex;
    width: 100%;
}

.box-watch {
    width: 50%;
    height: auto;
}

.empty-box-watch {
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    position: relative;
}

.empty-box-watch-inner {
    width: 90%;
    height: 70%;
    background-color: #2f4061;
    position: absolute;
    left: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ffffff;
}
</style>
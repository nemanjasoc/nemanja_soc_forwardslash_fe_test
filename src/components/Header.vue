<template>
  <header>
    <div class="header">
        <div class="header-left-side">
            <div class="header-title-box">
                <span class="header-title">Ipsums</span>
                <span class="headet-subtitle">Dev test task</span>
            </div>

            <div class="header-second-title-box">
                <span class="header-second-title">Browse products</span>
            </div>

            <span class="title-info">Company info</span>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

        <div class="header-right-side">
            <div class="price-box">
                <div class="cart">
                    <div class="cart-badge">0</div>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>

                <span class="price-title">Total:</span>
                <span class="total-price">0</span>
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                <span class="company-name">Company Name</span>
                <i class="fa fa-caret-down" aria-hidden="true"></i>
            </div>
        </div>
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss">
header {
    height: 75px;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    position: sticky;
}

.header {
    display: flex;
    justify-content: space-around;
}

.header-left-side {
    display: flex;
    align-items: center;
}

.header-right-side {
    display: flex;
    align-items: center;
}

.header-title-box {
    height: 75px;
    border-right: 1px solid #e6e6e6;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
}

.header-title {
    color: #304061;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 5px;
    font-size: 20px;
}

.headet-subtitle {
    color: #304061;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 11px;
}

.header-second-title-box {
    height: 75px;
    border-right: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
}

.header-second-title {
    padding: 0 20px;
    color: #454355;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.title-info {
    padding: 0 6px 0 20px;
    color: #c0a492;
}

.fa-caret-down {
    color: #c0a492;
    padding-right: 20px;
}

.price-box {
    height: 75px;
    border-left: 1px solid #e6e6e6;
    display: flex;
    align-items: center;

    .fa-caret-down {
        padding-right: 20px;
        color: #2f4061;
    }
}

.cart {
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    color: #a67f66;
}

.cart-badge {
    position: absolute;
    padding: 2px;
    border-radius: 50%;
    bottom: 13px;
    left: 29px;
    font-size: 10px;
    width: 10px;
    height: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    background: #2f4061;
    color: #c8cbd4;
}

.price-title {
    padding-right: 5px;
}

.total-price {
    padding-right: 30px;
    color: #a9836b;
}

.company-name {
    padding: 0 6px;
    color: #2f4061;
    font-weight: 600;
}

.fa-user-circle-o {
    color: #a0765b;
    font-size: 22px;
}
</style>

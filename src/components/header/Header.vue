<template>
    <header>
        <div class="header-wrapper">
            <div class="header">
                <div class="header-left-side">
                    <div class="header-title-box">
                        <span class="header-title">Ipsums</span>
                        <span class="header-subtitle">Dev test task</span>
                    </div>

                    <div class="header-second-title-box">
                        <span class="header-second-title">Browse products</span>
                    </div>

                    <span class="title-info">Company info</span>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </div>

                <div class="header-right-side">
                    <div class="price-box">
                        <div class="cart" @click="isSidebarOpen()">
                            <div class="cart-badge">{{ cartWatches.length }}</div>
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                            <div class="preview-boxes">
                                <div class="preview-box" v-for="(cartWatch, index) in cartWatches" :key="cartWatch.id">
                                    <div class="preview-box-body">
                                        <img class="preview-box-watch-img" :src="('src/assets/images/' + cartWatch.img_table_watch)">
                                        <div class="data-watch-wrapper">
                                            <span class="preview-box-watch-name">{{ cartWatch.brand_name }}</span>
                                            <span class="preview-box-watch-collection">{{ cartWatch.brand_collection }}</span>
                                        </div>
                                        <span class="preview-box-watch-no">{{ cartWatch.item_no }}</span>
                                        <div class="remove-header-watch" @click="removeCartWatch(cartWatch)">X</div>
                                    </div>
                                    <span class="preview-box-footer" v-if="index == cartWatches.length - 1">Has been successfully added to your cart!</span>
                                </div>
                            </div>
                        </div>

                        <div class="price-title">Total:
                            <span class="total-price">{{ cartPrice | toCurrency }}</span>
                        </div>
                        
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                        <span class="company-name">Company Name</span>
                        <div class="company-name-chevron">
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>

                <div class="menu-bar">
                    <div class="dropbtn">
                        <i class="fa fa-bars" aria-hidden="true" @click="dropdownMenu = !dropdownMenu"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="dropdown-content" :class="{ inactive: !dropdownMenu }">
            <ul class="dropdown-menu">
                <li class="header-second-title">
                    Browse products
                </li>
                <li>
                    <span class="title-info">Company info</span>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </li>
                <li class="cart" @click="isSidebarOpen()">
                    <div class="cart-badge">{{ cartWatches.length }}</div>
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <div class="price-title">Total:
                        <span class="total-price">{{ cartPrice | toCurrency }}</span>
                    </div>
                    <div class="preview-boxes">
                        <div class="preview-box" v-for="(cartWatch, index) in cartWatches" :key="cartWatch.id">
                            <div class="preview-box-body">
                                <img class="preview-box-watch-img" :src="('src/assets/images/' + cartWatch.img_table_watch)">
                                <div class="data-watch-wrapper">
                                    <span class="preview-box-watch-name">{{ cartWatch.brand_name }}</span>
                                    <span class="preview-box-watch-collection">{{ cartWatch.brand_collection }}</span>
                                </div>
                                <span class="preview-box-watch-no">{{ cartWatch.item_no }}</span>
                                <div class="remove-header-watch" @click="removeCartWatch(cartWatch)">X</div>
                            </div>
                            <span class="preview-box-footer" v-if="index == cartWatches.length - 1">Has been successfully added to your cart!</span>
                        </div>
                    </div>
                </li>
                <li>
                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    <span class="company-name">Company Name</span>
                    <div class="company-name-chevron">
                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </div>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';
import { eventBus } from '../../main';

export default {
    data() {
        return {
            dropdownMenu: false,
            sidebarToggle: false
        }
    },
    computed: {
        ...mapGetters([
            'cartWatches',
            'cartPrice'
        ])
    },
    methods: {
        isSidebarOpen() {
            let isOpen = this.sidebarToggle = !this.sidebarToggle
            eventBus.$emit('sidebarCheck', isOpen);
        },
        removeCartWatch(cartWatch) {
            cartWatch.isAddButtonDisabled = false;
            let newCartWatches = [];

            for (let i = 0; i < this.cartWatches.length; i++) {
                let currentCartWatch = this.cartWatches[i];

                if (currentCartWatch.id !== cartWatch.id) {
                    newCartWatches.push(currentCartWatch)
                }

            }

            let newCartPrice;

            if (cartWatch.quantity === 1) {
                newCartPrice = (this.cartPrice - cartWatch.listing_price);
                cartWatch.quantity = 0;
            } else if (cartWatch.quantity > 1) {
                newCartPrice = (this.cartPrice - (cartWatch.listing_price * cartWatch.quantity));
                cartWatch.quantity = 0;
            }

            this.$store.commit('setCartPrice', newCartPrice);
            this.$store.commit('setCartWatch', newCartWatches);
        }
    }
}
</script>

<style lang="scss">
@import 'src/scss/variables';

header {
    position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2;
}

.header-wrapper {
    height: 78px;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    background: #ffffff;
    height: 78px;
}

.header {
    display: flex;
    justify-content: space-between;
    margin: 0 10% 0 10%;
}

.header-left-side,
.header-right-side {
    display: flex;
    align-items: center;
}

.header-title-box {
    height: 78px;
    border-right: 1px solid #e6e6e6;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-right: 20px;
    font-family: "Sample";
}

.header-title {
    color: $footer-text-color;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 27px;
    letter-spacing: 11px;
}

.header-subtitle {
    color: $footer-text-color;
    text-transform: uppercase;
    font-size: 11px;
    font-family: Verdana, Geneva, sans-serif;
    letter-spacing: 5px;
    word-spacing: 2px;
}

.header-second-title-box {
    height: 78px;
    border-right: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
}

.header-second-title {
    padding: 0 20px;
    color: #454355;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 19px;
}

.title-info {
    padding: 0 6px 0 20px;
    color: #c0a492;
}

.fa-chevron-down {
    color: #c0a492;
    padding-right: 20px;
}

.price-box {
    height: 75px;
    border-left: 1px solid #e6e6e6;
    display: flex;
    align-items: center;

    .fa-chevron-down {
        padding-right: 20px;
        color: $base-blue;
    }
}

.cart {
    padding: 0 20px;
    cursor: pointer;
    position: relative;
    color: #a67f66;

    &:hover {
        .preview-boxes {
            opacity: 1;
        }
    }
}

.fa-shopping-cart {
    font-size: 20px;
}

.cart-badge {
    position: absolute;
    padding: 2px;
    border-radius: 50%;
    bottom: 13px;
    left: 30px;
    font-size: 10px;
    width: 13px;
    height: 13px;
    align-items: center;
    display: flex;
    justify-content: center;
    background: $base-blue;
    color: #c8cbd4;
}

.price-title {
    padding-right: 65px;
    font-size: 12px;
    position: relative;
    margin-top: -24px;
    margin-left: 10px;
    color: #7583a0;
}

.total-price {
    padding-right: 30px;
    color: #a9836b;
    font-size: 17px;
    font-weight: 600;
    position: absolute;
    top: 14px;
    left: 0;
}

.company-name {
    padding: 0 6px;
    color: $base-blue;
    font-weight: 600;
    font-size: 18px;
    word-spacing: -4px;
}

.fa-user-circle-o {
    color: #a0765b;
    font-size: 25px;
}

.menu-bar {
    display: none;
}

.dropdown-content {
    display: none;
}

.preview-boxes {
    opacity: 0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;   
    position: absolute;
    top: 38px;
    right: 0;
}

.preview-box {
    border: 1px solid #dbccb9;
    width: 300px;
    background-color: #ffffff;
}

.preview-box-body {
    width: 100%;
    height: 110px;
    display: flex;

    img {
        width: 35px;
        height: 60px;
    }
}

.preview-box-watch-img {
    padding: 30px 0 0 10px;
}

.data-watch-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    width: 130px;
    margin-left: 10px;
}

.preview-box-watch-name {
    color: #314061;
    font-weight: 600;
    font-size: 15px;
}

.preview-box-watch-collection {
    font-size: 12px;
}

.preview-box-watch-no {
    display: flex;
    font-size: 12px;
    color: #2e4162;
    padding: 38px 5px 0 18px;
}

.remove-header-watch {
    padding-right: 12px;
    padding-top: 8px;
    font-size: 12px;
}

.preview-box-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-top: 1px solid #dbccb9;
    font-size: 12px;
    color: #aab6c6;
}

@media only screen and (max-width: 992px) {
    .header-title-box {
        padding: 0 13px;
    }

    .header-title {
        font-size: 18px;
    }

    .header-subtitle {
        font-size: 8px;
        word-spacing: 0;
    }

    .header-second-title {
        padding: 0 13px;
        font-size: 14px;
    }

    .title-info {
        font-size: 14px;
        padding: 0 6px 0 13px;
    }

    .cart {
        padding: 0 17px;
    }

    .price-title {
        margin-top: -18px;
    }

    .total-price {
        padding-right: 20px;
        font-size: 17px;
    }

    .fa-chevron-down {
        font-size: 14px;
        padding-right: 13px;
    }

    .company-name {
        font-size: 14px;
    }

    .fa-user-circle-o {
        font-size: 20px;
    }
}

@media only screen and (max-width: 768px) {
    .menu-bar {
        display: block;
        cursor: pointer;
        color: $footer-text-color;
        display: flex;
        align-items: center;
        font-size: 22px;
    }

    .header-title-box {
        border: none;
    }

    .header-second-title-box,
    .title-info,
    .fa-chevron-down,
    .header-right-side {
        display: none;
    }

    .dropdown-content {
        display: block;

        &.inactive {
            display: none;
        }
    }

    .dropdown-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #ffffff;
        margin-top: 0;
        border-bottom: 1px solid #e6e6e6;

        li {
            padding: 15px;
            position: relative;
        }

        .header-second-title,
        .title-info,
        .cart,
        .company-name {
            display: block;
        }

        .fa-chevron-down {
            display: block;
            color: #c0a492;
            padding-right: 20px;
            position: absolute;
            right: -18px;
            bottom: 7px;
        }

        .company-name-chevron {
            .fa-chevron-down {
                color: $base-blue;
            }
        }

        .cart-badge {
            position: absolute;
            top: 7px;
            left: 27px;
        }

        .price-title {
            margin-left: 40px;
            margin-top: -26px;
            margin-bottom: 10px;
        }

        .fa-user-circle-o {
            position: absolute;
            left: -12px;
            bottom: 13px;
        }

        .preview-boxes {
            top: 47px;
            left: -69px;
            z-index: 2;
        }
    }
}
</style>

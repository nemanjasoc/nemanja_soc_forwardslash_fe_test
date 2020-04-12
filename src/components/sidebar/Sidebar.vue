<template>
    <aside :class="{ inactive: !isSidebarOpen }">
        <div class="sidebar-header">
            <span>My Cart</span>
        </div>
        <div class="sidebar-body">
            <div class="watch-sidebar-list" v-for="cartWatch in cartWatches" :key="cartWatch.id">
                <div class="remove-sidebar-watch" @click="removeCartWatch(cartWatch)">X</div>
                <div class="data-sidebar-watch-wrapper">
                    <span class="sidebar-watch-name">{{ cartWatch.brand_name }}</span>
                    <span class="sidebar-watch-collection">{{ cartWatch.brand_collection }}</span>
                </div>
                <div class="watch-sidebar-listing-price">{{ cartWatch.listing_price | toCurrency }}</div>
                <div class="quantity">{{ cartWatch.quantity }}</div>
                <div class="carets">
                    <i class="fa fa-caret-up" aria-hidden="true" 
                        @click="increaseWatchNumberAndSum(cartWatch)">
                    </i>
                    <i class="fa fa-caret-down" aria-hidden="true" 
                        @click="decreaseWatchNumberAndSum(cartWatch)" 
                        :class="{ disabled: cartWatch.isDecreaseQuantityDisabled }">
                    </i>
                </div>
            </div>    
        </div>
        <div class="sidebar-footer">
            <div class="sum-container">
                <label>Title:</label>
                <span class="sum">{{ cartPrice | toCurrency }}</span>
            </div>
            <button class="checkout-button">CHECKOUT</button>
        </div>
    </aside>
</template>

<script>
import { eventBus } from '../../main';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            isSidebarOpen: false
        }
    },
    computed: {
        ...mapGetters([
            'cartWatches',
            'cartPrice'
        ])
    },
    created() {
        eventBus.$on('sidebarCheck', (isOpen) => {
            this.isSidebarOpen = isOpen;
        });
    },
    methods: {
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
        },
        increaseWatchNumberAndSum(cartWatch) {
            let newCartWatches = [];
            cartWatch.quantity = cartWatch.quantity + 1;

            for (let i = 0; i < this.cartWatches.length; i++) {
                let currentCartWatch = this.cartWatches[i];

                if (currentCartWatch.id === cartWatch.id) {
                    newCartWatches.push(cartWatch)
                } else {
                    newCartWatches.push(currentCartWatch)
                }

            }

            if (cartWatch.quantity > 1) {
                cartWatch.isDecreaseQuantityDisabled= false;
            }

            let newCartPrice = (this.cartPrice + cartWatch.listing_price);

            this.$store.commit('setCartPrice', newCartPrice);
            this.$store.commit('setCartWatch', newCartWatches);
        },
        decreaseWatchNumberAndSum(cartWatch) {
            let newCartWatches = [];
            
            if (cartWatch.quantity > 0) {
                cartWatch.quantity = cartWatch.quantity - 1;
            }

            for (let i = 0; i < this.cartWatches.length; i++) {
                let currentCartWatch = this.cartWatches[i];

                if (currentCartWatch.id === cartWatch.id) {
                    newCartWatches.push(cartWatch)
                } else {
                    newCartWatches.push(currentCartWatch)
                }

            }

            if (cartWatch.quantity === 1) {
                cartWatch.isDecreaseQuantityDisabled = true;
            }

            let newCartPrice = (this.cartPrice - cartWatch.listing_price);
            
            this.$store.commit('setCartPrice', newCartPrice);
            this.$store.commit('setCartWatch', newCartWatches);
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/variables';

aside {
    width: 305px;
    position: absolute;
    right: 0;
    top: 890px;
    border: 1px solid #d9ceba;
    background-color: #ffffff;
    z-index: 1;
    opacity: 1;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;

    &.inactive {
        opacity: 0;
        z-index: -1;
    }
}

.sidebar-header {
    height: 36px;
    border-bottom: 1px solid #d9ceba;
    display: flex;
    align-items: center;
    padding-left: 12px;
    color: #3c3e53;
    font-weight: 600;
}

.sidebar-body {
    padding-top: 20px;
    border-bottom: 1px solid #d9ceba;
    overflow: auto;
    max-height: 300px;
}

.watch-sidebar-list {
    display: flex;
    align-items: center;
    padding: 15px;
}

.remove-sidebar-watch {
    color: #b5a294;
    font-size: 14px;
    cursor: pointer;
    margin: 8px;
}

.data-sidebar-watch-wrapper {
    display: flex;
    flex-direction: column;
    margin: 8px;
    width: 130px;
}

.sidebar-watch-name {
    color: #323b64;
    font-weight: 600;
    font-size: 14px;
}

.sidebar-watch-collection {
    color: #897769;
    font-size: 12px;
}

.watch-sidebar-listing-price {
    margin: 8px;
    color: #897769;
    font-size: 14px;
    font-weight: 600;
}

.quantity {
    margin: 8px;
    color: #897769;
    font-size: 14px;
    font-weight: 600;
}

.carets {
    display: flex;
    flex-direction: column;
    margin: 8px;
    cursor: pointer;
    color: #897769;
}

.fa-caret-down.disabled {
    opacity: 0.2;
    pointer-events: none;
}

.sidebar-footer {
    height: 42px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.sum-container {
    display: flex;
    flex-direction: column;

    label {
        color: #2e3c57;
    }
}

.sum {
    color: #354461;
    font-weight: 600;
    margin-top: 5px;
}

.checkout-button {
    background-color: $footer-text-color;
    color: #ffffff;
    outline: none;
    border: none;
    width: 120px;
    height: 32px;
    font-size: 11px;
    letter-spacing: 2px;
}
</style>

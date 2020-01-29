<template>
    <div>
        <div class="rectangle">
            <form class="form-input">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input class="input-field" type="text" placeholder="Type here to search...">
            </form>

            <div class="select-wrapper">
                <select v-model="brandItem" @change="selectedBrandOption(brandItem)">
                    <option value="">Brands:</option>
                    <option v-for="selectedBrand in selectBrands" :value="selectedBrand" :key="selectedBrand.value">
                        <label>{{ selectedBrand.option }}</label>
                    </option>
                </select>        
                <select v-model="colorItem" @change="selectedColorOption(colorItem)">
                    <option value="">Colors:</option>
                    <option v-for="selectedColor in selectColors" :value="selectedColor" :key="selectedColor.value">
                        <label>{{ selectedColor.option }}</label>
                    </option>
                </select>      
                <select v-model="materialItem" @change="selectedMaterialOption(materialItem)">
                    <option value="">Materials:</option>
                    <option v-for="selectedMaterial in selectMaterials" :value="selectedMaterial" :key="selectedMaterial.value">
                        <label>{{ selectedMaterial.option }}</label>
                    </option>
                </select>       
                <select v-model="featureItem" @change="selectedFeatureOption(featureItem)">
                    <option value="">Features:</option>
                    <option v-for="selectedFeature in selectFeatures" :value="selectedFeature" :key="selectedFeature.value">
                        <label>{{ selectedFeature.option }}</label>
                    </option>
                </select>
                <select v-model="priceItem" @change="selectedPriceOption(priceItem)">
                    <option value="">Price:</option>
                    <option v-for="selectedPrice in selectPrices" :value="selectedPrice" :key="selectedPrice.value">
                        <label>{{ selectedPrice.option }}</label>
                    </option>
                </select>
                <select v-model="genderItem" @change="selectedGenderOption(genderItem)">
                    <option value="">Gender:</option>
                    <option v-for="selectedGender in selectGenders" :value="selectedGender" :key="selectedGender.value">
                        <label>{{ selectedGender.option }}</label>
                    </option>
                </select>
            </div>
        </div>
        
        <div class="selected-items">
            <div class="selected-item" v-for="brandItem in brandItems">{{ brandItem.option }}
                <span class="close-item" @click="closeBrandItem(brandItem)">X</span>
            </div>
        </div>

        <div class="selected-items">
            <div class="selected-item" v-for="colorItem in colorItems">{{ colorItem.option }}
                <span class="close-item" @click="closeColorItem(colorItem)">X</span>
            </div>
        </div>

        <div class="selected-items">
            <div class="selected-item" v-for="materialItem in materialItems">{{ materialItem.option }}
                <span class="close-item" @click="closeMaterialItem(materialItem)">X</span>
            </div>
        </div>

        <div class="selected-items">
            <div class="selected-item" v-for="featureItem in featureItems">{{ featureItem.option }}
                <span class="close-item" @click="closeFeatureItem(featureItem)">X</span>
            </div>
        </div>

        <div class="selected-items">
            <div class="selected-item" v-for="priceItem in priceItems">{{ priceItem.option }}
                <span class="close-item" @click="closePriceItem(priceItem)">X</span>
            </div>
        </div>

        <div class="selected-items">
            <div class="selected-item" v-for="genderItem in genderItems">{{ genderItem.option }}
                <span class="close-item" @click="closeGenderItem(genderItem)">X</span>
            </div>
        </div>

        <div class="table-wrapper">
            <table>
                <tr>
                    <th></th>
                    <th>Image</th>
                    <th class="third-col">Brand</th>
                    <th>Item No.</th>
                    <th>Listing</th>
                    <th>Wholesale</th>
                    <th>QTY</th>
                    <th></th>
                    <th></th>
                </tr>
                <tbody v-for="tableRow in tableRows" :key="tableRow.id" @click="tableRow.showMore = !tableRow.showMore" :class="{ inactive: !tableRow.showMore }">
                    <tr :class="{ inactive: !tableRow.showMore }">
                        <td>
                            <i @click="tableRow.isBrown = !tableRow.isBrown" class="fa fa-star-o" aria-hidden="true" :class="{ inactive: tableRow.isBrown }"></i>
                            <i @click="tableRow.isBrown = !tableRow.isBrown" class="fa fa-star" aria-hidden="true" :class="{ inactive: !tableRow.isBrown }"></i>
                        </td>
                        <td><img :src="getImgUrl(tableRow.img_table_watch)" :alt="tableRow.img_table_watch"></td>
                        <td class="third-col">
                            <div class="brand-name">{{ tableRow.brand_name }}</div>
                            <span class="brand-collection">{{ tableRow.brand_collection }}</span>
                        </td>
                        <td class="item-no">{{ tableRow.item_no }}</td>
                        <td class="table-price">{{ tableRow.listing_price }}</td>
                        <td class="table-price">{{ tableRow.wholesale_price }}</td>
                        <td>
                            <span class="caret-number">{{ tableRow.caret_number }}</span>
                        </td>
                        <td>
                            <div class="info-stock" v-if="tableRow.low_on_stock">
                                <i class="fa fa-info-circle" aria-hidden="true"></i>
                                <span class="stock-title">Low on stock</span>
                            </div>
                            <button class="add-button" v-if="!tableRow.out_of_stock">ADD</button>
                            <button class="out-stock-button" v-if="tableRow.out_of_stock">
                                <img src="../assets/images/empty-cart.png" alt="table-watch4">
                                OUT OF STOCK
                            </button>
                        </td>
                        <td>
                            <i class="fa fa-chevron-down" aria-hidden="true"></i>
                        </td>
                    </tr>
                    <tr class="row-footer" :class="{ inactive: !tableRow.showMore }">
                        <td>
                            <span>more info</span>
                        </td>
                        <td>
                            <span>more info</span>
                        </td>
                        <td>
                            <span>more info</span>
                        </td>
                        <td>
                            <span>more info</span>
                        </td>
                        <td>
                            <span>more info</span>
                        </td>
                        <td>
                            <span>more info</span>
                        </td>
                        <td>
                            <span>more info</span>
                        </td>
                        <td>
                            <span>more info</span>
                        </td>
                        <td>
                            <a href="http://www.google.com" target="_blank">
                                <i class="fa fa-external-link" aria-hidden="true"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            brandItems: [],
            brandItem: {},
            colorItems: [],
            colorItem: {},
            materialItems: [],
            materialItem: {},
            featureItems: [],
            featureItem: {},
            priceItems: [],
            priceItem: {},
            genderItems: [],
            genderItem: {}
        }
    },
    computed: {
        ...mapGetters([
            'selectBrands',
            'selectColors',
            'selectMaterials',
            'selectFeatures',
            'selectPrices',
            'selectGenders',
            'tableRows'
        ])
    },
    methods: {
        getImgUrl(pic) {
            return require('../assets/images/'+pic)
        },
        selectedBrandOption(brandItem) {
            brandItem.selected = true;
            this.brandItems.push(brandItem)
            console.log('selectedBrandOptionObj: ', this.brandItems)
        },
        closeBrandItem(brandItem) {
            brandItem.selected = false;
            var newBrandItems = [];

            for (let i = 0; i < this.brandItems.length; i++) {
                let currentBrandItem = this.brandItems[i];

                if (currentBrandItem.selected !== brandItem.selected) {
                    newBrandItems.push(currentBrandItem)
                }
            }

            this.brandItems = newBrandItems;
            console.log("newBrandItems: ", this.brandItems)
        },
        selectedColorOption(colorItem) {
            colorItem.selected = true;
            this.colorItems.push(colorItem)
            console.log('selectedColorOptionObj: ', this.colorItems)
        },
        closeColorItem(colorItem) {
            colorItem.selected = false;
            var newColorItems = [];

            for (let i = 0; i < this.colorItems.length; i++) {
                let currentColorItem = this.colorItems[i];

                if (currentColorItem.selected !== colorItem.selected) {
                    newColorItems.push(currentColorItem)
                }
            }

            this.colorItems = newColorItems;
            console.log("newColorItems: ", this.colorItems)
        },
        selectedMaterialOption(materialItem) {
            materialItem.selected = true;
            this.materialItems.push(materialItem)
            console.log('selectedMaterialOptionObj: ', this.materialItems)
        },
        closeMaterialItem(materialItem) {
            materialItem.selected = false;
            var newMaterialItems = [];

            for (let i = 0; i < this.materialItems.length; i++) {
                let currentMaterialItem = this.materialItems[i];

                if (currentMaterialItem.selected !== materialItem.selected) {
                    newMaterialItems.push(currentMaterialItem)
                }
            }

            this.materialItems = newMaterialItems;
            console.log("newMaterialItems: ", this.materialItems)
        },
        selectedFeatureOption(featureItem) {
            featureItem.selected = true;
            this.featureItems.push(featureItem)
            console.log('selectedFeatureOptionObj: ', this.featureItems)
        },
        closeFeatureItem(featureItem) {
            featureItem.selected = false;
            var newFeatureItems = [];

            for (let i = 0; i < this.featureItems.length; i++) {
                let currentFeatureItem = this.featureItems[i];

                if (currentFeatureItem.selected !== featureItem.selected) {
                    newFeatureItems.push(currentFeatureItem)
                }
            }

            this.featureItems = newFeatureItems;
            console.log("newFeatureItems: ", this.featureItems)
        },
        selectedPriceOption(priceItem) {
            priceItem.selected = true;
            this.priceItems.push(priceItem)
            console.log('selectedPriceOptionObj: ', this.priceItems)
        },
        closePriceItem(priceItem) {
            priceItem.selected = false;
            var newPriceItems = [];

            for (let i = 0; i < this.priceItems.length; i++) {
                let currentPriceItem = this.priceItems[i];

                if (currentPriceItem.selected !== priceItem.selected) {
                    newPriceItems.push(currentPriceItem)
                }
            }

            this.priceItems = newPriceItems;
            console.log("newPriceItems: ", this.priceItems)
        },
        selectedGenderOption(genderItem) {
            genderItem.selected = true;
            this.genderItems.push(genderItem)
            console.log('selectedGenderOptionObj: ', this.genderItems)
        },
        closeGenderItem(genderItem) {
            genderItem.selected = false;
            var newGenderItems = [];

            for (let i = 0; i < this.genderItems.length; i++) {
                let currentGenderItem = this.genderItems[i];

                if (currentGenderItem.selected !== genderItem.selected) {
                    newGenderItems.push(currentGenderItem)
                }
            }

            this.genderItems = newGenderItems;
            console.log("newGenderItems: ", this.genderItems)
        }
    }
}
</script>

<style lang="scss">
@import 'src/scss/variables';
@import 'src/scss/mixins';

.rectangle {
    width: 100%;
    height: 166px;
    background-color: $main-color;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.form-input {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
}

.fa-search {
    position: absolute;
    left: calc(10% + 16px);
    top: 12px;
    color: #a9836b;
    font-size: 18px;
}

.input-field {  
    line-height: 40px;
    width: 100%;
    padding-left: 44px;
    border: 1px solid #ddccb8;
    margin: 0 10% 0 10%;
    font-size: 16px;
}

::placeholder {
    color: #ddccb8;
    opacity: 1; 
}

:-ms-input-placeholder { 
    color: #ddccb8;
}

::-ms-input-placeholder { 
    color: #ddccb8;
}

.select-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    margin-top: 18px;
}

select {
    width: 15%;
    height: 41px;
    color: #b4947f;
    border: 1px solid #ddccb8;
    padding-left: 6px;
    font-size: 16px;
}

.selected-items {
    display: flex;
    flex-wrap: wrap;
    margin-left: 10%;
    margin-right: 10%;
}

.selected-item {
    width: 15%;
    height: 41px;
    color: #b4947f;
    border-radius: 25px;
    border: 1px solid #ddccb8;
    padding-left: 6px;
    font-size: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 10px;
    margin-top: 10px;
}

.close-item {
    cursor: pointer;
    margin-right: 10px;
}

.table-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

table {
    border-collapse: collapse;
    width: 80%;
    margin: 2% 10% 0 10%; 
}

tbody {
    border: 1px solid #ddccb8;
    @include box-shadow(0px -10px 35px -7px #f5f2ee);

    &.inactive {
        border: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        -o-box-shadow: none;
        box-shadow: none;
    }

}

tr {
    cursor: pointer;
}

th, td {
    padding: 5px;
    text-align: center;
}

th {
    color: #a3acc0;
    border-bottom: 1px solid #dbcdc4;
}

.row-footer {
    height: 30px;
    border: 1px solid #ddccb8;
    font-size: 12px;
    color: #7583a0;
    @include box-shadow(0px 8px 10px #f5f2ee, -10px 8px 15px #f5f2ee, 10px 8px 15px #f5f2ee);

    &.inactive {
        display: none;
    }
}

.fa-external-link {
    color: #926d56;
}

.third-col {
    text-align: left;
}

.fa-star-o {
    color: #a9836b;
    cursor: pointer;

    &.inactive {
        display: none;
    }
}

.fa-star {
    color: #a9836b;
    cursor: pointer;

    &.inactive {
        display: none;
    }
}

.brand-name {
    color: #304061;
    font-weight: 600;
    font-size: 19px;
}

.brand-collection {
    color: #af8b75;
    font-weight: 500;
    font-size: 16px;
}

.item-no {
    color: #3d4d6c;
    font-weight: 500;
    font-size: 14px;
}

.table-price {
    color: #a9836b;
    font-weight: 500;
    font-size: 15px;
}

.caret-number {
    position: relative;
    margin-right: 14px;
    color: #926d56;
    font-weight: 600;
    font-size: 15px;

    &:before {
        font-family: FontAwesome;
        content: "\f078";
        position: absolute;
        left: 20px;
        top: 11px;
        font-size: 12px;
    }

    &:after {
        font-family: FontAwesome;
        content: "\f077";
        position: absolute;
        left: 20px;
        top: -6px;
        font-size: 12px;
    }
}

.info-stock {
    display: flex;
    justify-content: center;
    margin-bottom: 2px;
}

.stock-title {
    color: #d47517;
    font-size: 12px;
    font-weight: 500;
    padding-left: 4px;
}

.fa-info-circle {
    color: #d47517;
    cursor: pointer;
}

.add-button {
    position: relative;
    height: 50px;
    width: 134px;
    outline: none;
    border: none;
    background-color: $base-blue;
    color: #ffffff;
    padding-right: 32px;
    font-weight: 500;
    margin-left: 5px;
    font-size: 16px;
    letter-spacing: 4px;

    &:after {
        font-family: FontAwesome;
        content: "\f07a";
        position: absolute;
        right: 26px;
    }
}

.out-stock-button {
    background-color: #ffffff;
    outline: none;
    border: none;
    color: $base-blue;
    font-size: 11px;
    font-weight: 600;

    img {
        margin-right: 4px;
        margin-top: 3px;
    }
}

.fa-chevron-down {
    color: #926d56;
    font-size: 12px;
}

@media only screen and (max-width: 992px) {
    .select-wrapper {
        margin-top: 8px;
    }

    select {
        width: 30%;
        margin-bottom: 6px;
    }

    th, td {
        padding: 3px;
    }

    .fa-star-o {
        font-size: 15px;
    }

    td {
        img {
            width: 40px;
            height: 75px;
        }
    }

    th {
        font-size: 15px;
    }

    .brand-name {
        font-size: 18px;
    }

    .brand-collection {
        font-size: 13px;
    }

    .item-no {
        font-size: 14px;
    }

    .table-price {
        font-size: 14px;
    }

    .caret-number {
        margin-right: 13px;
        font-size: 14px;

        &:before {
            font-size: 11px;
        }

        &:after {
            font-size: 11px;
        }
    }

    .stock-title {
        font-size: 10px;
    }

    .fa-info-circle {
        font-size: 13px;
    }

    .add-button {
        height: 32px;
        width: 88px;
        font-size: 12px;

        &:after {
            right: 16px;
        }
    }

    .out-stock-button {
        font-size: 9px;

        img {
            width: 13px;
            height: 13px;
        }
    }

    .fa-chevron-down {
        font-size: 11px;
    }
}

@media only screen and (max-width: 768px) {
    table {
        margin: 2% 8% 0 8%;
    }
}

@media only screen and (max-width: 600px) {
    table {
        margin: 2% 6% 0 6%;
    }

    th, td {
        padding: 1px;
    }

    .fa-star-o {
        font-size: 14px;
        margin-bottom: 8px;
    }

    td {
        img {
            width: 34px;
            height: 64px;
        }
    }

    th {
        font-size: 14px;
    }

    .brand-name {
        font-size: 15px;
    }

    .brand-collection {
        font-size: 11px;
    }

    .item-no {
        font-size: 12px;
    }

    .table-price {
        font-size: 12px;
    }

    .caret-number {
        margin-right: 11px;
        font-size: 12px;

        &:before {
            font-size: 9px;
        }

        &:after {
            font-size: 9px;
        }
    }

    .stock-title {
        font-size: 8px;
    }

    .fa-info-circle {
        font-size: 11px;
    }

    .add-button {
        height: 26px;
        width: 72px;
        font-size: 10px;
        margin-left: 10px;

        &:after {
            font-size: 10px;
            right: 12px;
        }
    }

    .out-stock-button {
        font-size: 8px;

        img {
            width: 11px;
            height: 11px;
        }
    }

    .fa-chevron-down {
        font-size: 9px;
    }
}

@media only screen and (max-width: 480px) {
    table {
        margin: 2% 4% 0 4%;
    }

    .input-field {
        font-size: 12px;
        height: 32px;
    }

    select {
        height: 32px;
        font-size: 12px;
    }

    .fa-search {
        font-size: 14px;
        top: 10px;
    }

    .fa-star-o {
        font-size: 10px;
    }

    td {
        img {
            width: 25px;
            height: 47px;
        }
    }

    th {
        font-size: 9px;
    }

    .brand-name {
        font-size: 9px;
    }

    .brand-collection {
        font-size: 9px;
    }

    .item-no {
        font-size: 8px;
    }

    .table-price {
        font-size: 8px;
    }

    .caret-number {
        margin-right: 8px;
        font-size: 8px;

        &:before {
            font-size: 5px;
        }

        &:after {
            font-size: 5px;
        }
    }

    .stock-title {
        font-size: 6px;
    }

    .fa-info-circle {
        font-size: 8px;
    }

    .add-button {
        height: 16px;
        width: 44px;
        font-size: 8px;

        &:after {
            font-size: 6px;
            top: 4px;
            right: 10px;
        }
    }

    .out-stock-button {
        img {
            width: 9px;
            height: 9px;
        }
    }

    .fa-chevron-down {
        font-size: 6px;
    }
}
</style>

<template>
    <div>
        <div class="rectangle">
            <form class="form-input">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input class="input-field" type="text" placeholder="Type here to search...">
            </form>

            <div class="select-wrapper">
                <select>
                    <option value="0">Brand:</option>
                    <option value="1">Garmin</option>
                    <option value="2">Alfred Sung</option>
                    <option value="3">Wrangler</option>
                    <option value="4">G-Shock</option>
                    <option value="5">Schaffhausen</option>
                </select>        
                <select>
                    <option value="0">Colours:</option>
                    <option value="1">Black</option>
                    <option value="2">Gray</option>
                    <option value="3">White</option>
                    <option value="4">Brown</option>
                    <option value="5">Blue</option>
                </select>      
                <select>
                    <option value="0">Material:</option>
                    <option value="1">Plastic</option>
                    <option value="2">Metal</option>
                    <option value="3">Gum</option>
                    <option value="4">Gilt</option>
                </select>       
                <select>
                    <option value="0">Features:</option>
                    <option value="1">Waterproof</option>
                    <option value="2">Stopwatch</option>
                    <option value="3">Automatic</option>
                    <option value="3">Manual</option>
                </select>
                <select>
                    <option value="0">Price:</option>
                    <option value="1">$100.00 - $1,000.00</option>
                    <option value="2">$1,000.00 - $2,0000.00</option>
                    <option value="3">$3,000.00 - $4,0000.00</option>
                    <option value="4">$4,000.00 - $5,0000.00</option>
                    <option value="5">$5,000.00 - $10,0000.00</option>
                    <option value="5"> > $10,000.00</option>
                </select>
                <select>
                    <option value="0">Gender:</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                </select>
            </div>
        </div>
        
        <div class="selected-items">

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
            <tr>
                <td><i class="fa fa-star-o" aria-hidden="true"></i></td>
                <td><img src="../assets/images/table-watch1.png" alt="table-watch1"></td>
                <td class="third-col">
                    <div class="brand-name">ALFRED SUNG</div>
                    <span class="brand-collection">Slim Collection Series 5</span>
                </td>
                <td class="item-no">AS7104SL-1A</td>
                <td class="table-price">$3,700.00</td>
                <td class="table-price">$3,700.00</td>
                <td>
                    <span class="caret-number">0</span>
                </td>
                <td>
                    <div class="info-stock">
                        <i class="fa fa-info-circle" aria-hidden="true"></i>
                        <span class="stock-title">Low on stock</span>
                    </div>
                    <button class="add-button">ADD</button>
                </td>
                <td>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </td>
            </tr>
            <tr>
                <td><i class="fa fa-star-o" aria-hidden="true"></i></td>
                <td><img src="../assets/images/table-watch2.png" alt="table-watch2"></td>
                <td class="third-col">
                    <div class="brand-name">GARMIN</div>
                    <span class="brand-collection">Classic Collection</span>
                </td>
                <td class="item-no">AW2304WE-9Q</td>
                <td class="table-price">$4,200.00</td>
                <td class="table-price">$4,000.00</td>
                <td>
                    <span class="caret-number">4</span>
                </td>
                <td>
                    <button class="add-button">ADD</button>
                </td>
                <td>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </td>
            </tr>
            <tr>
                <td><i class="fa fa-star-o" aria-hidden="true"></i></td>
                <td><img src="../assets/images/table-watch1.png" alt="table-watch1"></td>
                <td class="third-col">
                    <div class="brand-name">ALFRED SUNG</div>
                    <span class="brand-collection">Slim Collection Series 5</span>
                </td>
                <td class="item-no">AS7104SL-1A</td>
                <td class="table-price">$3,700.00</td>
                <td class="table-price">$3,700.00</td>
                <td>
                    <span class="caret-number">0</span>
                </td>
                <td>
                    <button class="add-button">ADD</button>
                </td>
                <td>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </td>
            </tr>
            <tr>
                <td><i class="fa fa-star-o" aria-hidden="true"></i></td>
                <td><img src="../assets/images/table-watch3.png" alt="table-watch3"></td>
                <td class="third-col">
                    <div class="brand-name">WRANGLER</div>
                    <span class="brand-collection">Western Collection</span>
                </td>
                <td class="item-no">AS7494SL-8R</td>
                <td class="table-price">$5,600.00</td>
                <td class="table-price">$5,200.00</td>
                <td>
                    <span class="caret-number">0</span>
                </td>
                <td>
                    <button class="add-button">ADD</button>
                </td>
                <td>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </td>
            </tr>
            <tr>
                <td><i class="fa fa-star-o" aria-hidden="true"></i></td>
                <td><img src="../assets/images/table-watch1.png" alt="table-watch1"></td>
                <td class="third-col">
                    <div class="brand-name">ALFRED SUNG</div>
                    <span class="brand-collection">Slim Collection Series 5</span>
                </td>
                <td class="item-no">AS7104SL-1A</td>
                <td class="table-price">$3,700.00</td>
                <td class="table-price">$3,700.00</td>
                <td>
                    <span class="caret-number">0</span>
                </td>
                <td>
                    <button class="out-stock-button">
                        <img src="../assets/images/empty-cart.png" alt="table-watch4">
                        OUT OF STOCK
                    </button>
                </td>
                <td>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </td>
            </tr>
            <tr>
                <td><i class="fa fa-star-o" aria-hidden="true"></i></td>
                <td><img src="../assets/images/table-watch4.png" alt="table-watch4"></td>
                <td class="third-col">
                    <div class="brand-name">GARMIN</div>
                    <span class="brand-collection">Classic Collection Series 6</span>
                </td>
                <td class="item-no">AS2E0G8E-2U</td>
                <td class="table-price">$2,100.00</td>
                <td class="table-price">$2,000.00</td>
                <td>
                    <span class="caret-number">0</span>
                </td>
                <td>
                    <button class="add-button">ADD</button>
                </td>
                <td>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </td>
            </tr>
        </table>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.rectangle {
    width: 100%;
    height: 166px;
    background-color: #f5f2ee;
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

th, td {
    padding: 5px;
    text-align: center;
}

th {
    color: #a3acc0;
    border-bottom: 1px solid #dbcdc4;
}

.third-col {
    text-align: left;
}

.fa-star-o {
    color: #a9836b;
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
}

.add-button {
    position: relative;
    height: 50px;
    width: 134px;
    outline: none;
    border: none;
    background-color: #2f4061;
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
    color: #2f4061;
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

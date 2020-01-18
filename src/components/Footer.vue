<template>
    <footer>
        <div class="colored-rectangle"></div>
        <div class="footer-container">
            <div class="footer-info">
                <h1>LINKS</h1>
                <h4 class="company-title">COMPANY</h4>
                <h4 class="catalogs-title">CATALOGS</h4>
                <h4>Find a dealer</h4>
                <h4>Login / Register</h4>
            </div>

            <div class="footer-info">
                <h1>DEV TEST</h1>
                <h4 class="dev-title">Dev Test</h4>
                <span class="address-title">1421 38</span>
                <span class="address-second-title">Brooklyn,NY</span>
                <h4>11245-5647 USA</h4>
            </div>

            <div class="footer-info">
                <h1>NEWSLETTER</h1>
                <button class="e-mail">EMAIL ADDRESS</button>
            </div>
        </div>

        <div class="footer-text">
            <i class="fa fa-copyright" aria-hidden="true"></i>
            <span class="footer-title">DEVTEST</span>
            <span class="footer-second-title">— 2019 All Right Reserved.</span>
        </div>
    </footer> 
</template>

<script>
</script>

<style lang="scss">
@import 'src/scss/variables';

footer {
    width: 100%;
    height: 486px;
    background-color: $main-color;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.colored-rectangle {
    max-width: 205px;
    height: 10px;
    background-color: #ddccb8;
    margin: 0px auto auto auto;
    width: 100%;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
}

.footer-info {
    width: 33.33%;
    text-align: center;
    position: relative;
    
    &:after {
        content: '';
        background-color: #ddccb8;;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 85%;
        width: 1px;
    }

    &:last-child {
        &:after {
            display: none;
        }
    }

    h1 {
        color: #304061;
        font-family: "Sample";
        font-size: 30px;
        letter-spacing: 10px;
    }
}

h4 {
    color: #304061;
    font-weight: 500;
}

.company-title {
    margin-top: 40px;
    font-size: 19px;
    letter-spacing: 3px;
}

.catalogs-title {
    color: #ab876f;
    font-size: 19px;
    letter-spacing: 2px;
}

.dev-title {
    margin-top: 65px;
}

.address-title {
    position: relative;
    color: #304061;

    &:after {
        content: 'th';
        position: absolute;
        top: -2px;
        right: -10px;
        font-size: 10px;
    }
}

.address-second-title {
    margin-left: 9px;
    color: #304061;
    letter-spacing: 1px;
}

.e-mail {
    max-width: 328px;
    width: 100%;
    height: 75px;
    outline: none;
    border: 1px solid #d9d9d9;
    background-color: transparent;
    padding: 10px;
    margin-top: 80px;
    color: #3a3633;
    font-weight: 600;
    position: relative;
    font-size: 16px;
    letter-spacing: 1px;

    &:before {
        font-family: FontAwesome;
        content: "\F003";
        position: absolute;
        left: 32px;
        top: 26px;
        color: #534f4c;
        font-size: 21px;
    }

    &:after {
        font-family: FontAwesome;
        content: "\f061";
        position: absolute;
        right: 26px;
        color: #d9c7a2;
    }
}

.footer-text {
    margin-top: 90px;
    color: #304061;
    margin: auto auto 20px auto;
}

.footer-title {
    font-weight: 600;
}

.fa-copyright {
    font-size: 14px;
}

@media only screen and (max-width: 1200px) {
    .footer-info {
        h1 {
            font-size: 26px;
            letter-spacing: 8px;
        }
    }

    .company-title {
        font-size: 17px;
        letter-spacing: 2px;
    }

    .catalogs-title {
        font-size: 17px;
    }

    .e-mail {
        max-width: 284px;
        height: 65px;

        &:before {
            top: 20px;
            font-size: 19px;
        }
    }

    .footer-text {
        margin-top: 90px;
        color: #304061;
        margin: auto auto 20px auto;
    }
}

@media only screen and (max-width: 992px) {
    .footer-info {
        h1 {
            font-size: 20px;
            letter-spacing: 6px;
        }
    }

    .company-title {
        font-size: 15px;
        letter-spacing: 1px;
    }

    .catalogs-title {
        font-size: 15px;
    }

    .e-mail {
        max-width: 240px;
        height: 55px;

        &:before {
            top: 16px;
            left: 15px;
            font-size: 17px;
        }
    }
}

@media only screen and (max-width: 768px) {
    .colored-rectangle {
        display: none;
    }
    
    .footer-info {
        width: 100%;

        h1 {
            font-size: 18px;
            letter-spacing: 4px;
        }

        &:after {
            display: none;
        }
    }

    .company-title {
        margin-top: 10px;
        font-size: 13px;
    }

    .catalogs-title {
        font-size: 13px;
    }

    .dev-title {
        margin-top: 10px;
    }

    .e-mail {
        margin-top: 0px;
        max-width: 228px;
        height: 36px;
        font-size: 14px;
        margin-bottom: 8px;

        &:before {
            top: 11px;
            font-size: 14px;
        }
    }

    .footer-text {
        margin-top: 5px;
    }

    .footer-title {
        font-size: 13px;
    }

    .fa-copyright {
        font-size: 13px;
    }
}
</style>

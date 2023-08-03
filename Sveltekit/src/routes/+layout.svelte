<script>
    import Logo from "/images/logo.svg";
    import "../../src/global.css";
</script>

<header>
    <div class="corner-lines">
        <a href="#" class="logo">
            <img src={Logo} alt="" />
        </a>
        <div class="lines">
            <div />
            <div />
            <div />
        </div>
    </div>
</header>

<slot />

<footer>
    <div class="corner-lines">
        <a href="#" class="logo">
            <div />
        </a>
        <div class="lines">
            <div />
            <div />
            <div />
        </div>
    </div>
</footer>

<style lang="scss">
    header {
        .corner-lines {
            height: 203px;
            width: 203px;
            position: fixed;
            top: 0;
            left: 0;
            margin: 32px;

            .logo {
                img {
                    width: 64px;
                    transform: rotate(-45deg);
                    margin: 32px;
                }
            }

            .lines {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                div {
                    background: white;
                    display: block;
                    position: absolute;

                    &:nth-child(1) {
                        top: 0;
                        left: 50px;
                        width: calc(100% - 50px);
                        height: 1px;
                    }

                    &:nth-child(2) {
                        left: 0;
                        top: 50px;
                        height: calc(100% - 50px);
                        width: 1px;
                    }

                    &:nth-child(3) {
                        left: 0;
                        top: -20px;
                        height: 70px;
                        width: 1.5px;
                        transform: rotate(45deg);
                        transform-origin: bottom;
                    }
                }
            }
        }
    }

    footer {
        .corner-lines {
            height: 203px;
            width: 203px;
            position: fixed;
            bottom: 0;
            right: 0;
            margin: 32px;
            display: flex;
            justify-content: end;
            align-items: end;

            .logo {
                div {
                    margin: 32px;
                    transform: rotate(-225deg);
                    border: 32px solid transparent;
                    border-top-color: white;
                }
            }

            .lines {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                div {
                    background: white;
                    display: block;
                    position: absolute;

                    &:nth-child(1) {
                        bottom: 0;
                        right: 50px;
                        width: calc(100% - 50px);
                        height: 1px;
                    }

                    &:nth-child(2) {
                        right: 0;
                        bottom: 50px;
                        height: calc(100% - 50px);
                        width: 1px;
                    }

                    &:nth-child(3) {
                        right: 0;
                        bottom: -20px;
                        height: 70px;
                        width: 1.5px;
                        transform: rotate(45deg);
                        transform-origin: top;
                    }
                }
            }
        }
    }
</style>

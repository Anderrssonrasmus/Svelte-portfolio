<script lang="js">
    import Barcode from "/images/barcode.png";
    import Logo from "/images/logo.svg";
</script>

<section class="hero">
    <div class="titleCard">
        <h1>Rasmus Andersson</h1>
        <h2>Portfolio_</h2>
    </div>
    <div class="barcode">
        <img srcset={Barcode} alt="" />
        <a href="#">Continue</a>
    </div>
</section>

<section class="projects">
    <h2 class="sideHeading">Projects</h2>
    <div class="project-list">
        <div class="project">
            <p>Web development & Design</p>
            <a href="#">Project #1</a>
            <img src={Barcode} alt="">
            <span class="line"></span>
        </div>
        <div class="project">
            <p>Web development & Design</p>
            <a href="#">Project #1</a>
            <img src={Barcode} alt="">
            <span class="line"></span>
        </div>
        <div class="project">
            <p>Web development & Design</p>
            <a href="#">Project #1</a>
            <img src={Barcode} alt="">
            <span class="line"></span>
        </div>
        <div class="project">
            <p>Web development & Design</p>
            <a href="#">Project #1</a>
            <img src={Barcode} alt="">
            <span class="line"></span>
        </div>
        <div class="project">
            <p>Web development & Design</p>
            <a href="#">Project #1</a>
            <img src={Barcode} alt="">
            <span class="line"></span>
        </div>
    </div>
    <div class="preview">
        <img src={Logo} alt="">
    </div>
</section>

<style lang="scss">
    .titleCard {
        font-family: "Kleenmax";
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -75%);
        gap: 32px;

        h1 {
            font-size: 128px;
        }

        h2 {
            font-size: 64px;
            color: transparent;
            -webkit-text-stroke: 1px white;
        }
    }

    .barcode {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        a {
            color: white;
            mix-blend-mode: difference;
            text-decoration: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -75%);
            font-size: 64px;
            text-transform: uppercase;
            font-family: "Krona";
        }

        img {
            height: 213px;
        }
    }

    .projects {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .project-list {
            height: 600px;
            overflow-y: scroll;
            aspect-ratio: 1 / 1;
            display: flex;
            flex-direction: column-reverse;
            justify-content: start;

            .project {
                color: white;
                font-family: "Krona";
                display: flex;
                flex-direction: column;
                row-gap: 8px;
                position: relative;
                padding: 20px 20px 24px 20px;
                background: black;
                transition: margin 0.5s ease-in-out;
                
                &:not(:last-of-type) {
                    margin-top: -64px;
                }

                p{
                    text-transform: uppercase;
                    font-size: 16px;
                }

                a {
                    font-size: 24px;
                    color: white;
                    text-decoration: none;
                }

                img {
                    width: 100%;
                    height: 48px;
                    margin-top: 8px;
                }

                span.line {
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    height: 32px;
                    width: 1.5px;
                    transform: rotate(-45deg);
                    transform-origin: top left;
                    background: white;
                }

                &:hover {
                    &:after {
                        background: #F4D314;

                    }

                    &:hover:before {
                        background: #F4D314;

                    }

                    .line {
                        background: #F4D314;

                    }

                    a {
                        color: #F4D314;
                    }

                    margin-top: 0;
                }

                &:after {
                    content:"";
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 22px;
                    width: 1px;
                    background: white;
                }

                &:before {
                    content:"";
                    position: absolute;
                    bottom: 0;
                    left: 22px;
                    right: 0;
                    height: 1px;
                    background: white;
                }
            }
        }

        .preview {
            width: 600px;
            aspect-ratio: 1 / 1;
            border: 1px solid white;
            position: relative;

            &:after {
                content:"Awaiting user input...";
                position: absolute;
                top: calc(50% - 200px);
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                opacity: 0.5;
                font-family: "Krona";
                text-transform: uppercase;
                font-size: 18px;
                width: 100%;
                text-align: center;
            }

            &:before {
                content:"Preview";
                position: absolute;
                top: -32px;
                left: 0;
                color: white;
                opacity: 1;
                font-family: "Kleenmax";
                text-transform: uppercase;
                font-size: 18px;
                width: 100%;
            }

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0.1;
            }
        }
    }

    section {
        position: relative;
        height: 100dvh;
        padding: 0 326px;

        .sideHeading {
            position: absolute;
            left: 110px;
            top: 50%;
            transform: translateY(-50%);
            writing-mode: sideways-lr;
            font-size: 64px;
            color: transparent;
            -webkit-text-stroke: 1px white;
            text-transform: uppercase;
            font-family: "Kleenmax";
        }
    }

    section:not(:first-of-type) {
            margin-top: 128px;
    }

</style>

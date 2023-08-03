<script lang="js">
    import Barcode from "/images/barcode.png";
</script>

<div class="titleCard">
    <h1>Rasmus Andersson</h1>
    <h2>Portfolio_</h2>
</div>
<div class="barcode">
    <img srcset={Barcode} alt="" />
    <a href="#">Continue</a>
</div>

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
        bottom: -56px;
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
    }
</style>

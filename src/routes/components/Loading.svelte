<style>
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dot {
        width: 10px;
        height: 10px;
        margin: 0 5px;
        border-radius: 50%;
        background-color: white;
        animation: bounce 0.6s infinite alternate;
    }

    .dot:nth-child(2) {
        animation-delay: 0.2s;
    }

    .dot:nth-child(3) {
        animation-delay: 0.4s;
    }

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-15px);
        }
    }
</style>

<div class="flex justify-center items-center h-[calc(100vh-160px)]">
    <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</div>


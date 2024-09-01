<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";

    let topbarPosition = "0px";
    let lastScrollY = 0;

    onMount(() => {
        lastScrollY = window.scrollY;

        const handleScroll = () => {
            let currentScrollY = window.scrollY;
            if (currentScrollY < 0) {
                currentScrollY = 0;
            }
            if (document.documentElement.scrollHeight === window.innerHeight) {
                topbarPosition = "0px";
            } else if (
                currentScrollY >=
                document.documentElement.scrollHeight - window.innerHeight
            ) {
                topbarPosition = "-60px";
            } else {
                topbarPosition = currentScrollY > lastScrollY ? "-60px" : "0px";
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<div
    class="fixed w-screen h-[60px] p-0 m-0 flex flex-col justify-between items-center overflow-hidden backdrop-blur-md bg-opacity-80 bg-primary z-50 transition-[top] duration-500 ease-in"
    style="top: {topbarPosition}"
>
    <div
        class="w-[90vw] md:w-[70vw] h-auto max-w-[1300px] flex items-center justify-between"
    >
        <a href="{base}/">
            <h1
                class="text-[rgb(245,245,247)] font-raleway font-normal text-2xl md:text-3xl cursor-pointer m-0"
            >
                SUDIP HALDER
            </h1>
        </a>
        <div
            class="w-[150px] md:w-[200px] h-[60px] flex justify-around items-center"
        >
            <a href="{base}/mail" class="m-1 rounded cursor-pointer">
                <img
                    src="/icons/send-mail.svg"
                    width={30}
                    height={30}
                    alt="button to send mail to sudip halder"
                />
            </a>
            <a
                href="https://linkedin.com/in/sudiphalder"
                target="_blank"
                rel="noopener noreferrer"
                class="m-1 rounded cursor-pointer"
            >
                <img
                    src="/icons/linkedin.svg"
                    width={30}
                    height={30}
                    alt="button to visit sudip halder's linkedin profile"
                />
            </a>
            <a
                href="https://x.com/sudiphl"
                target="_blank"
                rel="noopener noreferrer"
                class="m-1 rounded cursor-pointer"
            >
                <img
                    src="/icons/x.svg"
                    width={30}
                    height={30}
                    alt="button to visit sudip halder's twitter profile"
                />
            </a>
            <a
                href="https://github.com/sudipme"
                target="_blank"
                rel="noopener noreferrer"
                class="m-1 rounded cursor-pointer"
            >
                <img
                    src="/icons/github.svg"
                    width={30}
                    height={30}
                    alt="button to visit sudip halder's github profile"
                />
            </a>
        </div>
    </div>
</div>

<style lang="postcss">
    img {
        @apply rounded-md;
    }
</style>

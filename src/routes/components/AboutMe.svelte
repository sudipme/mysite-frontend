<script>
    import Links from "./Links.svelte";
</script>

<div
    id="about-me"
    class="max-w-[1400px] md:w-[75vw] flex flex-col flex-col-reverse md:flex-row md:justify-between items-center my-10 px-6 z-1"
>
    <div>
        <div
            class="my-10 md:pr-20 md:w-4/5 font-helvetica text-left text-gray-300 text-md md:text-lg lg:text-xl"
        >
            <p
                class="font-helvetica tracking-wide text-left text-gray-300 text-md md:text-lg lg:text-xl"
            >
                Hi there! I’m Sudip. I’m a Computer Science & Engineering
                student at the Indian Institute of Information Technology, Sri
                City. I work on Machine Learning algorithms and training deep
                neural nets. Reach out to me on
                <a
                    href="https://x.com/sudipxh"
                    target="_blank"
                    class="pl-1 text-blue-500 hover:text-gray-100"
                    >X (twitter)
                </a>
            </p>
        </div>
        <Links />
    </div>

    <img
        src="/images/profile.jpg"
        alt="sudip halder"
        class="w-[240px] rounded-full mb-8 md:mb-0"
    />
</div>

<style lang="postcss">
    :global(p) {
        @apply font-light text-base text-justify leading-7;
        word-spacing: -0.1em;
    }
</style>

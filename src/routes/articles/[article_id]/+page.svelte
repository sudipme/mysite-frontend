<script lang="ts">
    import SvelteMarkdown from "svelte-markdown";
    export let data;
</script>

<svelte:head>
    <title>{data.metaData.title}</title>
    <meta name="description" content={data.metaData.description} />
    <meta property="og:title" content={data.metaData.title} />
    <meta property="og:description" content={data.metaData.description} />
    <meta property="og:url" content={data.metaData.articleLink} />
    <meta property="og:image" content={data.metaData.ogImage} />
    <meta name="twitter:title" content={data.metaData.title} />
    <meta name="twitter:description" content={data.metaData.description} />
    <meta name="twitter:image" content={data.metaData.ogImage} />
</svelte:head>

<div class="w-full bg-white flex justify-center">
    <div
        class="max-w-[1400px] w-full md:w-3/5 px-3  flex flex-col items-center justify-center overflow-hidden text-black font-helvetica"
    >
        <a href="/" class="w-full my-8 flex justify-start items-center">
            <img
                src="/icons/back.svg"
                alt="back icon"
                class="w-8 h-8 object-cover m-0"
            />
            <p class="text-2xl text-gray-500 font-light mx-2 m-0">Back</p>
        </a>
        <div class="w-full flex flex-col justify-center items-start">
            <h1 class="text-3xl m-0 font-light font-helvetica">
                {data.article.title}
            </h1>
            <p class="text-base text-gray-400 font-light mt-2">{data.article.published_on? data.article.published_on: ''}</p>
        </div>
        <div class="w-full min-h-screen mb-24 max-w-none">
            <SvelteMarkdown source={data.markdown} />
        </div>
    </div>
</div>

<style lang="postcss">
    :global(h1) {
        @apply text-2xl font-bold mt-10;
    }

    :global(h2) {
        @apply text-xl font-bold mt-8;
    }

    :global(p) {
        @apply my-4 font-light text-base text-justify leading-7;
        word-spacing: -0.1em;
    }

    :global(strong) {
        @apply text-lg font-normal;
    }

    :global(img) {
        @apply rounded-lg my-4;
    }

    :global(pre) {
        @apply overflow-x-auto whitespace-pre bg-[rgb(250,250,250)] p-4 my-4 rounded-md border;
    }

    :global(code) {
        @apply text-base bg-[rgb(250,250,250)] px-1 py-0.5 rounded font-mono;
    }
</style>

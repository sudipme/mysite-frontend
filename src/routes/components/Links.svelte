<script>
    import { base } from "$app/paths";
    const links = [
        {
            url: `${base}/resume`,
            title: "Resume",
        },
        {
            url: `${base}/projects`,
            title: "Projects",
        },
        {
            url: "https://github.com/sudipme/notebooks",
            title: "Notebooks",
        },
    ];
</script>

<div class="max-w-full w-full md:w-3/4">
    <div
        id="list-links"
        class="min-w-[300px] w-full md:w-full bg-secondary p-5 rounded-2xl m-0 p-0 flex justify-center items-center"
    >
        <ul class="flex flex-wrap md:space-x-5">
            {#each links as link}
                <a href={link.url} class="no-underline">
                    <li
                        class="w-full m-2 md:m-0 text-lg md:text-xl break-words font-normal font-montserrat text-link cursor-pointer"
                    >
                        {link.title}
                    </li>
                </a>
            {/each}
        </ul>
    </div>
</div>

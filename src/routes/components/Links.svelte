<script>
    import { base } from "$app/paths";
    import { ApiBaseUrl } from "$lib/config";
    const links = [
        {
            url: `${base}/projects`,
            title: "Pet-Projects",
        },
        {
            url: `${base}/resume`,
            title: "Resume",
        },
        {
            url: "https://github.com/sudipme/notebooks",
            title: "Notebooks",
        },
    ];
</script>

<div class="max-w-[1400px] my-2 w-full md:w-3/4 p-5">
        <div
            id="list-links"
            class="min-w-[300px] w-full md:w-full bg-secondary p-5 rounded-2xl m-0 p-0 flex justify-start items-center"
        >
            <a href="{base}/links" class="no-underline">
                <h1
                    class="text-2xl text-[#f5f5f7] font-raleway font-normal md:mx-8 my-0"
                >
                    Links
                </h1>
            </a>

            <ul class="flex flex-wrap  ml-4 md:space-x-4">
                {#each links as link}
                    <a href={link.url} class="no-underline">
                        <li
                            class="w-full m-2 md:m-0 text-xl break-words font-normal font-montserrat text-link cursor-pointer"
                        >
                            {link.title}
                        </li>
                    </a>
                {/each}
            </ul>
        </div>
</div>

<script lang="ts">
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import { ApiBaseUrl } from "$lib/config";

    let updates: Array<{ time_stamp: string; link: string; content: string }> =
        [];

    onMount(async () => {
        try {
            const response = await fetch(ApiBaseUrl + "highlights");
            if (!response.ok) {
                throw new Error("Error fetching updates data");
            }
            const data = await response.json();
            updates = data.highlights;
            console.log(data);
        } catch (error) {
            console.error("Error fetching updates data:", error);
        }
    });
</script>

<div class="max-w-[1400px] my-2 w-full md:w-3/4 p-5">
    <div
        id="info-container"
        class="relative flex flex-col items-start bg-secondary p-5 rounded-[28px] space-y-5 z-10"
    >
        <div id="list-updates" class="min-w-[300px] w-full">
            <a href="{base}/updates" class="no-underline">
                <h1
                    class="text-2xl text-[#f5f5f7] font-raleway font-normal md:mx-8 my-0"
                >
                    Updates
                </h1>
            </a>
            <ul class="my-4 list-disc ml-10 md:ml-24 p-0">
            {#each updates as update (update.time_stamp)}
                <a href={update.link}>
                    <li
                        class="w-fit py-1 break-words text-base md:text-base font-normal font-montserrat text-link underline cursor-pointer"
                    >
                        {update.content}
                    </li>
                </a>
            {/each}
            </ul>

            <div id="expand-button-container"></div>
            </div>

       
    </div>
</div>

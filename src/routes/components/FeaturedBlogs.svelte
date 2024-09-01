<!-- src/components/FeaturedBlogs.svelte -->
<script lang="ts">
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import { ApiBaseUrl } from "$lib/config";

    let featuredBlogs: Array<{
        time_stamp: string;
        blog_id: string;
        blog_title: string;
        blog_description: string;
    }> = [];

    onMount(async () => {
        try {
            const response = await fetch(ApiBaseUrl + "featured-articles");
            if (!response.ok) {
                throw new Error("Failed to fetch featured blogs");
            }
            const data = await response.json();
            featuredBlogs = data.featured_blogs;
        } catch (error) {
            console.error("Error fetching featured blogs data:", error);
        }
    });
</script>


<div  class="max-w-[1400px] w-[90%] md:w-[75%] no-underline mt-10">
    <h1 class="text-3xl text-[#f5f5f7] font-raleway font-normal mb-4">
        Articles <a href="{base}/articles" class="text-lg ml-4 text-link">( View All )</a>
    </h1>
</div>

<div
    class="w-screen px-5 flex flex-col justify-between items-center overflow-hidden"
>
    <!-- featured blogs shadow, shadow-[0_100px_200px_10px_#fff] -->

    {#each featuredBlogs as blog (blog.time_stamp)}
        <a href="{base}/articles/{blog.blog_id}" class="no-underline cursor-pointer">
            <div
                class="max-w-[1400px] md:w-[75vw] my-2.5 overflow-hidden cursor-pointer"
            >
                <h2
                    class="my-1 text-left font-sohne text-2xl md:text-xl font-normal text-white hover:text-gray-300"
                >
                    {blog.blog_title}
                </h2>
                <h3
                    class="my-1 text-left font-sohne text-lg font-normal text-gray-400"
                >
                    {blog.blog_description}
                </h3>
            </div>
        </a>
    {/each}

</div>

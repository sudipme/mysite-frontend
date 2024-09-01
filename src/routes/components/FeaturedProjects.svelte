<!-- src/components/FeaturedProjects.svelte -->
<script lang="ts">
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import { ApiBaseUrl } from "$lib/config";

    let featuredProjects: Array<{
        project_id: string;
        project_title: string;
        project_description: string;
    }> = [];

    onMount(async () => {
        try {
            const response = await fetch(ApiBaseUrl + "featured-projects");
            if (!response.ok) {
                throw new Error("Failed to fetch featured projects");
            }
            const data = await response.json();
            featuredProjects = data.featured_projects;
            console.log(featuredProjects);
        } catch (error) {
            console.error("Error fetching featured projects data:", error);
        }
    });
</script>


<div  class="max-w-[1400px] w-[90%] md:w-[75%] no-underline mt-10">
    <h1 class="text-3xl text-[#f5f5f7] font-raleway font-normal mb-4">
        Pet Projects <a href="{base}/projects" class="text-lg ml-4 text-link">( View All )</a>
    </h1>
</div>

<div
    class="max-w-[1400px] w-[90%] md:w-[75%] flex flex-col justify-between items-center overflow-hidden"
>
    <!-- featured blogs shadow, shadow-[0_100px_200px_10px_#fff] -->

    {#each featuredProjects as project}
        <a href="{base}/articles/{project.project_id}" class="w-full no-underline cursor-pointer">
            <div
                class="my-2.5 overflow-hidden cursor-pointer"
            >
                <h2
                    class="my-1 text-left font-sohne text-2xl md:text-xl font-normal text-white hover:text-gray-300"
                >
                    {project.project_title}
                </h2>
                <h3
                    class="my-1 text-left text-justify font-sohne text-lg font-normal text-gray-400"
                >
                    {project.project_description}
                </h3>
            </div>
        </a>
    {/each}

</div>

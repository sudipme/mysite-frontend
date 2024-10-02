<script lang="ts">
    import { page } from "$app/stores";
    import { BaseUrl, ApiBaseUrl } from "$lib/config";
    import Loading from "../components/Loading.svelte";

    interface Blog {
        blog_id: string;
        blog_title: string;
        blog_description: string;
        time_stamp: string;
    }

    interface BlogsResponse {
        blogs: { [key: string]: Blog };
        total_pages: number;
    }

    async function getBlogs(page: number): Promise<BlogsResponse> {
        const res = await fetch(`${ApiBaseUrl}articles-page/${page}`);
        if (!res.ok) {
            throw new Error("Failed to fetch articles");
        }
        return res.json();
    }

    let currentPage = parseInt($page.url.searchParams.get("page") || "0", 10);
    let blogsPromise = getBlogs(currentPage);
</script>

<svelte:head>
    <title>Blogs by Sudip | Insights on Machine Learning, AI and More</title>
    <meta
        name="description"
        content="Sudip Halder is a Software Developer and a Machine Learning expert. Read his blogs on Machine Learning and AI, and learn more about his projects and experiences."
    />
</svelte:head>

<div class="overflow-hidden">
    <div class="w-full flex justify-center">
        <a
            href="/"
            class="w-[90vw] md:w-[80vw] my-8 flex justify-start items-center"
        >
            <img
                src="/icons/back-white.svg"
                alt="back icon"
                class="w-8 h-8 object-cover m-0"
            />
            <p class="text-2xl text-white font-light mx-2 m-0">Home</p>
        </a>
    </div>

    {#await blogsPromise}
        <Loading />
    {:then { blogs, total_pages }}
        <div
            id="blogs-container"
            class="w-full min-h-[calc(100vh-180px)] mb-0 box-border flex flex-col items-center overflow-hidden"
        >
            {#each Object.values(blogs) as blog (blog.time_stamp)}
                <a
                    href="/articles/{blog.blog_id}"
                    class="my-2.5 overflow-hidden cursor-pointer w-[90vw] md:w-[80vw]"
                >
                    <h2
                        class="m-[5px_0] text-left text-white text-2xl font-normal font-['Sohne',_sans-serif]"
                    >
                        {blog.blog_title}
                    </h2>
                    <h3
                        class="m-[5px_0] w-[85vw] text-left text-justify text-[#ddd] text-lg font-normal font-['Sohne',_sans-serif] sm:text-base"
                    >
                        {blog.blog_description}
                    </h3>
                </a>
            {/each}
        </div>
        <div class="w-full flex justify-center">
            <div
                id="pagination-container"
                class="w-full h-20 relative bottom-0 flex justify-center items-center z-10"
            >
                <a
                    class="pagination-button w-[90px] h-[30px] mx-5 md:mx-[50px] rounded-[20px] border-none bg-[#222] font-semibold text-[#f5f5f7] text-base flex justify-center items-center"
                    href="/blogs?page={currentPage - 1}"
                    class:pointer-events-none={currentPage === 0}
                    class:opacity-50={currentPage === 0}
                >
                    Previous
                </a>
                <h3
                    id="page-counter"
                    class="w-[100px] text-[#eee] font-normal text-center"
                >
                    ( {currentPage + 1} / {total_pages} )
                </h3>
                <a
                    class="pagination-button w-[90px] h-[30px] mx-5 md:mx-[50px] rounded-[20px] border-none bg-[#222] font-semibold text-[#f5f5f7] text-base flex justify-center items-center"
                    href="/blogs?page={currentPage + 1}"
                    class:pointer-events-none={currentPage + 1 === total_pages}
                    class:opacity-50={currentPage + 1 === total_pages}
                >
                    Next
                </a>
            </div>
        </div>
    {:catch error}
        <p>Error: {error.message}</p>
    {/await}
</div>

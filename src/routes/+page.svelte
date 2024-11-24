<script>
    import NavBar from "./components/NavBar.svelte";
    import AboutMe from "./components/AboutMe.svelte";
    import FeaturedArticles from "./components/FeaturedArticles.svelte";
</script>

<div id="navbar-spacer" class="h-[60px] bg-primary"></div>
<NavBar />
<div
    id="home-page"
    class="w-screen min-h-screen pb-20 flex flex-col items-center overflow-hidden bg-primary"
>
    <AboutMe />
    <FeaturedArticles />
</div>

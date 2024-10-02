<script>
  import NavBar from "./components/NavBar.svelte";
  import AboutMe from "./components/AboutMe.svelte";
  import Links from "./components/Links.svelte";
  import Updates from "./components/Updates.svelte";
  import FeaturedArticles from "./components/FeaturedArticles.svelte";
  import FeaturedProjects from "./components/FeaturedProjects.svelte";
</script>

<div id="navbar-spacer" class="h-[60px] bg-primary"></div>
<NavBar />
<div
  id="home-page"
  class="w-screen min-h-screen pb-20 flex flex-col justify-between items-center overflow-hidden bg-primary"
>
  <AboutMe />
  <Links />
  <!-- <Updates /> -->
  <FeaturedProjects />
  <FeaturedArticles />
</div>

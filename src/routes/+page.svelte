<!-- src/routes/+page.svelte -->
<script>
  import NavBar from "./components/NavBar.svelte";
  import FeaturedBlogs from "./components/FeaturedBlogs.svelte";
  import AboutMe from "./components/AboutMe.svelte";
  import InfoContainer from "./components/InfoContainer.svelte";
</script>

<div id="navbar-spacer" class="h-[60px] bg-primary"></div>
<NavBar />
<div
  id="home-page"
  class="w-screen min-h-screen pb-20 flex flex-col justify-between items-center overflow-hidden bg-primary"
>
  <AboutMe />
  <InfoContainer />
  <FeaturedBlogs />
</div>

<script>
    import { page } from "$app/stores";
</script>

<div class="error-container text-white">
    <h1 class="font-helvetica">{$page.status}: {$page.error?.message}</h1>
    <h3 class="font-helvetica md:text-xl mb-6">
        Sorry, the page you're looking for doesn't exist.
    </h3>
    <a href="/">Go back home</a>
</div>

<style>
    .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 2rem;
    }

    a {
        color: #0066cc;
        text-decoration: none;
    }

    /* a:hover {
        text-decoration: underline;
    } */
</style>

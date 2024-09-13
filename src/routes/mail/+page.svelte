<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import NavBar from "../components/NavBar.svelte";
    import { ApiBaseUrl } from "$lib/config";

    let name = "";
    let email = "";
    let message = "";
    let color = "transparent";
    let responseMessage = "Sending message . . .";

    async function handleSubmit(event: Event) {
        event.preventDefault();
        color = "green";

        const formData = { name, email, message };

        try {
            const response = await fetch(ApiBaseUrl + "send-mail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.error_message) {
                    responseMessage = data.error_message;
                    color = "red";
                } else {
                    responseMessage = data.message;
                    color = "green";
                    name = email = message = "";
                }
            } else {
                responseMessage = "Something went wrong!";
                color = "red";
            }
        } catch (error) {
            responseMessage = "Something went wrong!";
            color = "red";
        }
    }

    onMount(() => {
        document.title = "Send Mail to Sudip Halder";
    });
</script>

<svelte:head>
    <meta
        name="description"
        content="Sudip Halder is a Software Developer and a Machine Learning expert. Read his blogs on Machine Learning and AI, and learn more about his projects and experiences."
    />
</svelte:head>

<div id="navbar-spacer" class="h-[60px] bg-primary"></div>
<NavBar />

<div
    class="w-screen h-[calc(100vh-60px)] min-h-[600px] flex justify-center items-center font-inter"
>
    <form
        on:submit={handleSubmit}
        class="max-w-[1400px] w-full h-4/5 flex flex-col items-center"
        id="contact-form"
        name="mail-form"
    >
        <div
            class="w-[90%] lg:w-2/5 h-4/5 flex flex-col justify-around items-center"
            id="contact-form-input-container"
        >
            <input
                class="form-input w-full h-[50px] pl-5 my-2.5 text-white text-lg bg-transparent border border-[#555] rounded-[20px]"
                type="text"
                bind:value={name}
                placeholder="Name"
                maxlength={20}
                required
            />

            <input
                class="form-input w-full h-[50px] pl-5 my-2.5 text-white text-lg bg-transparent border border-[#555] rounded-[20px]"
                type="email"
                bind:value={email}
                placeholder="Email Id"
                maxlength={50}
                required
            />

            <textarea
                class="form-input w-full min-h-[50%] max-h-full p-5 my-2.5 text-white text-base bg-transparent border border-[#555] rounded-[20px] resize-none"
                bind:value={message}
                placeholder="Message . . ."
                maxlength={1000}
                required
            ></textarea>

            <p
                class="m-0 text-center text-xl font-bold"
                id="response-msg"
                style="color: {color}"
            >
                {responseMessage}
            </p>
        </div>

        <div
            class="h-[10%] lg:h-1/5 max-w-screen flex justify-center items-center"
        >
            <button
                type="button"
                on:click={() => goto("/")}
                class="w-[150px] lg:w-[200px] h-10 lg:h-12 m-2 lg:m-[5px] text-[#ddd] text-xl lg:text-2xl bg-[#252525] rounded-[20px]"
                id="back-button"
            >
                Cancel
            </button>
            <button
                type="submit"
                class="w-[150px] lg:w-[200px] h-10 lg:h-12 m-2 lg:m-[5px] text-white text-xl lg:text-2xl bg-[#252525] rounded-[20px]"
                id="submit-btn"
            >
                Submit
            </button>
        </div>
    </form>
</div>

<style>
    .form-input:focus {
        outline: none;
        border: 2px solid rgba(41, 151, 255, 1);
    }

    .form-input::placeholder {
        padding-left: 10px;
        color: #aaa;
    }

    .form-input:focus::placeholder {
        color: transparent;
    }
</style>

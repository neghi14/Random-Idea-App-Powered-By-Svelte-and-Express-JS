<script>
  import { onMount } from "svelte";

  let random, idea, results, randomIdea, fetchIdeas;

  onMount(() => {
    fetchIdeas = async () => {
      const res = await fetch("http://localhost:8000/api/v1/ideas");
      const data = await res.json();
      results = data.data.ideas;
      console.log(results);
    };
    fetchIdeas();
    randomIdea = () => {
      random = Math.floor(Math.random() * results.length);
      idea = results[random];

      return;
    };
  });
</script>

<section class="min-h-[100vh] flex items-center justify-center p-4">
  <div class="flex flex-col gap-24 lg:max-w-4xl mx-auto max-w-md md:max-w-2xl">
    <h1
      class="text-5xl lg:text-7xl uppercase font-bold font-ubuntu text-header"
    >
      Generate Random Project Ideas
    </h1>
    <div class="flex flex-col gap-12 items-start">
      {#if !idea}
        <p class="text-xl lg:text-2xl capitalize font-ubuntu text-white">
          Get your next Start up idea
        </p>
      {:else}
        <p class="text-xl lg:text-2xl capitalize font-ubuntu text-white">
          {idea.name}
        </p>
      {/if}
      <div class="flex items-center gap-4">
        <button
          class="btn text-black font-bold font-ubuntu px-6 py-4 text-lg uppercase"
          on:click={randomIdea}>generate idea</button
        >
        <button class="icon" on:click={fetchIdeas}
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

<style>
  .text-header {
    background: url("../assets/ssscales.svg");
    background-size: contain;
    background-position: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .btn {
    background: hsl(0, 0%, 100%);
    border-radius: 50px;
    box-shadow: 5px 5px 10px rgb(255, 255, 255, 0.1);
    transition: all 0.3s ease-out;
  }
  .btn:hover {
    background: hsl(0, 0%, 90%);
    transition: all 0.3s ease-in;
    transform: translateY(-1px);
  }
  .btn:active {
    transition: all 0.3s ease-in;
    transform: translateY(1px);
  }
  .icon {
    display: grid;
    place-content: center;
    width: 30px;
    aspect-ratio: 1/1;
    background-color: white;
    border-radius: 100px;
  }
</style>

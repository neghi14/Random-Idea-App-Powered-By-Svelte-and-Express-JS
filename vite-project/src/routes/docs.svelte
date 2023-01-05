<section class="min-h-[100vh]  p-4">
  <div
    class="mt-16 lg:mt-24 flex flex-col gap-6 lg:max-w-4xl mx-auto max-w-md md:max-w-2xl"
  >
    <div class="flex flex-col gap-4">
      <h1
        class="text-5xl lg:text-7xl uppercase font-bold font-ubuntu text-header"
      >
        Ideas API
      </h1>
      <p class="text-white text-lg font-ubuntu font-medium">
        The idea API is an API I built to test my backend knowledge, it uses the
        REST API standard and has support for simple CRUD commands and was used
        to power a frontend application built with the Svelte framework and
        TailwindCSS. This project was completed in 12 hours.
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <span class="text-white text-lg font-bold font-ubuntu"
        ><h2 class="text-xl lg:text-3xl uppercase text-header inline-block">
          GET
        </h2>
        Get Ideas</span
      >
      <code class="border border-white p-4 text-white"
        >localhost:8000/api/v1/ideas</code
      >
      <p class="text-white text-lg font-ubuntu font-medium">
        This is the endpoint to get all the random Ideas currenttly on the
        server
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <span class="text-white text-lg font-bold font-ubuntu"
        ><h2 class="text-xl lg:text-3xl uppercase text-header inline-block">
          POST
        </h2>
        Create Ideas</span
      >
      <code class="border border-white p-4 text-white"
        >localhost:8000/api/v1/ideas</code
      >
      <p class="text-white text-lg font-ubuntu font-medium">
        This is the endpoint to create a new entry in the database
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <span class="text-white text-lg font-bold font-ubuntu"
        ><h2 class="text-xl lg:text-3xl uppercase text-header inline-block">
          PATCH
        </h2>
        Update Ideas</span
      >
      <code class="border border-white p-4 text-white"
        >localhost:8000/api/v1/ideas/:id</code
      >
      <p class="text-white text-lg font-ubuntu font-medium">
        This is the endpoint to update a new entry in the database
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <span class="text-white text-lg font-bold font-ubuntu"
        ><h2 class="text-xl lg:text-3xl uppercase text-header inline-block">
          DELETE
        </h2>
        Delete Ideas</span
      >
      <code class="border border-white p-4 text-white"
        >localhost:8000/api/v1/ideas/:id</code
      >
      <p class="text-white text-lg font-ubuntu font-medium">
        This is the endpoint to delete a new entry in the database
      </p>
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
</style>

<script>
  let added = false;
  let name, idea, body;

  const createIdeas = async (jsonData) => {
    const res = await fetch(
      "https://brokedev-ideaapp.vercel.app/api/v1/ideas",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: jsonData,
      }
    );
    const data = await res.json();
  };
</script>

<section class="min-h-[100vh]  p-4">
  <div
    class="mt-16 lg:mt-24 flex flex-col gap-6 lg:max-w-4xl mx-auto max-w-md md:max-w-2xl"
  >
    <div class="flex flex-col gap-8">
      <h1
        class="text-5xl lg:text-7xl uppercase font-bold font-ubuntu text-header"
      >
        Add AN idea
      </h1>

      <div class="flex flex-col gap-8 items-start">
        {#if added}
          <h2
            class="text-xl lg:text-3xl uppercase font-bold font-ubuntu text-white"
          >
            Idea succesfully Added
          </h2>
        {:else}
          <div class="w-full flex flex-col gap-4">
            <div class="flex flex-col w-full gpa-2">
              <label
                class="font-bold font-ubuntu text-white text-xl"
                for="idea"
              >
                Idea*
              </label>
              <input
                type="text"
                name="idea"
                id="idea"
                placeholder="Next Startup Idea"
                required
                bind:value={idea}
              />
            </div>
            <div class="flex flex-col w-full gap-2">
              <label
                class="font-bold font-ubuntu text-white text-xl"
                for="name"
              >
                Your Name*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Elon Musk?"
                required
                bind:value={name}
              />
            </div>
          </div>

          <button
            class="btn text-black font-bold font-ubuntu px-6 py-4 text-lg uppercase"
            on:click={() => {
              body = JSON.stringify({
                name: idea,
                by: name,
              });
              createIdeas(body);
              added = !added;
              setTimeout(() => {
                added = false;
                idea = "";
                name = "";
              }, 3000);
            }}>Add idea</button
          >
        {/if}
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
  input {
    width: 100%;
    height: 50px;
    padding-inline: 30px;
    border: 1px solid gray;
    outline: none;
    border-radius: 100px;
    font-size: 20px;
    font-family: "Ubuntu", sans-serif;
  }
  input::placeholder {
    font-style: italic;
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
</style>

<script>
  import { Link } from "svelte-navigator";
  import logo from "../assets/logo.jpg";
</script>

<header class="p-4">
  <div class="flex justify-between lg:max-w-4xl mx-auto max-w-md md:max-w-2xl">
    <a href="/"><img class="logo" src={logo} alt="Logo" /></a>
    <ul class="nav">
      <li>
        <Link class="text-white text-xl font-ubuntu font-medium" to="/docs"
          >DOCS</Link
        >
      </li>
      <li>
        <Link class="text-white text-xl font-ubuntu font-medium" to="/add"
          >IDEAS</Link
        >
      </li>
      <li>
        <Link class="text-white text-xl font-ubuntu font-medium" to="/about"
          >ABOUT</Link
        >
      </li>
    </ul>
  </div>
</header>

<style>
  header {
    position: absolute;
    width: 100%;
  }
  .logo {
    width: 48px;
    aspect-ratio: 1/1;
    border-radius: 100%;
  }
  .nav {
    display: flex;
    gap: 16px;
  }
  .nav li {
    list-style: none;
  }
</style>

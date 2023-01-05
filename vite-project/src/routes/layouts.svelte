<script>
  import { Router, Route } from "svelte-navigator";
  import About from "./about.svelte";
  import Docs from "./docs.svelte";
  import Header from "./header.svelte";
  import Home from "./home.svelte";
</script>

<main>
  <Router primary={false}>
    <Header />
    <Route path="/">
      <Home />
    </Route>
    <Route path="/docs">
      <Docs />
    </Route>
    <Route path="/about">
      <About />
    </Route>
  </Router>
</main>

<style>
  main {
    background: #111827;
  }
</style>

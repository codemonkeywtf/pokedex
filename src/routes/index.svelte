<script>
  import { pokemon } from '../stores/pokestore';
  import Pokemon from '../components/pokemon.svelte';

  let search = '';
  let filter = [];

  $: {
    if (search) {
      filter = $pokemon.filter((pokeman) => pokeman.name.toLowerCase().includes(search.toLocaleLowerCase()));
    } else {
      filter = [...$pokemon];
    }
  }
</script>

<svelte:head>
  <title>SvelteKit Pokedex</title>
</svelte:head>

<h1 class="is-size-1 has-text-weight-bold is-uppercase has-text-centered my-5">SvelteKit Pokedex</h1>
<div class="container is-fluid is-desktop">
  <input class="input is-warning" type="text" placeholder="Search Pokemon" bind:value={search} />
  <div class="columns is-multiline is-centered">
    {#each filter as pokeman}
      <Pokemon {pokeman} />
    {/each}
  </div>
</div>

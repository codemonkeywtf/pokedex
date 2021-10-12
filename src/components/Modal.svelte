<script>
  export async function get({ params }) {
    const id = params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    return { props: { pokeman } };
  }

  export let pokeman;
</script>

<h1 class="is-size-1 has-text-centered my-8 is-uppercase">{pokeman.name}</h1>

<div class="is-flex is-justify-content-center">
  <div class="box is-flex-wrap is-justify-content-center m-6">
    <p class="is-size-4 is-flex is-justify-content-center">
      Type: <strong>{pokeman.types[0].type.name}</strong> | Height: <strong>{pokeman.height}</strong> | Weight:
      <strong>{pokeman.weight}</strong>
    </p>
    <div class="is-flex is-justify-content-center">
      <img src={pokeman.sprites.other['official-artwork']['front_default']} alt={pokeman.name} />
    </div>
    <div>
      <p class="is-size-3 has-text-centered has-text-weight-medium is-uppercase">{pokeman.name}</p>
    </div>
  </div>
</div>

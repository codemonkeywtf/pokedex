<script>
  export let pokeman;
  let y;
</script>

<div class="is-flex-wrap is-justify-content-center">
  <div class="box is-flex-wrap is-justify-content-center m-6">
    <a href={`/pokemon/${pokeman.id}`}>
      <div class="is-flex is-justify-content-center">
        <figure class="image is-128x128">
          <img src={pokeman.image} alt={pokeman.name} />
        </figure>
      </div>
      <div>
        <p class="has-text-centered has-text-weight-medium is-uppercase">{pokeman.name}</p>
      </div>
    </a>
  </div>
</div>

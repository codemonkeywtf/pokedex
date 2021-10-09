<script>
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
  import GithubCorner from '../components/GithubCorner.svelte'

  let toggle = false
  const handleClick = (toogle) => {
    toggle = !toggle
  }
</script>

<nav class="navbar is-warning" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a sveltekit:noscroll class="navbar-item" href="/">
      <img src="pngegg.png" alt="pokemon logo" />
    </a>

    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      sveltekit:noscroll
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarPokedex"
      on:click={handleClick}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>

  <div id="navbarPokedex" class={`navbar-menu ${toggle ? 'is-active' : ''}`}>
    <div class="navbar-start">
      <a sveltekit:noscroll href="/" class="navbar-item">Home</a>
      <a sveltekit:noscroll href="/about" class="navbar-item">About</a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a
            sveltekit:noscroll
            href="https://github.com/codemonkeywtf/weekly-challenges/blob/master/codemonkeywtf/week-2-Fitness-Tracker.md"
            class="button is-warning"
          >
            <Fa icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </div>
    <GithubCorner />
  </div>
</nav>

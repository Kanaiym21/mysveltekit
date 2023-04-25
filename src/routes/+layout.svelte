<script>
    import Header from "../components/Header.svelte";
    import '../global.css'

</script>
<Header/>
<nav>
    <a href="/">Home</a>
    <a href="/posts">Posts</a>
    <a href="/search">Search</a>
    <a href="/unitedstates">The United States</a>
    <a href="/gallery">Gallery</a>
  </nav>
  <main>
<slot />
  </main>
<footer>
    <p>2023 Kanaiym Abdigaparova</p>
</footer>

<style>
    nav, footer {
      display: flex;
      justify-content: space-evenly;
      padding: .5em;
      background-color:honeydew;
      color: seagreen;
    }
    main {
      grid-row: 2;
    }
    footer {
    grid-row: 3;
    display: flex;
    justify-content: center;
    bottom: 0;
  }
  </style>
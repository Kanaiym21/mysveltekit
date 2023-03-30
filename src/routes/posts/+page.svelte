<script>
    export let data;
  </script>
  
  <h1>{data.post.title}</h1>
  <p>Article #{data.post.slug}</p>
  <p>{data.post.content}</p>

  <nav class="sidebar">
    {#each data.summaries as {slug, title}}
      <a href="/posts/{slug}">{title}</a>
    {/each}
  </nav>
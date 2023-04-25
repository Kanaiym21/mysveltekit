<script>
    export let data;
    const {artworks} = data;
  </script>
  
  <article>
    {#each artworks as { title, artist_title, image_id,}}
    <figure>
      <img src="https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg" alt="">
      <figcaption><strong>{title}</strong> by {artist_title}<br></figcaption>
    </figure>
    {/each}
  </article>
  
  <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
  
  <style>
    article {
      padding: 2em;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 2em;
    }
.search-container {
  float: right;
}

.search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: black;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.search-container button:hover {
  background: #ccc;
}

@media screen and (max-width: 600px) {
  .search-container {
    float: none;
  }
  .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
}
  </style>
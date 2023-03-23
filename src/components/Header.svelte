<script>
const links = [
    {'href': '/', 'label': 'Home'},
    {'href': '/Gallery', 'label': 'Gallery'}
]
</script>

<main>
    <ul>
        {#each links as link}
            <li><a href="{link.href}">{link.label}</a></li>
        {/each}
    </ul>
</main>
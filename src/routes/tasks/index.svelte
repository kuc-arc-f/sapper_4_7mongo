<script context="module">

export async function preload() {
  var url ="/api/tasks/list";
  const res = await this.fetch(url)
  const data = await res.json()
//console.log(data)
  var posts = data.items
  return {posts};
}
</script>

<script>
export let posts;
//console.log(posts)
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Posts</title>
</svelte:head>
<h1>Tasks-Index</h1>
<a href="/tasks/create">[ create ]</a>
<hr />
<ul>
  {#each posts as post}
    <li><a rel="prefetch" href="/tasks/{post._id}">{post.title}</a>
      <span><a rel="prefetch" href="/tasks/edit/{post._id}">[ edit ]</a></span>
    </li>
  {/each}
</ul>
<hr />

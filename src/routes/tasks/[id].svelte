<script context="module">
//
export async function preload({ params }) {
  const res = await this.fetch(`tasks/${params.id}.json`);
  const data = await res.json();	
//console.log(data)
  if (res.status != 200) {
    this.error(res.status, data.message);
  }
  return { post: data.item };
}
</script>

<script>
	export let post;
console.log(post)
</script>

<style>
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
ID : {post._id}
<hr />
<div class="content">
	{@html post.content}
</div>

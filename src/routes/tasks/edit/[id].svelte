<script context="module">
//
export async function preload({ params }) {
//console.log(params.id)
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
async function handleClick() {
//  alert('clicked')
  await add_item()
}
async function handleClickDelete() {
console.log('handleClickDelete')
  await delete_item()
}
async function delete_item(){
  try {
    var item = { id: post._id, }
//console.log(item)
    const res = await fetch( '/api/tasks/destory', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(item),
    });
    if (res.status != 200) {
      throw new Error(await res.text());
    }
    window.location.href = '/tasks/'
  } catch (error) {
    console.error(error);
  }
}
async function add_item(){
  try {
    var elemTitle = document.getElementById('title');
    var elemContent = document.getElementById('content');
    var item = {
      id: post._id,
      title: elemTitle.value,
      content: elemContent.value,
      created_at: new Date(),
    }
//console.log(item)
    const res = await fetch( '/api/tasks/update', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify(item),
    });
    if (res.status != 200) {
      throw new Error(await res.text());
    }
console.log(await res.json())
    window.location.href = '/tasks/'
  } catch (error) {
    console.error(error);
  }    
}  
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
<h1>Tasks - Edit</h1>
ID : {post._id}
<hr />
<div class="content">
	Title:
	<input type="text" class="form-control" name="title" id="title" 
  value={post.title} />
  <br />
	content:
	<input type="text" class="form-control" name="content" id="content"
  value={post.content} />
	<hr />
  <button on:click={handleClick}>Save</button>
  <hr />
  <button on:click={handleClickDelete}>Delete</button>
</div>

<script context="module">
import axios from 'axios'

export async function preload() {
	var posts = []
  return {posts};
}
</script>

<script>
async function handleClick() {
//  alert('clicked')
  await add_item()
}
async function add_item(){
  try {
    var elemTitle = document.getElementById('title');
    var elemContent = document.getElementById('content');
    var item = {
      title: elemTitle.value,
      content: elemContent.value,
      created_at: new Date(),
    }
console.log(item)
    var body = JSON.stringify(item)
    const res = await fetch( '/api/tasks/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': body.length,
      },
      body: body,
    });
    if (res.status != 200) {
      throw new Error(await res.text());
    }
//  console.log(response.data)
      window.location.href = '/tasks/'
    } catch (error) {
      console.error(error);
    }    
}
//console.log(posts)
</script>
<style>
</style>

<svelte:head>
	<title>Create</title>
</svelte:head>
<h1>Tasks-Create</h1>
<hr />
<div class="form-group">
  Title:
  <input type="text" class="form-control" name="title" id="title" />
  content:
  <input type="text" class="form-control" name="content" id="content" />
</div>
<hr />
<button on:click={handleClick}>create</button>

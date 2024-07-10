<script>
    let count = 0;
    let incCnt = () => count++;

    let name = '';
</script>

<p>{count}</p>
<button on:click={incCnt}>Click</button>

<h1>Hello {name}</h1>
<input bind:value={name} placeholder="name" />

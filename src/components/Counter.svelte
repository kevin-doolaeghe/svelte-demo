<script>
    let count = 0;
    let incCnt = () => count++;
</script>

<p>{count}</p>
<button on:click={incCnt}>Click</button>

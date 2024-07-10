<script>
	import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let name = '';

    let create = () => dispatch('create', {name});
</script>

<div>
    <h1>{name}</h1>
    <input bind:value={name} placeholder="name" />
    <button on:click={create}>Create</button>
</div>

<script>
	import Form from "./Form.svelte";
	import Card from "./Card.svelte";
	import Counter from "./Counter.svelte";

    let characters = [];
    let message = (e) => {
        characters.push(e.detail);
        characters = characters.splice(-9);
    }
</script>

<Form on:create={message} />

{#each characters as character}
    <Card {character} />
{/each}

<Counter />

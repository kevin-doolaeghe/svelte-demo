<script>
	import Form from './Form.svelte';
	import Card from './Card.svelte';

	let todos = [];

	const addTodo = (e) => {
		// console.log(e.detail);
		todos = [...todos, e.detail]; // todos.push(e.detail);
	};

	$: console.table(todos);
</script>

<h1>Todos:</h1>

<Form on:create={addTodo} />

{#if todos.length === 0}
	<h4>No todos yet..</h4>
{:else}
	<ul>
		{#each todos as todo}
			<Card {todo} />
		{/each}
	</ul>
{/if}

<script>
	import Form from './Form.svelte';
	import Card from './Card.svelte';

	import { todoStore, addTodo } from '$lib/firebase';

	let todos = [];
	todoStore.subscribe((_todos) => (todos = _todos));

	const createTodo = (e) => {
		addTodo(e.detail);
	};

	$: console.table(todos);
</script>

<h1>Todos:</h1>

<Form on:create={createTodo} />

{#if todos.length === 0}
	<h4>No todos yet..</h4>
{:else}
	<ul>
		{#each todos as todo}
			<Card {todo} />
		{/each}
	</ul>
{/if}

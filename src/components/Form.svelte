<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let todo = '';

	const create = () => {
		dispatch('create', {
			task: todo,
			isComplete: false,
			createdAt: new Date()
		});
		todo = '';
	};
</script>

<div>
	<label for="todo_input">Task:</label>
	<input id="todo_input" bind:value={todo} placeholder="Todo" />
	<button on:click={create}>Add</button>
</div>

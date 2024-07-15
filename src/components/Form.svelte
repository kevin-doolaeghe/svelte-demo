<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let todo = '';

	let error = '';

	const addTodo = () => {
		if (todo === '') {
			error = 'Task is empty';
			return;
		} else {
			error = '';
		}

		dispatch('create', {
			task: todo,
			isComplete: false,
			createdAt: new Date()
		});
		todo = '';
	};

	const onKeyPress = (e) => {
		if (e.keyCode == 13) addTodo();
	};
</script>

<div>
	<label for="todo_input">Task:</label>
	<input id="todo_input" bind:value={todo} placeholder="Todo" />
	<button on:click={addTodo}>Add</button>
	<p class="error">{error}</p>
</div>

<svelte:window on:keypress={onKeyPress} />

<style>
	.error {
		color: red;
	}
</style>

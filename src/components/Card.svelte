<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let todo;

	const markTodoAsComplete = () => {
		todo.isComplete = !todo.isComplete;
	};

	const deleteTodo = () => {
		dispatch('delete', todo);
	};
</script>

<li class:complete={todo.isComplete}>
	<div>
		<span>{todo.task}</span>
		<span>
			<button on:click={markTodoAsComplete}>✔️</button>
		</span>
		<span>
			<button on:click={deleteTodo}>❌</button>
		</span>
	</div>
</li>

<style>
	.complete {
		text-decoration: line-through;
	}
</style>

<script>
	import { updateTodo, deleteTodo } from '$lib/firebase';

	export let todo;

	const onMarkTodoAsCompleteButtonClicked = () => {
		todo.isComplete = !todo.isComplete;
		updateTodo(todo.id, { isComplete: !todo.isComplete });
	};

	const onDeleteTodoButtonClicked = () => {
		deleteTodo(todo.id);
	};
</script>

<li class:complete={todo.isComplete}>
	<div>
		<span>{todo.task}</span>
		<span>
			<button on:click={onMarkTodoAsCompleteButtonClicked}>✔️</button>
		</span>
		<span>
			<button on:click={onDeleteTodoButtonClicked}>❌</button>
		</span>
	</div>
</li>

<style>
	.complete {
		text-decoration: line-through;
	}
</style>

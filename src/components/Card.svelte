<script>
	export let todo;

	const updateStatus = (e) => {
		todo.isComplete = e.target.checked;
	};
</script>

<li class:complete={todo.isComplete}>
	<div>
		<input type="checkbox" checked={todo.isComplete} on:change={updateStatus} />
		<h4>{todo.task}</h4>
	</div>
</li>

<style>
	.complete {
		text-decoration: line-through;
	}
</style>

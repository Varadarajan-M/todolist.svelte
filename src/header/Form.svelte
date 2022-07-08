<script>
	import { createEventDispatcher } from 'svelte';

	import { fade } from 'svelte/transition';

	const NEW_TODO = {
		item: '',
		priority: '',
		label: '',
	};

	const dispatch = createEventDispatcher();
	let newTodo = { ...NEW_TODO };

	const handleSubmit = () => {
		const emptyValues = Object.values(newTodo).filter(
			(value) => value.trim().length <= 0,
		);
		if (emptyValues.length > 0) {
			alert('All fields are required');
			return;
		}
		dispatch('add-todo', newTodo);
		newTodo = { ...NEW_TODO };
	};
</script>

<form transition:fade={{ duration: 100 }} class="form">
	<input bind:value={newTodo.item} placeholder="TODO" />
	<input bind:value={newTodo.priority} placeholder="Priority" />
	<input bind:value={newTodo.label} placeholder="Label" />
	<button on:click|preventDefault={handleSubmit} class="submit"
		>Add TODO
	</button>
</form>

<style>
	.form {
		transition: 0.2s ease-in;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 0.1rem;
	}
	input {
		font-weight: 600;
		padding: 1rem;
		border: 1px solid lightblue;
		background: inherit;
		height: 30px;
		margin-block: 10px;
	}

	input,
	.submit {
		width: 48%;
		flex-basis: 48%;
		color: white;
		font-weight: 600;
		border-radius: 5px;
	}

	.submit {
		background: darkblue;
		height: 40px;
		border: none;
		font-weight: bold;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		cursor: pointer;
	}
	.submit:hover {
		opacity: 0.8;
	}
</style>

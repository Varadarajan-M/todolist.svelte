<script>
	import { createEventDispatcher } from 'svelte';
	import Card from '../lib/components/Card.svelte';
	const dispatch = createEventDispatcher();
	export let todo = {
		id: null,
		item: '',
		priority: '',
		label: '',
	};
</script>

<Card>
	<div class="w-100 h-100 todo__card">
		<div class="item">
			<h4>{todo.item}</h4>
		</div>

		<div class="label">
			<p>{todo.label}</p>
		</div>
		<div class="priority">
			<p>{todo.priority}</p>
		</div>
		<i
			on:click={() => dispatch('delete-todo', todo.id)}
			class="del-icon material-icons"
			style="font-size:20px;color:white">delete</i
		>
	</div>
</Card>

<style>
	.todo__card {
		transition: all 0.3s;
		position: relative;
		/* background: #7a0bc0; */
		background: linear-gradient(45deg, black, transparent);
		border-radius: 4px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		margin-block: 10px;
		padding-inline: 1rem;
		cursor: pointer;
		overflow: hidden;
	}

	.todo__card:hover {
		transform: scale(1.02);
		/* background: linear-gradient(); */
	}

	.item,
	.label,
	.priority {
		flex-basis: 30%;
		color: white;
	}
	.label,
	.priority {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 30px;
		border-radius: 6px;
		width: min-content;
	}
	.label {
		background: #2d0a44;
	}
	.priority {
		background: rgb(186, 3, 3);
		/* background: #681212; */
	}
	.del-icon {
		cursor: pointer;
	}
</style>

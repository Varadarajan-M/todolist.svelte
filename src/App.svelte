<script>
	import { fade } from 'svelte/transition';
	import Header from './header/Header.svelte';
	import Wrapper from './lib/components/Wrapper.svelte';
	import TodoItem from './todos/TodoItem.svelte';
	import { genId, getTodos, setTodos } from './helper';
	import mockData from './mock-data';
	import { onMount } from 'svelte';
	let todos = [];

	$: length = todos.length;

	$: document.title = `My Todos | Svelte ${length > 0 ? `(${length})` : ''}`;

	onMount(() => {
		todos = getTodos();
		if (todos?.length <= 0) {
			todos = [...mockData];
		}
	});
	const deleteTodo = ({ detail: todoID }) => {
		todos = todos.filter((todo) => todo.id !== todoID);
		setTodos(todos);
	};

	const addTodo = ({ detail: newTodo }) => {
		todos = [{ id: genId(), ...newTodo }, ...todos];
		setTodos(todos);
	};
</script>

<main class="container">
	<Wrapper>
		<Header heading="My Todos" on:add-todo={addTodo} />
		<div class="todo__wrapper">
			{#if todos.length > 0}
				{#each todos as todo (todo.id)}
					<div transition:fade>
						<TodoItem on:delete-todo={deleteTodo} {todo} />
					</div>
				{/each}
			{:else}
				<div in:fade class="empty w-100 h-100">
					<h2>Nothing Here!</h2>
				</div>
			{/if}
		</div>
	</Wrapper>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap');
	:global(body) {
		margin: 0;
		padding: 0;
	}
	:global(*) {
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}
	:global(.w-100) {
		width: 100%;
	}
	:global(.h-100) {
		height: 100%;
	}
	:global(::-webkit-scrollbar) {
		display: none;
	}
	.container {
		height: 100vh;
		width: 100vw;

		background: #1a1a40;
	}
	.container .todo__wrapper {
		padding-inline: 1rem;
		overflow: auto;
		position: relative;
	}

	.empty {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		word-wrap: break-word;
	}

	@media (min-width: 500px) {
		.container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.todo__wrapper {
			height: 80%;
		}
	}
	@media (max-width: 500px) {
		.todo__wrapper {
			height: 84%;
		}
	}
</style>

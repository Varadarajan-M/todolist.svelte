<script>
	import Button from './Button.svelte';
	import Form from './Form.svelte';

	export let heading = '';
	let formOpen = false;

	const toggleForm = () => {
		formOpen = !formOpen;
	};
</script>

<header>
	<div class="top">
		<h1>{heading}</h1>
		<Button on:click={toggleForm} icon={formOpen ? 'remove' : 'add'} />
	</div>
	{#if formOpen}
		<Form on:add-todo />
	{/if}
</header>

<style>
	header {
		background: linear-gradient(45deg, black, transparent);
		padding-inline: 1rem;
		transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.top {
		display: flex;
		color: white;
		justify-content: space-between;
		align-items: center;
		/* position: sticky; */
		/* background-color: #04040541; */
	}
</style>

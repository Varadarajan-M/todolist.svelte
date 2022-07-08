<script>
	export let icon = 'add';
</script>

<button on:click>
	<span class="material-symbols-outlined" style="color:white;">
		{icon}
	</span></button
>

<style>
	button {
		border: 3px solid #7a0bc0;
		border-radius: 18px;
		height: 37px;
		width: 37px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: darkblue;
		cursor: pointer;
		transition: all 0.3s ease-in;
	}
	button:hover {
		transform: scale(1.2);
	}
	span {
		font-weight: bolder;
		font-size: 1.7rem;
	}
</style>

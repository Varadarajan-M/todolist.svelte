<div class="wrapper">
	<slot />
</div>

<style>
	.wrapper {
		/* background: #270082; */
		background: linear-gradient(45deg, #0c2089, transparent);

		border-radius: 5px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.4s ease-in;
		overflow: hidden;
	}

	@media (min-width: 500px) {
		.wrapper {
			height: min(33rem, 33rem);
			width: min(25rem, 25rem);
		}
	}

	@media (max-width: 500px) {
		.wrapper {
			height: 100vh;
		}
	}
</style>

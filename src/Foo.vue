<template>
	<div>
		<h3 class="f6 ttu tracked mt0">Foo</h3>
		<p class="f4 lh-copy measure">{{ message }}</p>
	</div>
</template>

<script>
module.exports = {
	name: 'Foo',
	data: function() {
		return {
			message: ''
		};
	},
	created: function() {
		this.message = [1, 2, 3].map(n => n * 2).toString();
	}
};
</script>

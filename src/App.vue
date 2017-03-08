<template>
	<div>
		<nav class="w-100 pa3 ph5-ns bb b--black-10 mb3-ns">
			<router-link to='/foo'
				class="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib"
				active-class="blue">Foo</router-link>
			<router-link to='/bar'
				class="f6 fw6 hover-blue link black-70 mr2 mr3-m mr4-l dib"
				active-class="blue">Bar</router-link>
		</nav>
		<router-view class="pa3 ph5-ns black-70"></router-view>
	</div>
</template>

<style lang="scss">
	@import '~tachyons/css/tachyons.min.css';
</style>

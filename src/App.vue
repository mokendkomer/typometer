<template>
	<div class="container">
		<h1>Typometer</h1>
		<type-box :new-word="newWord" :stopped="stopped" :restart="restart"></type-box>
		<speed-display :stopped="stopped" type="average" :speed="average"></speed-display>
		<speed-display :stopped="stopped" type="current" :speed="current"></speed-display>
		<speed-display :stopped="stopped" type="maximum" :speed="maximum"></speed-display>

	</div>

</template>
<script>
export default {
	data() {
		return {
			words: [],
			times: [],
			average: 0,
			current: 0,
			maximum: 0,
			timeAtStart: null,
			timeSinceStart: null,
			interval: null,
			stopped: false,
		}
	},
	watch: {
		current(newVal, oldVal) {
			if (newVal > this.maximum) {
				this.maximum = newVal
			}
			if (oldVal !== 0 && newVal === 0) {
				this.stop()
				this.stopped = true;

			}

		}
	},
	methods: {
		newWord(words) {
			this.words = words
			if (words.length < this.words.length)
				this.times.splice(0, this.words.length - words.length)
			this.times.push(new Date())

			if (!this.timeAtStart) {
				this.timeAtStart = new Date()
				this.interval = setInterval(() => {
					// calculate average
					this.timeSinceStart = new Date() - this.timeAtStart
					const secondsSinceStart = Math.floor(this.timeSinceStart / 1000)
					this.average = Math.floor((this.words.length / secondsSinceStart) * 60)

					// calculate current
					const currentWords = this.times.filter((time) => time > new Date() - 5000).length
					const divisor = secondsSinceStart < 5 ? secondsSinceStart : 5
					this.current = (currentWords / divisor) * 60
				}, 1000)
			}
		},
		stop() {
			console.log('ez')
			document.activeElement.blur()
			clearInterval(this.interval)

		},
		restart() {
			this.words = []
			this.times = []
			this.average = 0
			this.current = 0
			this.maximum = 0
			this.timeAtStart = null
			this.timeSinceStart = null
			this.interval = null
			this.stopped = false

		}
	}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

:root {
	--blanched-almond: #ffead0ff;
	--ultra-red: #f76f8eff;
	--mauve-taupe: #96616bff;
	--charcoal: #37505cff;
	--rich-black: #113537ff;

}


body {
	background: var(--rich-black);
	color: var(--mauve-taupe);
	font-family: 'Poppins', sans-serif;

}

h1 {
	color: var(--blanched-almond)
}

.container {
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 1rem;
}
</style>
<template>
    <div class="wrapper">

        <textarea :disabled="stopped" id="textbox" @input="change" tabindex="0"
            placeholder="Start typing here.">{{ text }}</textarea>
        <p>{{ zui }}</p>
        <button v-show="stopped" @click="restartTyping">&#10006;</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            text: "",
            zui: ''
        }
    },
    props: ['newWord', 'stopped', 'restart'],
    methods: {
        change(e) {
            const texty = e.target.value
            this.text = texty
            if (texty.endsWith(' ')) {
                this.newWord(texty.split(' '))
            }
        },
        restartTyping() {
            this.text = ""
            this.restart()
        }
    },
    mounted() {
        document.getElementById('textbox').focus()

    }
}
</script>


<style scoped>
#textbox::placeholder {
    color: var(--mauve-taupe);
}

#textbox {
    font-family: unset;
    outline: none;
    border: 0;
    width: 100%;
    resize: none;
    background: transparent;
    margin: 2rem 0;
    display: block;
    height: 20vh;
    outline: none !important;
    font-size: 1rem;
    caret-color: var(--ultra-red);
    color: var(--mauve-taupe);
    transition: all 500ms ease;
}

#textbox:focus {
    color: var(--ultra-red);
    height: 50vh;
    font-size: 2rem;
}

button {
    font-size: 2rem;
    background: transparent;
    border: 0;
    color: var(--blanched-almond);
    cursor: pointer;
    position: absolute;
    top: 0;
    right: -20px
}

.wrapper {
    position: relative;
}
</style>

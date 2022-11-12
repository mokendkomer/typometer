<template>
    <div :class="['speed-display', type, stopped ? 'stopped' : null]">
        <h2>{{ type }}</h2>
        <div class="flex">
            <h1>{{ speed > 999 ? '999+' : speed }}</h1>
            <h3>WPM</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['type', 'speed', "stopped"]
}
</script>

<style scoped>
h1 {
    font-size: 8rem;
    margin-top: 0;
    transition: all 500ms ease;
}

h2 {
    margin-bottom: 0;
}

.flex {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-top: 0;
}

.speed-display {
    position: absolute;
    bottom: 1rem;
}



@media screen and (min-width: 769px) {
    .average {
        left: 20%;
    }

    .maximum {
        right: 20%;

    }

    .current {
        left: 50%;
        transform: translate(-50%, 0);
    }

    .speed-display {
        width: 300px;
    }

    .stopped h1 {
        font-size: 10rem;
    }
}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }

    .average {
        left: 1rem;
    }

    .maximum {
        right: 1rem;
    }

    .current {
        left: 50%;
        transform: translate(-50%, 0);
    }

}
</style>
<script>
    import { inview } from "svelte-inview";

    export let delay = 0;

    let isInView = false;
    const options = { rootMargin: '-10%', unobserveOnEnter: true };
    const handleChange = ({ detail }) => { isInView = detail.inView; };
</script>

<div use:inview={options} on:inview_change={handleChange} class:fadeIn={isInView} style="opacity: 0; animation-delay: {delay}ms">
    <slot />
</div>

<style>
    .fadeIn {
        animation: fadeInAnimation ease 1s;
        animation-fill-mode: forwards;
    }

    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
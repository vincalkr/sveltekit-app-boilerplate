<script lang="ts">
	// export let onDoubleClick: () => void;

	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	const dispatch = createEventDispatcher<{ trigger: string }>();

	function eventHandler() {
		dispatch('trigger', `You have successfully triggered a CUSTOM EVENT`);
	}

    function action(node: HTMLElement) {
        console.log(`Element mounted`);

        return {
            destroy() {
                console.log(`Element unmounted`);
            },
        };
    }

    onMount(() => {
        console.log(`Rectangle is mounted`);
    });

    onDestroy(() => {
        console.log(`Rectangle is unmounted`);
    });
</script>

<div
	on:click={eventHandler}
	class="w-80 h-10 bg-indigo-400 border-2 rounded-lg flex items-center justify-center transition duration-300 opacity-80 hover:opacity-90 cursor-pointer active:opacity-100"
>
	<span use:action class="font-sans text-white"> Event Dispatcher </span>
</div>

<style>
</style>

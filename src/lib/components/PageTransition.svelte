<script>
    import { fly, fade } from 'svelte/transition';
    export let refresh = '';
  </script>
  
  {#key refresh}
    <div in:fade={{  duration: 200, delay: 200 }}
         out:fade={{ duration: 200             }}>
      <slot />
    </div>
  {/key}
const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },

  "remarkPlugins": [],
  "rehypePlugins": [],

  layout: {
    blog: './src/lib/components/Bloglayout.svelte',
  }
};

export default config;
import github from 'remark-github';
import { remark } from 'remark';

const config = {
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    quotes: true,
    dashes: true,
  },

  remarkPlugins: [],
  rehypePlugins: [],
};

export default config;

// vite-plugin-remove-default-tags.ts
import { Plugin } from 'vite';

export default function removeDefaultTags(): Plugin {
  return {
    name: 'remove-default-tags',
    transformIndexHtml(html) {
      return html.replace(
        /<title>.*<\/title>/i,
        ''
      )
    },
  };
}
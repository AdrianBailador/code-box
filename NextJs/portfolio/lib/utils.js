import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { visit } from "unist-util-visit";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}



export function rehypeAddCopyButton() {
  return (tree) => {
    visit(tree, { tagName: 'pre' }, (node) => {
      const button = {
        type: 'element',
        tagName: 'button',
        properties: {
          onclick: "copyToClipboard(this)",
          className: ['copy-button']
        },
        children: [{ type: 'text', value: 'Copy' }]
      };

      node.children.unshift(button);
    });
  };
}

export function copyToClipboard(button) {
  const pre = button.parentNode;
  const code = pre.querySelector('code');
  navigator.clipboard.writeText(code.textContent)
      .then(() => { alert('Copied to clipboard!'); })
      .catch(err => { console.error('Failed to copy!', err); });
}
---
sidebar_position: 5
---

# Text

## Description

A flexible text component that renders semantic HTML elements (`p`, `div`, `span`) with dynamic styling based on size, alignment, and muted state.  

Supports polymorphic elements, multiple sizes, alignment options, muted styling, and standalone usage in Angular 21.

Think of it as a reusable, accessible text component that adapts to your design system while keeping proper HTML semantics.

## Usage

### Import

```ts
import { TextComponent } from '@ssongin/common-components';
```

### Basic example

```html
<cc-text>Lorum ipsum</cc-text>```

### Inputs

| Input     | Type                            | Default  | Description                                                                                      |
| --------- | ------------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| `element` | `'p' \| 'span' \| 'div'`        | `'p'`    | The HTML element to render. Allows polymorphic usage for semantic or layout purposes.            |
| `size`    | `'sm' \| 'md' \| 'lg'`          | `'md'`   | Visual text size. Applies corresponding font-size and line-height from design tokens.            |
| `align`   | `'left' \| 'center' \| 'right'` | `'left'` | Text alignment. Controls horizontal alignment of the text content.                               |
| `muted`   | `boolean`                       | `false`  | Applies muted/secondary styling to the text, useful for subtle or less prominent content.        |

## Notes

- Supports polymorphic elements: p, div, and span.
- Supports muted text using design token colors.
- Can be used for paragraphs, inline text, or block-level content.
- Fully standalone — no additional wrappers are needed.
- Ideal for text content in sections, cards, tooltips, and forms while maintaining consistent styling across the app.
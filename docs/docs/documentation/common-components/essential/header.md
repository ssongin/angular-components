---
sidebar_position: 4
---

# Header

## Description

A flexible header component that renders semantic HTML headings (h1–h6) based on size or explicit level inputs.

Supports dynamic sizing, accessibility overrides, and standalone usage in Angular 21.

Think of it as a reusable, semantic heading component that adapts to your design system while maintaining proper HTML structure.

## Usage

### Import

```ts
import { HeaderComponent  } from '@ssongin/common-components';
```

### Basic example

```html
<cc-header>Title</cc-header>
```

### Inputs

| Input   | Type                                               | Default     | Description                                                                                                  |
| ------- | -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `size`  | `'xxlg' \| 'xlg' \| 'lg' \| 'md' \| 'sm' \| 'xsm'` | `'md'`      | Visual size of the header. Maps to semantic heading levels if `level` is not specified.                      |
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                       | `undefined` | Optional accessibility override to force a specific heading level (`h1`–`h6`). Takes precedence over `size`. |



## Notes

- The component chooses semantic heading tags (h1–h6) automatically based on size unless level is provided.
- Supports **all common sizes**: xxlg, xlg, lg, md, sm, xsm.
- Ensures semantic HTML structure and accessibility compliance.
- Fully standalone — no additional wrappers needed.
- Ideal for headings in sections, cards, and forms while maintaining consistent styling across the app.
---
sidebar_position: 2
---

# Block

## Description

A flexible container component for grouping related content with an optional label.

Supports:

- left, center, and right label positioning
- multiple size variants
- projected Angular content
- lightweight layout grouping
- responsive styling
- standalone Angular usage

Useful for:

- forms
- settings sections
- grouped controls
- dashboard panels
- content segmentation

---

## Usage

### Import

```ts
import {
  BlockComponent,
} from '@ssongin/common-components';
```

---

## Basic example

```html
<cc-block label="Profile">
  <p>
    Profile content
  </p>
</cc-block>
```

## Label positions

Labels can be aligned:

- left
- center
- right

```html
<cc-block
  label="Centered label"
  position="center">
  <q>
    Content
  </q>
</cc-block>
```

## Sizes

Blocks support multiple size variants.

Available sizes:
- sm
- md
- lg
```html
<cc-block
  label="Large label"
  size="lg">
  Content
</cc-block>
```

## Without label
The label is optional.
```html
<cc-block>
  <p>
    Content without label
  </p>
</cc-block>
```
## Inputs

| Input      | Type                            | Default  | Description          |
| ---------- | ------------------------------- | -------- | -------------------- |
| `label`    | `string`                        | `''`     | Optional block label |
| `position` | `'left' \| 'center' \| 'right'` | `'left'` | Label alignment      |
| `size`     | `'sm' \| 'md' \| 'lg'`          | `'md'`   | Block size variant   |

## Accessibility
The component:
- preserves semantic HTML structure
- supports screen readers
- works with projected interactive content
- does not interfere with native focus behavior

---

## Notes
- Standalone Angular component
- Uses OnPush change detection
- Supports dynamic input updates
- Compatible with SSR
- Works with dark/light themes
- Lightweight wrapper component
- Suitable for reusable layouts
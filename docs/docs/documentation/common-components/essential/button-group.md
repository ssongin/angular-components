---
sidebar_position: 2
---

# Button Group

## Description

A wrapper for multiple buttons.  
Keeps them visually grouped and aligned.  
Supports horizontal and vertical orientation, and accessibility attributes.

Think of it as a container that makes your buttons behave like a set of related controls (like pagination, media controls, or form actions).

## Usage

### Import

```ts
import { ButtonGroupComponent } from '@ssongin/common-components';
```

### Basic example

```html
<cc-button-group aria-label="Pagination">
  <cc-button>Prev</cc-button>
  <cc-button>Next</cc-button>
</cc-button-group>
```

### Inputs

| Input             | Type                         | Default        | Description                                      |
| ----------------- | ---------------------------- | -------------- | ------------------------------------------------ |
| `orientation`     | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction of the button group             |
| `aria-label`      | `string`                     | —              | Accessibility label for the group                |
| `aria-labelledby` | `string`                     | —              | Reference ID of an element that labels the group |

## Notes

- Automatically manages border radius so that buttons appear joined, but edges remain rounded.
- All buttons in the group are aligned: equal height in horizontal, equal width in vertical orientation.
- Works with any combination of cc-button variants and sizes.
- Standalone Angular component — no additional wrappers needed.
- Fully accessible with role="group" and aria attributes.
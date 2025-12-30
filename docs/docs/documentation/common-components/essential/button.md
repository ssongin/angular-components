---
sidebar_position: 1
---

# Button component

## Description

It’s just a button.  
It clicks.  
Sometimes it doesn’t (when disabled).

Honestly, you already know what a button does — this one just does it consistently.

## Usage

### Import

```ts
import { ButtonComponent } from '@ssongin/common-components';
```

### Basic example

```html
<cc-button>Click me!</cc-button>
```

### Inputs

| Input        | Type                                                                    | Default     | Description                          |
| ------------ | ----------------------------------------------------------------------- | ----------- | ------------------------------------ |
| `type`       | `'button' \| 'submit'`                                                  | `'button'`  | Native button type                   |
| `variant`    | `'default' \| 'outline' \| 'primary' \| 'warn' \| 'critical' \| 'link'` | `'default'` | Visual style of the button           |
| `size`       | `'sm' \| 'md' \| 'lg'`                                                  | `'md'`      | Button size                          |
| `disabled`   | `boolean`                                                               | `false`     | Disables the button and click events |
| `aria-label` | `string`                                                                | —           | Accessibility label                  |

| Output    | Payload | Description                                                    |
| --------- | ------- | -------------------------------------------------------------- |
| `clicked` | `Event` | Emitted when the button is clicked (not emitted when disabled) |

## Notes

- This is a standalone Angular component
- No extra wrappers, no magic
- Works in forms, toolbars, dialogs, and anywhere else a button should exist
---
sidebar_position: 3
---

# Divider

## Description

A simple separator used to visually divide content.  
Supports **horizontal** and **vertical** orientations, optional **dashed** lines, **inset padding**, alignment, and accessibility attributes.

Think of it as a flexible component to separate sections, fields, or UI elements, with optional content for horizontal dividers.

## Usage

### Import

```ts
import { DividerComponent } from '@ssongin/common-components';
```

### Basic example

```html
<cc-divider/>
```

```html
<cc-divider>OR</cc-divider>
```

### Inputs

| Input         | Type                           | Default        | Description                                                                |
| ------------- | ------------------------------ | -------------- | -------------------------------------------------------------------------- |
| `orientation` | `'horizontal' \| 'vertical'`   | `'horizontal'` | Layout direction of the divider                                            |
| `align`       | `'start' \| 'center' \| 'end'` | `'center'`     | Alignment of the divider line(s) relative to the content (horizontal only) |
| `dashed`      | `boolean`                      | `false`        | Whether the divider line is dashed                                         |
| `inset`       | `boolean`                      | `false`        | Adds horizontal padding to the divider line                                |

## Notes

- **Horizontal dividers** can optionally display content in the middle. If no content is provided, a single continuous line is displayed.
- Vertical dividers stretch to fill the parent container height.
- Supports solid and dashed styles. Dashed lines automatically adjust for horizontal or vertical orientation.
- Alignment controls the proportional spacing of lines when content is present: start, center, end.
- Inset adds padding inside the parent container to prevent the line from touching edges.
- Fully accessible with role="separator" and aria-orientation attributes.
- Standalone Angular component — no additional wrappers needed.
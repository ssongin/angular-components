---
sidebar_position: 1
---

# Tabs

## Description

A flexible and accessible tabs component for organizing related content into multiple views.

Supports:

- top, left, and right tab positioning
- keyboard navigation
- disabled tabs
- cached rendering
- custom tab labels using templates
- full accessibility support

The component follows a browser-like tab design where the active tab visually connects to its content panel.

---

## Usage

### Import

```ts
import {
  TabsComponent,
  TabComponent,
  TabLabelDirective,
  TabContentDirective,
} from '@ssongin/common-components';
```

---

## Basic example

```html
<cc-tabs>

  <cc-tab id="overview">

    <ng-template ccTabLabel>
      Overview
    </ng-template>

    <ng-template ccTabContent>
      Overview content
    </ng-template>

  </cc-tab>

  <cc-tab id="analytics">

    <ng-template ccTabLabel>
      Analytics
    </ng-template>

    <ng-template ccTabContent>
      Analytics content
    </ng-template>

  </cc-tab>

</cc-tabs>
```

---

## Custom labels

Tab labels support arbitrary Angular templates.

Useful for:

- icons
- badges
- counters
- avatars
- complex layouts

```html
<cc-tab id="notifications">

  <ng-template ccTabLabel>

    <div
      style="
        display: flex;
        align-items: center;
        gap: 8px;
      ">

      <span>🔔</span>

      <span>Notifications</span>

      <span class="badge">
        12
      </span>

    </div>

  </ng-template>

  <ng-template ccTabContent>
    Notifications content
  </ng-template>

</cc-tab>
```

---

## Positions

Tabs can be displayed:

- on top
- on the left
- on the right

```html
<cc-tabs position="left">
  ...
</cc-tabs>
```

---

## Cached rendering

By default, tabs don't use cached rendering.

If enabled:

- content is recreated only once
- component state is preserved
- hidden tabs remain in the DOM

Useful for:

- forms
- filters
- checkboxes
- data-heavy views

```html
<cc-tabs [cached]="true">
  ...
</cc-tabs>
```

---

## Non-cached rendering

Disable caching to fully destroy inactive tab content.

```html
<cc-tabs [cached]="false">
  ...
</cc-tabs>
```

Useful when:

- content is expensive
- state should reset on switch
- memory usage matters

---

## Per-tab cache override

Individual tabs can override the parent caching strategy.

```html
<cc-tabs [cached]="false">

  <cc-tab
    id="persistent"
    [cached]="true">

    <ng-template tabLabel>
      Persistent tab
    </ng-template>

    <ng-template tabContent>
      This tab stays mounted.
    </ng-template>

  </cc-tab>

</cc-tabs>
```

---

## Disabled tabs

Disabled tabs:

- cannot be activated
- are skipped in keyboard navigation
- have disabled styling
- remain accessible

```html
<cc-tab
  id="security"
  [disabled]="true">

  <ng-template tabLabel>
    Security
  </ng-template>

  <ng-template tabContent>
    Security content
  </ng-template>

</cc-tab>
```

---

## Two-way binding

The active tab can be controlled externally.

```html
<cc-tabs [(activeId)]="activeTab">
  ...
</cc-tabs>
```

```ts
activeTab = 'overview';
```

---

## Inputs

### `cc-tabs`

| Input        | Type                           | Default  | Description |
| --- |--------------------------------|----------| --- |
| `position` | `'top' \| 'left' \| 'right'` | `'top'` | Tab labels position |
| `cached` | `boolean`                      | `true` | Preserve rendered tab content |
| `activeId` | `string \| null`               | `null` | Currently active tab ID |

---

### `cc-tab`

| Input | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | `string` | — | Unique tab identifier |
| `disabled` | `boolean` | `false` | Disables the tab |
| `cached` | `boolean \| undefined` | `undefined` | Overrides parent caching strategy |

---

## Accessibility

The component supports:

- `role="tablist"`
- `role="tab"`
- `role="tabpanel"`
- `aria-selected`
- `aria-controls`
- `aria-labelledby`
- keyboard navigation

Keyboard support:

| Key | Action |
| --- | --- |
| `ArrowLeft` | Previous horizontal tab |
| `ArrowRight` | Next horizontal tab |
| `ArrowUp` | Previous vertical tab |
| `ArrowDown` | Next vertical tab |
| `Home` | First tab |
| `End` | Last tab |

Disabled tabs are automatically skipped during keyboard navigation.

---

## Notes

- Standalone Angular components
- Signal-based internal state management
- Supports content projection via Angular templates
- Browser-style active tab appearance
- Works with dark/light themes using CSS variables
- Compatible with Storybook and SSR
- Supports dynamic tab lists
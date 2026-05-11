import {
  Component,
  ContentChild,
  input,
} from '@angular/core';

import { TabLabelDirective } from './tab-label.directive';
import { TabContentDirective } from './tab-content.directive';

@Component({
  selector: 'cc-tab',
  standalone: true,

  /**
   * Pure logical container.
   * Content is rendered by cc-tabs.
   */
  template: '',
})
export class TabComponent {

  readonly id =
    input.required<string>();

  readonly disabled =
    input(false);

  /**
   * undefined = inherit parent strategy
   */
  readonly cached =
    input<boolean | undefined>(undefined);

  @ContentChild(TabLabelDirective)
  labelTemplate?: TabLabelDirective;

  @ContentChild(TabContentDirective)
  contentTemplate?: TabContentDirective;
}
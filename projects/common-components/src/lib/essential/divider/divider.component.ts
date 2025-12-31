import { Component, HostBinding, input } from '@angular/core';

export type Orientation = 'horizontal' | 'vertical';
export type Align = 'start' | 'center' | 'end';

@Component({
  selector: 'cc-divider',
  standalone: true,
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent {
  orientation = input<Orientation>('horizontal');
  align = input<Align>('center');
  inset = input(false);
  dashed = input(false);

  @HostBinding('attr.role') role = 'separator';

  @HostBinding('attr.aria-orientation')
  get ariaOrientation() {
    return this.orientation();
  }
}

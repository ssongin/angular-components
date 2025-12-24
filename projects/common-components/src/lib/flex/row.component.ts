import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-row',
  standalone: true,
  template: `
    <div class="row" [style.gap]="gap">
      <ng-content />
    </div>
  `,
  styles: [`
    .row {
      display: flex;
      flex-direction: row;
    }
  `],
})
export class RowComponent {
  @Input() gap: string = '1rem';
}

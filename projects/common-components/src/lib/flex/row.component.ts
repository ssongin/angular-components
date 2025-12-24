import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-row',
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
  @Input() gap = '1rem';
}

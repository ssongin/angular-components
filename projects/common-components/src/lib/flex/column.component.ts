import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-column',
  standalone: true,
  template: `
    <div class="column" [style.gap]="gap">
      <ng-content />
    </div>
  `,
  styles: [`
    .column {
      display: flex;
      flex-direction: column;
    }
  `],
})
export class ColumnComponent {
  @Input() gap: string = '1rem';
}
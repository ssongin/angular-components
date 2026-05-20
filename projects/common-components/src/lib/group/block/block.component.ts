import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'cc-block',
  standalone: true,
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockComponent {
  @Input() label = '';
  @Input() position: 'left' | 'center' | 'right' = 'left';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @HostBinding('class')
  get hostClasses(): string {
    return [
      `cc-block--${this.position}`,
      `cc-block--${this.size}`,
    ].join(' ');
  }
}
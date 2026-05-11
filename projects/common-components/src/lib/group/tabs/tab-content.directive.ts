import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[tabContent],[ccTabContent]',
  standalone: true,
})
export class TabContentDirective {
  readonly templateRef = inject<TemplateRef<unknown>>(TemplateRef);
}
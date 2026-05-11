import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[tabLabel],[ccTabLabel]',
  standalone: true,
})
export class TabLabelDirective {
  readonly templateRef = inject<TemplateRef<unknown>>(TemplateRef);
}
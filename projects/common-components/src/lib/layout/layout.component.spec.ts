import { TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  it('should create', () => {
    const fixture = TestBed.createComponent(LayoutComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply centered class', () => {
    const fixture = TestBed.createComponent(LayoutComponent);
    fixture.componentInstance.type = 'centered';
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('div');
    expect(div.classList.contains('layout-centered')).toBe(true);
  });
});

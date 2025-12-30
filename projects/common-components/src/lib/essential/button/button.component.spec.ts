import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { vi } from 'vitest';

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let component: ButtonComponent;
  let host: HTMLElement;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    host = fixture.nativeElement;

    fixture.detectChanges(); // ✅ initial render

    button = host.querySelector('button')!;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply base host class', () => {
    expect(host.classList.contains('cc-button')).toBe(true);
  });

  it('should apply type attribute', () => {
    fixture.componentRef.setInput('type', 'submit');
    fixture.detectChanges();

    expect(button.type).toBe('submit');
  });

  it('should apply variant class on host', () => {
    fixture.componentRef.setInput('variant', 'primary');
    fixture.detectChanges();

    expect(host.classList.contains('cc-button--primary')).toBe(true);
  });

  it('should apply size class on host', () => {
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();

    expect(host.classList.contains('cc-button--lg')).toBe(true);
  });

  it('should not apply primary class when variant is default', () => {
    fixture.componentRef.setInput('variant', 'default');
    fixture.detectChanges();

    expect(host.classList.contains('cc-button--primary')).toBe(false);
  });

  it('should emit click event when clicked', () => {
    const spy = vi.spyOn(component.clicked, 'emit');

    button.click();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should NOT emit click event when disabled', () => {
    const spy = vi.spyOn(component.clicked, 'emit');

    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    button.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('should set disabled attribute on button when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    expect(button.disabled).toBe(true);
  });

  it('should apply is-disabled class on host when disabled', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    expect(host.classList.contains('is-disabled')).toBe(true);
  });
});

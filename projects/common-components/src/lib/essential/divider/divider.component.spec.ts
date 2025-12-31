import { TestBed } from '@angular/core/testing';
import { DividerComponent, Orientation, Align } from './divider.component';
import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [DividerComponent],
  template: `
    <cc-divider
      [orientation]="orientation()"
      [align]="align()"
      [inset]="inset()"
      [dashed]="dashed()"
    >
      {{ content() }}
    </cc-divider>
  `,
})
class TestHostComponent {
  orientation = signal<Orientation>('horizontal');
  align = signal<Align>('center');
  inset = signal(false);
  dashed = signal(false);
  content = signal('');
}

describe('DividerComponent', () => {
  function setup() {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    const host = fixture.componentInstance;
    const divider: HTMLElement =
      fixture.nativeElement.querySelector('.cc-divider');

    return { fixture, host, divider };
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();
  });

  it('renders divider', () => {
    const { divider } = setup();
    expect(divider).toBeTruthy();
  });

  it('has role="separator" and aria-orientation', () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const hostEl: HTMLElement =
      fixture.nativeElement.querySelector('cc-divider');

    expect(hostEl.getAttribute('role')).toBe('separator');
    expect(hostEl.getAttribute('aria-orientation')).toBe('horizontal');

    fixture.componentInstance.orientation.set('vertical');
    fixture.detectChanges();

    expect(hostEl.getAttribute('aria-orientation')).toBe('vertical');
  });

  it('is horizontal by default', () => {
    const { divider } = setup();
    expect(divider.classList.contains('horizontal')).toBe(true);
    expect(divider.classList.contains('vertical')).toBe(false);
  });

  it('renders vertical orientation', () => {
    const { fixture, host, divider } = setup();

    host.orientation.set('vertical');
    fixture.detectChanges();

    expect(divider.classList.contains('vertical')).toBe(true);
    expect(divider.classList.contains('horizontal')).toBe(false);
  });

  it('renders content when provided', () => {
    const { fixture, host, divider } = setup();

    host.content.set('Section');
    fixture.detectChanges();

    const content = divider.querySelector('.content');
    expect(content).toBeTruthy();
    expect(content?.textContent?.trim()).toBe('Section');
  });

  it('does not render content text when empty', () => {
    const { divider } = setup();

    const content = divider.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('');
  });

it('applies dashed class', () => {
    const { fixture, host, divider } = setup();

    host.dashed.set(true);
    fixture.detectChanges();

    expect(divider.classList.contains('dashed')).toBe(true);
  });

  it('applies inset class', () => {
    const { fixture, host, divider } = setup();

    host.inset.set(true);
    fixture.detectChanges();

    expect(divider.classList.contains('inset')).toBe(true);
  });

  it('applies alignment classes', () => {
    const { fixture, host, divider } = setup();

    host.align.set('start');
    fixture.detectChanges();
    expect(divider.classList.contains('align-start')).toBe(true);

    host.align.set('center');
    fixture.detectChanges();
    expect(divider.classList.contains('align-center')).toBe(true);

    host.align.set('end');
    fixture.detectChanges();
    expect(divider.classList.contains('align-end')).toBe(true);
  });

  it('renders two lines when horizontal', () => {
    const { divider } = setup();
    const lines = divider.querySelectorAll('.line');
    expect(lines.length).toBe(2);
  });

  it('renders one line when vertical', () => {
    const { fixture, host, divider } = setup();

    host.orientation.set('vertical');
    fixture.detectChanges();

    const lines = divider.querySelectorAll('.line');
    expect(lines.length).toBe(1);
  });
});
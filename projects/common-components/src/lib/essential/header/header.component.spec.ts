import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent, HeaderSize, HeaderLevel } from './header.component';
import { CommonModule } from '@angular/common';

@Component({
  template: `<cc-header [size]="size" [level]="level">Hello World</cc-header>`,
  standalone: true,
  imports: [HeaderComponent, CommonModule],
})
class TestHostComponent {
  size: HeaderSize = 'md';
  level?: HeaderLevel;
}

@Component({
  template: `
    <cc-header size="xxlg">H1</cc-header>
    <cc-header size="xlg">H2</cc-header>
    <cc-header size="lg">H3</cc-header>
    <cc-header size="md">H4</cc-header>
    <cc-header size="sm">H5</cc-header>
    <cc-header size="xsm">H6</cc-header>
  `,
  standalone: true,
  imports: [HeaderComponent, CommonModule],
})
class MultiHeaderHostComponent {}

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let host: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    host = fixture.componentInstance;
  });

  it('should create', () => {
    expect(host).toBeTruthy();
  });

  it('should render projected content', () => {
    fixture.detectChanges();
    const heading = fixture.debugElement.query(By.css('h4'));
    expect(heading).toBeTruthy();
    expect(heading.nativeElement.textContent.trim()).toBe('Hello World');
  });

  const sizeMap: Record<HeaderSize, string> = {
    xxlg: 'h1',
    xlg: 'h2',
    lg: 'h3',
    md: 'h4',
    sm: 'h5',
    xsm: 'h6',
  };

  Object.entries(sizeMap).forEach(([size, tag]) => {
    it(`should render correct heading tag for size ${size}`, () => {
      host.size = size as HeaderSize;
      host.level = undefined;
      fixture.detectChanges();

      const heading = fixture.debugElement.query(By.css(tag));
      expect(heading).toBeTruthy();
      expect(heading.nativeElement.textContent.trim()).toBe('Hello World');
      expect(heading.nativeElement.classList).toContain(size);
    });
  });

it('should override heading tag with level input', () => {
  host.size = 'xxlg';
  host.level = 3 as HeaderLevel; // ✅ cast to HeaderLevel
  fixture.detectChanges();

  const heading = fixture.debugElement.query(By.css('h3'));
  expect(heading).toBeTruthy();
  expect(heading.nativeElement.classList).toContain('xxlg');
  expect(heading.nativeElement.textContent.trim()).toBe('Hello World');
});

  it('should render multiple headers in sequence correctly', () => {
    const multiFixture = TestBed.createComponent(MultiHeaderHostComponent);
    multiFixture.detectChanges();

    const headings = multiFixture.nativeElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
    expect(headings.length).toBe(6);
    expect(headings[0].textContent.trim()).toBe('H1');
    expect(headings[5].textContent.trim()).toBe('H6');
  });
});

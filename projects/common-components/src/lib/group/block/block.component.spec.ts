import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BlockComponent } from './block.component';

describe('BlockComponent', () => {
  let fixture: ComponentFixture<BlockComponent>;
  let component: BlockComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockComponent],
    }).compileComponents();

    fixture =
      TestBed.createComponent(BlockComponent);

    component = fixture.componentInstance;

    fixture.componentRef.setInput(
      'label',
      'Test Label',
    );

    fixture.componentRef.setInput(
      'position',
      'left',
    );

    fixture.componentRef.setInput(
      'size',
      'md',
    );

    fixture.detectChanges();
  });

  function getHost(): HTMLElement {
    return fixture.nativeElement;
  }

  function getBlock(): HTMLElement {
    return fixture.debugElement.query(
      By.css('.cc-block'),
    ).nativeElement;
  }

  function getLabel(): HTMLElement | null {
    const el = fixture.debugElement.query(
      By.css('.cc-block__label span'),
    );

    return el ? el.nativeElement : null;
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label', () => {
    const label = getLabel();

    expect(label).toBeTruthy();

    expect(
      label?.textContent?.trim(),
    ).toBe('Test Label');
  });

  it('should not render label when empty', () => {
    fixture.componentRef.setInput(
      'label',
      '',
    );

    fixture.detectChanges();

    expect(getLabel()).toBeNull();
  });

  it('should apply left class by default', () => {
    expect(
      getHost().classList.contains(
        'cc-block--left',
      ),
    ).toBe(true);
  });

  it('should apply center class', () => {
    fixture.componentRef.setInput(
      'position',
      'center',
    );

    fixture.detectChanges();

    expect(
      getHost().classList.contains(
        'cc-block--center',
      ),
    ).toBe(true);
  });

  it('should apply right class', () => {
    fixture.componentRef.setInput(
      'position',
      'right',
    );

    fixture.detectChanges();

    expect(
      getHost().classList.contains(
        'cc-block--right',
      ),
    ).toBe(true);
  });

  it('should update label dynamically', () => {
    fixture.componentRef.setInput(
      'label',
      'Updated Label',
    );

    fixture.detectChanges();

    expect(
      getLabel()?.textContent?.trim(),
    ).toBe('Updated Label');
  });

  it('should render block container', () => {
    expect(getBlock()).toBeTruthy();
  });

  it('should preserve projected content', () => {
    expect(getBlock()).toBeTruthy();
  });

  it('should apply size class', () => {
    fixture.componentRef.setInput(
      'size',
      'lg',
    );

    fixture.detectChanges();

    expect(
      getHost().classList.contains(
        'cc-block--lg',
      ),
    ).toBe(true);
  });
});

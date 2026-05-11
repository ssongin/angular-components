import {
  Component,
} from '@angular/core';

import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

import { TabLabelDirective } from './tab-label.directive';
import { TabContentDirective } from './tab-content.directive';

@Component({
  standalone: true,
  imports: [
    TabsComponent,
    TabComponent,
    TabLabelDirective,
    TabContentDirective,
  ],
  template: `
    <cc-tabs
      [position]="position"
      [cached]="cached">

      <cc-tab
        id="overview">

        <ng-template tabLabel>
          Overview
        </ng-template>

        <ng-template tabContent>
          <div data-testid="overview-content">
            Overview content
          </div>
        </ng-template>

      </cc-tab>

      <cc-tab
        id="analytics">

        <ng-template tabLabel>
          Analytics
        </ng-template>

        <ng-template tabContent>
          <div data-testid="analytics-content">
            Analytics content
          </div>
        </ng-template>

      </cc-tab>

      <cc-tab
        id="disabled"
        [disabled]="true">

        <ng-template tabLabel>
          Disabled
        </ng-template>

        <ng-template tabContent>
          <div data-testid="disabled-content">
            Disabled content
          </div>
        </ng-template>

      </cc-tab>

    </cc-tabs>
  `,
})
class TestHostComponent {

  position:
    'top'
    | 'left'
    | 'right' = 'top';

  cached = true;

  activeId: string | null = null;
}

describe('TabsComponent', () => {

  let fixture:
    ComponentFixture<TestHostComponent>;

  let host:
    TestHostComponent;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture =
      TestBed.createComponent(
        TestHostComponent,
      );

    host = fixture.componentInstance;

  fixture.detectChanges();

  // Allow any microtasks queued during lifecycle hooks to run
  await Promise.resolve();

  // Apply changes after microtasks (e.g. queued activation)
  fixture.detectChanges();
  });

  function getTabButtons(): HTMLButtonElement[] {

    return fixture.debugElement
      .queryAll(By.css('.ui-tabs__tab'))
      .map(debug => debug.nativeElement);
  }

  function getPanel(
    testId: string,
  ): HTMLElement | null {

    return fixture.nativeElement.querySelector(
      `[data-testid="${testId}"]`,
    );
  }

  function getTabsComponent(): TabsComponent {
    return fixture.debugElement
      .query(By.directive(TabsComponent))
      .componentInstance as TabsComponent;
  }

  function getActiveId(): string | null {
    return getTabsComponent().activeId();
  }

  it(
    'should create',
    () => {

      expect(host).toBeTruthy();
    },
  );

  it(
    'should activate first non-disabled tab by default',
    () => {

  expect(getActiveId()).toBe('overview');
    },
  );

  it(
    'should render only active panel initially',
    () => {

      expect(
        getPanel('overview-content'),
      ).toBeTruthy();

      expect(
        getPanel('analytics-content'),
      ).toBeFalsy();
    },
  );

  it(
    'should switch active tab on click',
    () => {

      const buttons = getTabButtons();

      buttons[1].click();

      fixture.detectChanges();

  expect(getActiveId()).toBe('analytics');

      expect(
        getPanel('analytics-content'),
      ).toBeTruthy();
    },
  );

  it(
    'should not activate disabled tab',
    () => {

      const buttons = getTabButtons();

      buttons[2].click();

      fixture.detectChanges();

  expect(getActiveId()).not.toBe('disabled');
    },
  );

  it(
    'should apply active class',
    () => {

      const buttons = getTabButtons();

      expect(
        buttons[0].classList.contains(
          'ui-tabs__tab--active',
        ),
      ).toBeTruthy();

      expect(
        buttons[1].classList.contains(
          'ui-tabs__tab--active',
        ),
      ).toBe(false);
    },
  );

  it(
    'should support keyboard navigation',
    () => {

      const buttons = getTabButtons();

      buttons[0].dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowRight',
        }),
      );

      fixture.detectChanges();

  expect(getActiveId()).toBe('analytics');
    },
  );

  it(
    'should skip disabled tabs in keyboard navigation',
  async () => {

  getTabsComponent().activeId.set('analytics');
  fixture.detectChanges();

      const buttons = getTabButtons();

      buttons[1].dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowRight',
        }),
      );

      fixture.detectChanges();

      await Promise.resolve();
      fixture.detectChanges();

      /**
       * should stay because next tab
       * is disabled
       */

  expect(getActiveId()).toBe('overview');
    },
  );

  it(
    'should support Home key',
  async () => {

  getTabsComponent().activeId.set('analytics');
  fixture.detectChanges();

      const buttons = getTabButtons();

      buttons[1].dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'Home',
        }),
      );

      fixture.detectChanges();

      await Promise.resolve();
      fixture.detectChanges();

  expect(getActiveId()).toBe('overview');
    },
  );

  it(
    'should support End key',
    () => {

  getTabsComponent().activeId.set('overview');

      const buttons = getTabButtons();

      buttons[0].dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'End',
        }),
      );

      fixture.detectChanges();

      /**
       * disabled tab skipped
       */

      expect(getActiveId())
        .toBe('analytics');
    },
  );

  it(
    'should apply top position class',
    () => {

      const tabs =
        fixture.nativeElement.querySelector(
          '.ui-tabs',
        );

      expect(
        tabs.classList.contains(
          'ui-tabs--top',
        ),
      ).toBeTruthy();
    },
  );

  it(
    'should apply left position class',
    async () => {
  // create a fresh host so changing inputs won't trigger expression-changed errors
  const fixture2 = TestBed.createComponent(TestHostComponent);
  const host2 = fixture2.componentInstance;
  host2.position = 'left';
  fixture2.detectChanges();
  await Promise.resolve();
  fixture2.detectChanges();

  const tabs = fixture2.nativeElement.querySelector('.ui-tabs');

  expect(tabs.classList.contains('ui-tabs--left')).toBeTruthy();
    },
  );

  it(
    'should apply right position class',
    async () => {
  // create a fresh host so changing inputs won't trigger expression-changed errors
  const fixture2 = TestBed.createComponent(TestHostComponent);
  const host2 = fixture2.componentInstance;
  host2.position = 'right';
  fixture2.detectChanges();
  await Promise.resolve();
  fixture2.detectChanges();

  const tabs = fixture2.nativeElement.querySelector('.ui-tabs');

  expect(tabs.classList.contains('ui-tabs--right')).toBeTruthy();
    },
  );

  it(
    'should preserve cached tab content',
    () => {

      host.cached = true;

      fixture.detectChanges();

      const buttons = getTabButtons();

      buttons[1].click();

      fixture.detectChanges();

      buttons[0].click();

      fixture.detectChanges();

      expect(
        getPanel('analytics-content'),
      ).toBeTruthy();
    },
  );

  it(
    'should destroy non-cached tab content',
    async () => {
      // create a fresh host with cached = false to avoid host timing issues
      const fixture2 = TestBed.createComponent(TestHostComponent);
      const host2 = fixture2.componentInstance;
      host2.cached = false;
      fixture2.detectChanges();
      await Promise.resolve();
      fixture2.detectChanges();

      const buttons = fixture2.debugElement
        .queryAll(By.css('.ui-tabs__tab'))
        .map(d => d.nativeElement as HTMLButtonElement);

      buttons[1].click();
      fixture2.detectChanges();
      await Promise.resolve();
      fixture2.detectChanges();

      expect(fixture2.nativeElement.querySelector('[data-testid="analytics-content"]')).toBeTruthy();

      buttons[0].click();
      fixture2.detectChanges();
      await Promise.resolve();
      fixture2.detectChanges();

      expect(fixture2.nativeElement.querySelector('[data-testid="analytics-content"]')).toBeFalsy();
    },
  );

  it(
    'should set proper aria attributes',
    () => {

      const buttons = getTabButtons();

      expect(
        buttons[0].getAttribute(
          'role',
        ),
      ).toBe('tab');

      expect(
        buttons[0].getAttribute(
          'aria-selected',
        ),
      ).toBe('true');
    },
  );
});
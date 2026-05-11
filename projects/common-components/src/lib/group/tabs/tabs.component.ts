import {
  Component,
  contentChildren,
  AfterContentInit,
  input,
  model,
  signal,
} from '@angular/core';

import { NgTemplateOutlet, CommonModule } from '@angular/common';

import { TabsPosition } from './model/tabs.types';
import { TabComponent } from './tab.component';

@Component({
  selector: 'cc-tabs',
  standalone: true,
  imports: [NgTemplateOutlet, CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements AfterContentInit {

  readonly position =
    input<TabsPosition>('top');

  /**
   * When true:
   * - tab content is created only once
   * - state persists between switches
   */
  readonly cached =
    input(false);

  readonly activeId =
    model<string | null>(null);

  readonly tabs =
    contentChildren(TabComponent);

  /**
   * Tracks which tabs were ever activated (for caching)
   */
  private readonly renderedTabs =
    signal(new Set<string>());

  ngAfterContentInit(): void {
    const tabs = this.tabs();
    if (!tabs.length) return;

    const firstAvailable = tabs.find(t => !t.disabled());
    if (!firstAvailable) return;

    queueMicrotask(() => {
      if (this.activeId()) return;
      this.activateTab(firstAvailable);
    });
  }

  isActive(tab: TabComponent): boolean {
    return this.activeId() === tab.id();
  }

  activateTab(tab: TabComponent): void {

    if (tab.disabled()) {
      return;
    }

    const id = tab.id();

    this.activeId.set(id);

    if (this.isCached(tab)) {

      this.renderedTabs.update(set => {
        set.add(id);
        return new Set(set);
      });
    }
  }

  isCached(tab: TabComponent): boolean {
    return tab.cached() ?? this.cached();
  }

  shouldRender(tab: TabComponent): boolean {

    if (!this.isCached(tab)) {
      return this.isActive(tab);
    }

    return (
      this.isActive(tab)
      || this.renderedTabs().has(tab.id())
    );
  }

  tabButtonId(tab: TabComponent): string {
    return `ui-tab-button-${tab.id()}`;
  }

  panelId(tab: TabComponent): string {
    return `ui-tab-panel-${tab.id()}`;
  }

  onKeydown(
    event: KeyboardEvent,
    currentTab: TabComponent,
  ): void {

    const tabs = this.tabs()
      .filter(tab => !tab.disabled());

    const currentIndex =
      tabs.indexOf(currentTab);

    if (currentIndex === -1) {
      return;
    }

    const isHorizontal =
      this.position() === 'top';

    let targetIndex: number | null = null;

    switch (event.key) {

      case 'ArrowRight':

        if (isHorizontal) {
          targetIndex =
            (currentIndex + 1) % tabs.length;
        }

        break;

      case 'ArrowLeft':

        if (isHorizontal) {
          targetIndex =
            (currentIndex - 1 + tabs.length)
            % tabs.length;
        }

        break;

      case 'ArrowDown':

        if (!isHorizontal) {
          targetIndex =
            (currentIndex + 1) % tabs.length;
        }

        break;

      case 'ArrowUp':

        if (!isHorizontal) {
          targetIndex =
            (currentIndex - 1 + tabs.length)
            % tabs.length;
        }

        break;

      case 'Home':
        targetIndex = 0;
        break;

      case 'End':
        targetIndex = tabs.length - 1;
        break;

      default:
        return;
    }

    if (targetIndex === null) {
      return;
    }

    event.preventDefault();

    const targetTab =
      tabs[targetIndex];

    this.activateTab(targetTab);

    queueMicrotask(() => {

      const button =
        document.getElementById(
          this.tabButtonId(targetTab),
        );

      button?.focus();
    });
  }
}
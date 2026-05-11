export type TabsPosition =
  | 'top'
  | 'left'
  | 'right';

export interface TabChangeEvent {
  previousId: string | null;
  currentId: string;
}
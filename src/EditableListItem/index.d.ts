import * as React from 'react';
import { InputStatus } from '../Input';

export enum EditableListItemSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export interface EditableListItemProps {
  dataHook?: string;
  className?: string;
  placeholder?: string;
  onApprove(value: string): void;
  onCancel(): void;
  cancelButtonTooltip?: string;
  approveButtonTooltip?: string;
  size?: EditableListItemSize;
  status?: InputStatus;
  statusMessage?: string;
}

export default class EditableListItem extends React.PureComponent<
  EditableListItemProps
> {}

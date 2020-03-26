import { PopoverProps } from './Popover';
import { TooltipProps } from './Tooltip';

export interface InjectedFocusableProps {
  onBlur?: () => void;
  onFocus?: () => void;
}

export type IconElement = React.ReactElement<any>;

export type WixComponentClickOutsideEventHandler = (
  e: TouchEvent | MouseEvent,
) => void;

export type OmitPolyfill<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface FocusOptionsPolyfill {
  preventScroll?: boolean;
}

export type MoveByOffset = { x?: number; y?: number };

export interface PopoverCommonProps {
  appendTo?: PopoverProps['appendTo'];
  flip?: PopoverProps['flip'];
  fixed?: PopoverProps['fixed'];
  placement?: PopoverProps['placement'];
  timeout?: PopoverProps['timeout'];
  zIndex?: PopoverProps['zIndex'];
  moveArrowTo?: PopoverProps['moveArrowTo'];
  onMouseEnter?: PopoverProps['onMouseEnter'];
  onMouseLeave?: PopoverProps['onMouseLeave'];
  moveBy?: PopoverProps['moveBy'];
  hideDelay?: PopoverProps['hideDelay'];
  showDelay?: PopoverProps['showDelay'];
  width?: PopoverProps['width'];
  maxWidth?: PopoverProps['maxWidth'];
  minWidth?: PopoverProps['minWidth'];
  dynamicWidth?: PopoverProps['dynamicWidth'];
  excludeClass?: PopoverProps['excludeClass'];
}

export interface TooltipCommonProps {
  appendTo?: TooltipProps['appendTo'];
  flip?: TooltipProps['flip'];
  fixed?: TooltipProps['fixed'];
  placement?: TooltipProps['placement'];
  moveBy?: TooltipProps['moveBy'];
  enterDelay?: TooltipProps['enterDelay'];
  exitDelay?: TooltipProps['exitDelay'];
  maxWidth?: TooltipProps['maxWidth'];
  textAlign?: TooltipProps['textAlign'];
  zIndex?: TooltipProps['zIndex'];
  disabled?: TooltipProps['disabled'];
  onShow?: TooltipProps['onShow'];
  onHide?: TooltipProps['onHide'];
}

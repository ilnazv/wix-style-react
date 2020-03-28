import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface EditableListItemUniDriver extends BaseUniDriver {
  isApproveButtonDisabled(): Promise<boolean>;
  inputPlaceholder(): Promise<string>;
  enterText(text: string): Promise<void>;
  clickApprove(): Promise<void>;
  inputExists(): Promise<boolean>;
  clickCancel(): Promise<void>;
  approveButtonExists(): Promise<boolean>;
  cancelButtonExists(): Promise<boolean>;
  isCancelButtonTooltipExists(): Promise<boolean>;
  cancelButtonTooltipText(): Promise<string>;
  hoverCancelButton(): Promise<void>;
  isApproveButtonTooltipExists(): Promise<boolean>;
  approveButtonTooltipText(): Promise<string>;
  hoverApproveButton(): Promise<void>;
  isInputOfSize(size): Promise<boolean>;
  isInputHasError(): Promise<boolean>;
}

import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { iconButtonDriverFactory as iconButtonUniDriver } from '../IconButton/IconButton.uni.driver';
import { tooltipDriverFactory as tooltipUniDriver } from '../Tooltip/TooltipNext/Tooltip.uni.driver';

export const editableListItemDriverFactory = (base, body) => {
  const inputSelector = `[data-hook="${dataHooks.editableListInput}"]`;
  const approveButtonSelector = `[data-hook="${dataHooks.editableListApproveButton}"]`;
  const cancelButtonSelector = `[data-hook="${dataHooks.editableListCancelButton}"]`;
  const cancelButtonTooltipSelector = `[data-hook="${dataHooks.editableListCancelButtonTooltip}"]`;
  const approveButtonTooltipSelector = `[data-hook="${dataHooks.editableListApproveButtonTooltip}"]`;

  const inputDriver = inputUniDriverFactory(base.$(inputSelector));
  const approveButtonDriver = iconButtonUniDriver(
    base.$(approveButtonSelector),
  );
  const cancelButtonDriver = iconButtonUniDriver(base.$(cancelButtonSelector));
  const cancelButtonTooltipDriver = tooltipUniDriver(
    base.$(cancelButtonTooltipSelector),
    body,
  );
  const approveButtonTooltipDriver = tooltipUniDriver(
    base.$(approveButtonTooltipSelector),
    body,
  );

  return {
    ...baseUniDriverFactory(base, body),
    inputExists: () => inputDriver.exists(),
    approveButtonExists: () => approveButtonDriver.exists(),
    cancelButtonExists: () => cancelButtonDriver.exists(),
    inputPlaceholder: () => inputDriver.getPlaceholder(),
    isApproveButtonDisabled: () => approveButtonDriver.isButtonDisabled(),
    enterText: text => inputDriver.enterText(text),
    clickApprove: () => approveButtonDriver.click(),
    clickCancel: () => cancelButtonDriver.click(),
    isCancelButtonTooltipExists: () =>
      cancelButtonTooltipDriver.tooltipExists(),
    cancelButtonTooltipText: () => cancelButtonTooltipDriver.getTooltipText(),
    hoverCancelButton: () => cancelButtonTooltipDriver.mouseEnter(),
    isApproveButtonTooltipExists: () =>
      approveButtonTooltipDriver.tooltipExists(),
    approveButtonTooltipText: () => approveButtonTooltipDriver.getTooltipText(),
    hoverApproveButton: () => approveButtonTooltipDriver.mouseEnter(),
    isInputHasError: () => inputDriver.hasError(),
    isInputOfSize: size => inputDriver.isOfSize(size),
  };
};

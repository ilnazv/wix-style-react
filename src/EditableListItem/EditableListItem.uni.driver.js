import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';
import { testkit as inputUniDriverFactory } from '../Input/Input.uni.driver';
import { iconButtonDriverFactory as iconButtonUniDriver } from '../IconButton/IconButton.uni.driver';

export const editableListItemDriverFactory = (base, body) => {
  const inputSelector = `[data-hook="${dataHooks.editableListInput}"]`;
  const approveButtonSelector = `[data-hook="${dataHooks.editableListApproveButton}"]`;
  const cancelButtonSelector = `[data-hook="${dataHooks.editableListCancelButton}"]`;

  const inputDriver = inputUniDriverFactory(base.$(inputSelector));
  const approveButtonDriver = iconButtonUniDriver(
    base.$(approveButtonSelector),
  );
  const cancelButtonDriver = iconButtonUniDriver(base.$(cancelButtonSelector));

  return {
    ...baseUniDriverFactory(base, body),
    inputExists: () => inputDriver.exists(),
    approveButtonExists: () => approveButtonDriver.exists(),
    cancelButtonExists: () => cancelButtonDriver.exists(),
    inputPlaceholder: () => inputDriver.getPlaceholder(),
    isApproveButtonDisabled: () => approveButtonDriver.isButtonDisabled(),
    enterText: text => inputDriver.enterText(text),
    clickApprove: () => approveButtonDriver.click(),
  };
};

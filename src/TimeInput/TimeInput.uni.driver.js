import { baseUniDriverFactory } from '../../test/utils/unidriver';
import { testkit } from '../Input/Input.uni.driver';
import { tickerDriverFactory } from '../Input/Ticker/Ticker.uni.driver';
import { dataHooks } from './constants';

export const timeInputUniDriverFactory = base => {
  const amPmIndicator = () =>
    base.$(`[data-hook="${dataHooks.amPmIndicator}"]`);
  const input = testkit(base);
  const inputTicker = tickerDriverFactory(base);
  const suffixWrapper = dataHook => base.$(`[data-hook="${dataHook}"]`);

  return {
    ...baseUniDriverFactory(base),
    getValue: async () => input.getValue(),
    isDisabled: async () => input.isDisabled(),
    clickTickerUp: async () => inputTicker.clickUp(),
    clickTickerDown: async () => inputTicker.clickDown(),
    isAmPmIndicatorExist: async () => amPmIndicator().exists(),
    toggleAmPmIndicator: async () => amPmIndicator().click(),
    getAmPmIndicatorText: async () => amPmIndicator().text(),
    getCustomSuffixText: async dataHook => suffixWrapper(dataHook).text(),
    isRtl: async () => base.$(`.rtl`).exists(),
    setValue: async value => input.enterText(value),
    blur: async () => input.blur(),
  };
};

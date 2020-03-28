// file.only

import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import EditableListItem from '../EditableListItem';
import { editableListItemPrivateDriverFactory } from './EditableListItem.private.uni.driver';

describe('EditableListItem', () => {
  const render = createRendererWithUniDriver(
    editableListItemPrivateDriverFactory,
  );

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<EditableListItem />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.inputExists()).toBe(true);
    expect(await driver.approveButtonExists()).toBe(true);
    expect(await driver.cancelButtonExists()).toBe(true);
  });

  it('should render placeholder text when have no value', async () => {
    const placeholder = 'some placeholder';
    const { driver } = render(<EditableListItem placeholder={placeholder} />);
    expect(await driver.inputPlaceholder()).toBe(placeholder);
  });

  it('should show disabled confirm button when have no value', async () => {
    const { driver } = render(<EditableListItem />);
    expect(await driver.isApproveButtonDisabled()).toBe(true);
  });

  describe('when value is entered', () => {
    it('should show enabled confirm button', async () => {
      const { driver } = render(<EditableListItem />);
      await driver.enterText('some text');
      expect(await driver.isApproveButtonDisabled()).toBe(false);
    });
  });
});

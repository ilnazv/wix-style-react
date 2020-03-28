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
  });
});

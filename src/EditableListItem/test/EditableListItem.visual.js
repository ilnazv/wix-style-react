import React from 'react';
import { storiesOf } from '@storybook/react';
import EditableListItem from '../EditableListItem';

const commonProps = {
  onApprove: () => null,
  onCancel: () => null,
};

const tests = [
  {
    describe: 'sanity',
    its: [
      {
        it: 'default',
      },
    ],
  },
  {
    describe: 'status',
    its: [
      {
        it: 'error',
        props: {
          status: 'error',
        },
      },
      {
        it: 'warning',
        props: {
          status: 'warning',
        },
      },
      {
        it: 'loading',
        props: {
          status: 'loading',
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `EditableListItem${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <EditableListItem {...commonProps} {...props} />);
  });
});

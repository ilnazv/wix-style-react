import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';
import Input from '../../Input';
import DropdownLayout from '../../DropdownLayout';
import { editableListItemBuilder } from '../EditableListItem';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import EditableListItem from '..';
import { simple } from './examples';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: EditableListItem,
  componentPath: '..',

  componentProps: {
    placeholder: 'Value',
    cancelButtonTooltip: 'Cancel',
    approveButtonTooltip: 'Approve',
  },

  exampleProps: {
    status: [Input.StatusError, Input.StatusLoading, Input.StatusWarning],
    statusMessage: '',
    size: ['small', 'medium'],
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/EditableListItem/',
      component: (
        <EditableListItem
          placeholder="Value"
          cancelButtonTooltip="Cancel"
          approveButtonTooltip="Approve"
        />
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'editableListItemBuilder is an editable text that should be used inside list',
          }),

          importExample(
            "import { editableListItemBuilder } from 'wix-style-react/EditableListItem';",
          ),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example of usage inside DropdownLayout',
            source: simple,
          }),

          code({
            title: 'Full Interactive Preview',
            description: 'A non compact version of same code example as above',
            source: simple,
            components: {
              EditableListItem,
              DropdownLayout,
              editableListItemBuilder,
            },
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};

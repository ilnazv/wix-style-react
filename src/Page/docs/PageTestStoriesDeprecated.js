import React from 'react';
import * as PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import Page from 'wix-style-react/Page';
import { getTestStoryKind } from '../../../stories/storiesHierarchy';

import * as s from './PageTestStoriesDeprecated.scss';
import { header, content } from './PageChildren';
import { storySettings } from './storySettings';
import { LongTextContent } from './SomeContentComponent';
import Card from 'wix-style-react/Card';
import Notification from 'wix-style-react/Notification';

const PageContainer = props => {
  return (
    <div className={s.pageContainer} {...props}>
      {props.children}
    </div>
  );
};
PageContainer.propTypes = {
  children: PropTypes.any,
};

const kind = `${getTestStoryKind(storySettings)}/Deprecated`;
const dataHook = 'story-page';

storiesOf(kind, module).add('5. Default [min/max]-width', () => (
  <div>
    <Page
      dataHook={dataHook}
      children={[header(), content(false)]}
      gradientClassName="background-gradient"
    />
  </div>
));

storiesOf(kind, module).add('6. Custom [min/max]-width', () => (
  <div>
    <Page
      dataHook={dataHook}
      children={[header(), content(false)]}
      gradientClassName="background-gradient"
      minWidth={504} // With padding: 504 + 48*2 = 600px
      maxWidth={1304} // With padding: 1304 + 48*2 = 1400px
    />
  </div>
));

const contentPrefix = (
  <div
    style={{
      backgroundColor: 'white',
      paddingBottom: '20px',
      fontSize: '36px',
    }}
  >
    <b>
      This simulates what some consumers are currently doing to implement
      min-width with horizontal scroll. So we can see tat they are not broken.
      They can increase the min-width, bu the can not decrease it, unless they
      use the minWidth prop.
    </b>
  </div>
);
storiesOf(kind, module).add(
  '7. Regression for [min/max]-width (introduced in version 5.25.0)',
  () => (
    <div style={{ overflowX: 'auto' }}>
      <PageContainer style={{ minWidth: '1100px' }}>
        <Page
          dataHook={dataHook}
          children={[header(), content(false, contentPrefix)]}
          gradientClassName="background-gradient"
        />
      </PageContainer>
    </div>
  ),
);

storiesOf(kind, module).add('11. With Notification', () => (
  <PageContainer>
    <Page gradientClassName="background-gradient">
      {header()}
      <Page.Content>
        <Card>
          <Card.Header title="Hello" />
          <Card.Content>
            <LongTextContent />
          </Card.Content>
        </Card>
      </Page.Content>
    </Page>
    <Notification type="sticky" show>
      <Notification.TextLabel>Hello Notification</Notification.TextLabel>
      <Notification.CloseButton />
    </Notification>
  </PageContainer>
));

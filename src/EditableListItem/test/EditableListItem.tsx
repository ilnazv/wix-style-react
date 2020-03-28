import * as React from 'react';
import EditableListItem, { EditableListItemSize } from '..';
import { editableListItemTestkitFactory } from '../../../testkit';
import { editableListItemTestkitFactory as editableListItemEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { editableListItemTestkitFactory as editableListItemPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function editableListItemWithMandatoryProps() {
  return <EditableListItem onApprove={() => null} onCancel={() => null} />;
}

function editableListItemWithAllProps() {
  return (
    <EditableListItem
      dataHook="dataHook"
      className="className"
      onCancel={() => null}
      onApprove={() => null}
      approveButtonTooltip={'approve'}
      cancelButtonTooltip={'cancel'}
      placeholder={'placeholder'}
      size={EditableListItemSize.SMALL}
      status={'error'}
      statusMessage={'message'}
    />
  );
}

async function testkits() {
  const testkit = editableListItemTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = editableListItemEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await editableListItemPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}

import * as React from 'react';
import EditableListItem from '..';
import { editableListItemTestkitFactory } from '../../../testkit';
import { editableListItemTestkitFactory as editableListItemEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { editableListItemTestkitFactory as editableListItemPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function editableListItemWithMandatoryProps() {
  return <EditableListItem />;
}

function editableListItemWithAllProps() {
  return (
    <EditableListItem
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
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

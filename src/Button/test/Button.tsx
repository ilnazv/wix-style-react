import * as React from 'react';
import Button from '..';
import { buttonTestkitFactory } from '../../../testkit';
import { buttonTestkitFactory as buttonEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { buttonTestkitFactory as buttonPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function ButtonWithMandatoryProps() {
  return <Button />;
}

function ButtonWithAllProps() {
  return (
    <Button
      as="a"
      className="cls"
      dataHook="hook"
      disabled
      fullWidth
      onClick={_ => {}}
      prefixIcon={<div />}
      priority="primary"
      size="large"
      skin="dark"
      suffixIcon={<div />}
    />
  );
}

async function testkits() {
  const testkit = buttonTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div')
  });

  const enzymeTestkit = buttonEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />)
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await buttonPuppeteerTestkitFactory({
    dataHook: 'hook',
    page
  });
}

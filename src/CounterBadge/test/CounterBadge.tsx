import * as React from "react";
import CounterBadge from '..';
import { counterBadgeTestkitFactory } from '../../../testkit';
import { counterBadgeTestkitFactory as counterBadgeEnzymeTestkitFactory } from '../../../testkit/enzyme';
import * as enzyme from "enzyme";

function CounterBadgeWithMandatoryProps() {
  return <CounterBadge />;
}

function CounterBadgeWithAllProps() {
  return (
    <CounterBadge dataHook="hook" skin="danger">
      text
    </CounterBadge>
  );
}

async function testkits() {
  const testkit = counterBadgeTestkitFactory({
    dataHook: "hook",
    wrapper: document.createElement("div")
  });

  const enzymeTestkit = counterBadgeEnzymeTestkitFactory({
    dataHook: "hook",
    wrapper: enzyme.mount(<div />)
  });
}

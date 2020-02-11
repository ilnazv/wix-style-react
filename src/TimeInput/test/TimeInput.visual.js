import React from 'react';
import moment from 'moment';

import TimeInput from '..';
import { snap, visualize } from 'storybook-snapper';

const value1 = moment(0).set({ hour: 9, minute: 45 });
const value2 = moment(0).set({ hour: 16, minute: 21 });

const customSuffix = <div>custom suffix</div>;

visualize('TimeInput', () => {
  snap('different variations', done => {
    document.fonts.onloadingdone = done;
    return (
      <>
        <TimeInput defaultValue={value1} />
        <br />
        <TimeInput defaultValue={value1} disabled />
        <br />
        <TimeInput defaultValue={value1} disabled dashesWhenDisabled />
        <br />
        <TimeInput defaultValue={value1} disableAmPm />
        <br />
        <TimeInput defaultValue={value2} rtl />
        <br />
        <TimeInput defaultValue={value2} rtl disabled />
        <br />
        <TimeInput defaultValue={value2} rtl disabled dashesWhenDisabled />
        <br />
        <TimeInput defaultValue={value2} rtl disableAmPm />
        <br />
        <TimeInput
          defaultValue={value1}
          disableAmPm
          customSuffix={customSuffix}
        />
        <br />
        <TimeInput defaultValue={value1} customSuffix={customSuffix} />
        <br />
        <TimeInput defaultValue={value1} customSuffix={customSuffix} disabled />
        <br />
        <TimeInput
          defaultValue={value1}
          rtl
          disableAmPm
          customSuffix={customSuffix}
        />
      </>
    );
  });
});

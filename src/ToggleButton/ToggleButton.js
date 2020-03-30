import React, { cloneElement, PureComponent } from 'react';
import {
  bool,
  func,
  node,
  object,
  oneOf,
  oneOfType,
  string,
  shape,
} from 'prop-types';
import { ButtonNext } from 'wix-ui-core/dist/src/components/button-next';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';
import styles from './ToggleButton.st.css';
import Tooltip from '../Tooltip';
import Text from '../Text';
import { iconChildSize } from './constants';
import { TooltipCommonProps } from '../common/PropTypes/TooltipCommon';

class Icon extends PureComponent {
  render() {
    const {
      children,
      size,
      tooltipProps,
      tooltipDisabled,
      labelValue,
      focusableOnBlur,
      focusableOnFocus,
    } = this.props;
    const iconSize = iconChildSize[size];

    const [icon, label] = React.Children.map(
      children,
      (children, child => child),
    );

    // TODO page is scrolled whenever icon focused and we press Space button

    return (
      children && (
        <Tooltip
          {...tooltipProps}
          dataHook="toggle-button-tooltip"
          size="small"
          content={labelValue}
          disabled={tooltipDisabled || tooltipProps.disabled}
        >
          <span>
            <div
              {...styles('icon', { size }, this.props)}
              tabIndex={1}
              onBlur={focusableOnBlur}
              onFocus={focusableOnFocus}
            >
              {cloneElement(icon, {
                width: iconSize,
                height: iconSize,
              })}
              {label}
            </div>
          </span>
        </Tooltip>
      )
    );
  }
}

const ToggleButtonIcon = withFocusable(Icon);

class ToggleButton extends PureComponent {
  static displayName = 'ToggleButton';
  static propTypes = {
    /** render as some other component or DOM tag */
    as: oneOfType([func, object, string]),
    /** Used for passing any wix-style-react icon. For external icon make sure to follow ux sizing guidelines */
    children: node,
    /** Button skins */
    skin: oneOf(['standard', 'dark']),
    /** Button size */
    size: oneOf(['tiny', 'small', 'medium', 'large']),
    /** Label content */
    labelValue: node,
    /** Label placement */
    labelPlacement: oneOf(['tooltip', 'bottom', 'end']),
    /** Whether label should have ellipsis */
    labelEllipsis: bool,
    /** Click event handler  */
    onClick: func,
    /** Applies selected styles */
    selected: bool,
    /** Applies disabled styles */
    disabled: bool,
    /** String based data hook */
    dataHook: string,
    /** Tooltip props for label. Applied only when `labelPlacement` is `tooltip`. */
    tooltipProps: shape(TooltipCommonProps),
  };

  static defaultProps = {
    skin: 'standard',
    size: 'medium',
    disabled: false,
    labelValue: '',
    labelPlacement: 'tooltip',
    labelEllipsis: false,
    tooltipProps: {
      placement: 'top',
    },
  };

  renderLabel = () => {
    const {
      disabled,
      size,
      labelValue,
      labelPlacement,
      labelEllipsis,
    } = this.props;
    return (
      <Text
        {...styles('label', { placement: labelPlacement, size }, this.props)}
        disabled={disabled}
        dataHook="togglebutton-label"
        size="tiny"
        weight="thin"
        ellipsis={labelEllipsis}
      >
        {labelValue}
      </Text>
    );
  };
  render() {
    const {
      children,
      size,
      skin,
      tooltipProps,
      labelValue,
      selected,
      dataHook,
      labelPlacement,
      labelEllipsis,
      disabled,
      ...rest
    } = this.props;

    return (
      <ButtonNext
        {...rest}
        {...styles('root', { disabled, selected, skin, labelPlacement })}
        tabIndex={-1}
        data-hook={dataHook}
        data-placement={labelPlacement}
        data-selected={selected}
        data-skin={skin}
        disabled={disabled}
      >
        <ToggleButtonIcon
          size={size}
          tooltipProps={tooltipProps}
          labelValue={labelValue}
          tooltipDisabled={labelPlacement !== 'tooltip'}
        >
          {children}
          {labelPlacement === 'end' ? this.renderLabel() : null}
        </ToggleButtonIcon>
        {labelPlacement === 'bottom' ? this.renderLabel() : null}
      </ButtonNext>
    );
  }
}
export default ToggleButton;

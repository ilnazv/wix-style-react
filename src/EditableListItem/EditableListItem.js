import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

// import styles from './EditableListItem.st.css';
import { dataHooks } from './constants';
import IconButton from '../IconButton';
import Tooltip from '../Tooltip';

/** EditableListItem */
class EditableListItem extends React.PureComponent {
  state = {
    value: '',
  };

  onInputChange = e => {
    this.setState({ value: e.target.value });
  };

  onApproveClicked = () => {
    this.props.onApprove(this.state.value);
  };

  render() {
    const {
      dataHook,
      placeholder,
      onCancel,
      cancelButtonTooltip,
      approveButtonTooltip,
      status,
      size,
      statusMessage,
    } = this.props;

    return (
      <div data-hook={dataHook}>
        <Input
          size={size}
          status={status}
          onChange={this.onInputChange}
          placeholder={placeholder}
          statusMessage={statusMessage}
          dataHook={dataHooks.editableListInput}
        />
        <Tooltip
          upgrade
          disabled={!cancelButtonTooltip}
          dataHook={dataHooks.editableListCancelButtonTooltip}
          content={cancelButtonTooltip}
        >
          <IconButton
            size={size}
            onClick={onCancel}
            dataHook={dataHooks.editableListCancelButton}
          />
        </Tooltip>
        <Tooltip
          upgrade
          disabled={!approveButtonTooltip || !this.state.value}
          content={approveButtonTooltip}
          dataHook={dataHooks.editableListApproveButtonTooltip}
        >
          <IconButton
            size={size}
            disabled={!this.state.value}
            onClick={this.onApproveClicked}
            dataHook={dataHooks.editableListApproveButton}
          />
        </Tooltip>
      </div>
    );
  }
}

EditableListItem.displayName = 'EditableListItem';

EditableListItem.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** Placeholder to display */
  placeholder: PropTypes.string,

  /** Function to be called after clicking on approve */
  onApprove: PropTypes.func.isRequired,

  /** Function to be called after clicking on cancel */
  onCancel: PropTypes.func.isRequired,

  /** Cancel button tooltip text */
  cancelButtonTooltip: PropTypes.string,

  /** Input status - use to display an status indication for the user. for example: 'error', 'warning' or 'loading' */
  status: PropTypes.oneOf([
    Input.StatusError,
    Input.StatusWarning,
    Input.StatusLoading,
  ]),

  /** Specifies the size of the input */
  size: PropTypes.oneOf(['small', 'medium']),

  /** Approve button tooltip text */
  approveButtonTooltip: PropTypes.string,

  /** The status (error/loading) message to display when hovering the status icon, if not given or empty there will be no tooltip */
  statusMessage: PropTypes.node,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

EditableListItem.defaultProps = {
  size: 'small',
};

export default EditableListItem;

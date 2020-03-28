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
    } = this.props;

    return (
      <div data-hook={dataHook}>
        <Input
          onChange={this.onInputChange}
          placeholder={placeholder}
          dataHook={dataHooks.editableListInput}
        />
        <Tooltip
          upgrade
          disabled={!cancelButtonTooltip}
          dataHook={dataHooks.editableListCancelButtonTooltip}
          content={cancelButtonTooltip}
        >
          <IconButton
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
  onApprove: PropTypes.func,

  /** Function to be called after clicking on cancel */
  onCancel: PropTypes.func,

  /** Cancel button tooltip text */
  cancelButtonTooltip: PropTypes.string,

  /** Approve button tooltip text */
  approveButtonTooltip: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

EditableListItem.defaultProps = {};

export default EditableListItem;

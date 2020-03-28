import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

// import styles from './EditableListItem.st.css';
import { dataHooks } from './constants';
import IconButton from '../IconButton';

/** EditableListItem */
class EditableListItem extends React.PureComponent {
  state = {
    value: '',
  };

  onInputChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { dataHook, placeholder } = this.props;

    return (
      <div data-hook={dataHook}>
        <Input
          onChange={this.onInputChange}
          placeholder={placeholder}
          dataHook={dataHooks.editableListInput}
        />
        <IconButton dataHook={dataHooks.editableListCancelButton} />
        <IconButton
          disabled={!this.state.value}
          dataHook={dataHooks.editableListApproveButton}
        />
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

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

EditableListItem.defaultProps = {};

export default EditableListItem;

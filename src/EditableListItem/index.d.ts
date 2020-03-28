import * as React from 'react';

export interface EditableListItemProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class EditableListItem extends React.PureComponent<EditableListItemProps>{}

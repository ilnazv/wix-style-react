import { editableListItemDriverFactory as publicDriverFactory } from '../EditableListItem.uni.driver';

export const editableListItemPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};

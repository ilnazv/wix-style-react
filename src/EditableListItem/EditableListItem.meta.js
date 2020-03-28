import EditableListItem from './EditableListItem';
import Registry from '@ui-autotools/registry';

const metadata = Registry.getComponentMetadata(EditableListItem);

metadata.exportedFrom({
  path: 'src/EditableListItem/EditableListItem.js',
});

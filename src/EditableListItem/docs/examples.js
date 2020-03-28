export const simple = `
<div
  style={{
    width: '284px',
    height: '120px'
  }}
>
  <DropdownLayout
    visible
    options={[
      {
      id: 0,
      value: 'first value'
      },
       {
      id: 1,
      value: 'second value'
      },
      editableListItemBuilder({id: 2, onApprove: val => console.log(val), onCancel: () => console.log('cancel')})
    ]}
/>
</div>
`;

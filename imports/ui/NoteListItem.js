import React from 'react';
import moment from 'moment';
import ProptTypes from 'prop-types';

const NoteListItem = (props) => {
  return (
    <div>
      <h5>{ props.note.title || 'Untitled note'}</h5>
      <p>{ moment(props.note.updatedAt).format('DD/M/YY') }</p>
    </div>
  );
};

NoteListItem.PropTypes = {
  note: ProptTypes.object.isRequired
};

export default NoteListItem;

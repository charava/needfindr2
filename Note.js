import { MdDeleteForever } from 'react-icons/md';
import React from 'react';
import NotesList from './NotesList';

class Note extends React.Component {
 constructor(props) {
   super(props);

 }

 componentDidMount() {
   console.log('in here')
 }

 render () {
   console.log('in notes.js')
   return(
     <div className='note'>
       <div className='note-title'>
         <span>{this.props.title}</span>
       </div>
       <div className='note-body'>
         <span>{this.props.name}</span>
       </div>
       <div className='note-footer'>
         <MdDeleteForever
           onClick={() => this.props.handleDeleteNote(this.props.id)}
           className='delete-icon'
           size='1.3em'/>
       </div>
     </div>
   );
 }
}

export default Note;

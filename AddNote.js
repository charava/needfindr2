import React from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';


class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteBody: ''
    }
  }



  handleChangeTitle = (event) => {
    this.setState({noteTitle: event.target.value});
  }
  handleChangeBody = (event) => {
    this.setState({noteBody: event.target.value});
  }

  handleSaveClick = () => {
    console.log('in handle save click')

    const pureDate = new Date();
    const date = pureDate.toLocaleDateString();

    const hourAsString = pureDate.toString().slice(16,18);
    const hourAsInteger = parseInt(hourAsString, 10);
    const timeOfDay = 'AM';
    const body = this.state.noteBody;
    const title = this.state.noteTitle;


    //-------PM---------
    if (hourAsInteger >= 12) {
      const bigHour = (hourAsInteger - 12).toString();
      const timeOfDay = 'PM';
      const time = bigHour + pureDate.toString().slice(18,21) + ' ' + timeOfDay;
    //  this.props.handleAddNote(this.state.noteTitle, this.state.noteBody, date, time);

      if ((body.length + title.length) > 275)  {
        const newBody = body.substr(0,(275 - title.length));
        const newNote = {
          id: nanoid(),
          name: 'Bea',
          email: 'bea1@gmail.com',
          username: 'beaa',
          password: 'password',
          posts: [{
            title: title,
            description: body,
            shortenedDescription: newBody, // this is the whole body text to show in shadow box
            date: date,
            time: time,
            overflow: true
          }]
        }

        console.log(newNote)
        axios
          .post('http://localhost:8082/add-user', newNote)
          .then(res => {
            //we clear our state and set submitted to true
            //in order to navigate back (see render)
            console.log('added')
          })
          .catch(err => {
            console.log("Error in adding csv data to database!");
            console.error(err);
          })


      } else {
        //first need to do a get to see if user exists, if exists
        //post to that user account
        //else create new account
        const newNote = {
          id: nanoid(),
          name: 'Bea',
          email: 'bea1@gmail.com',
          username: 'beaa',
          password: 'password',
          posts: [{
            title: title,
            description: body,
            shortenedDescription: body, // this is the whole body text to show in shadow box
            date: date,
            time: time,
            overflow: false
          }]
        }

        console.log(newNote)
        axios
          .post('http://localhost:8082/add-user', newNote)
          .then(res => {
            //we clear our state and set submitted to true
            //in order to navigate back (see render)
            console.log('added')
          })
          .catch(err => {
            console.log("Error in adding csv data to database!");
            console.error(err);
          })

      }

    } else {
      const time = pureDate.toString().slice(16,21) + ' ' + timeOfDay;
    //  this.props.handleAddNote(this.state.noteTitle, this.state.noteBody, date, time);

      if ((body.length + title.length) > 275)  {
        const newBody = body.substr(0,(275 - title.length));
        const newNote = {
          id: nanoid(),
          name: 'Bea',
          email: 'bea1@gmail.com',
          username: 'beaa',
          password: 'password',
          posts: [{
            title: title,
            description: body,
            shortenedDescription: newBody, // this is the whole body text to show in shadow box
            date: date,
            time: time,
            overflow: true
          }]
        }

        console.log(newNote)
        axios
          .post('http://localhost:8082/add-user', newNote)
          .then(res => {
            //we clear our state and set submitted to true
            //in order to navigate back (see render)
            console.log('added')
          })
          .catch(err => {
            console.log("Error in adding csv data to database!");
            console.error(err);
          })
      } else {
        //first need to do a get to see if user exists, if exists
        //post to that user account
        //else create new account
        const newNote = {
          id: nanoid(),
          name: 'Bea',
          email: 'bea1@gmail.com',
          username: 'beaa',
          password: 'password',
          posts: [{
            title: title,
            description: body,
            shortenedDescription: body, // this is the whole body text to show in shadow box
            date: date,
            time: time,
            overflow: false
          }]
        }

        console.log(newNote)
        axios
          .post('http://localhost:8082/add-user', newNote)
          .then(res => {
            //we clear our state and set submitted to true
            //in order to navigate back (see render)
            console.log('added')

          })
          .catch(err => {
            console.log("Error in adding csv data to database!");
            console.error(err);
          })

    }
    }
    this.setState({noteTitle:'', noteBody: ''})
  }



  render () {
    return(
      <div className='addNote'>
        <div className='addNote-header'>
          <textarea className='addNote-title'
            rows='2'
            cols='10'
            placeholder='Add the title here...'
            value={this.state.noteTitle}
            onChange={this.handleChangeTitle}
          ></textarea>
          <textarea className='addNote-body'
            rows='8'
            cols='10'
            placeholder='Type to add a note...'
            value={this.state.noteBody}
            onChange={this.handleChangeBody}
          ></textarea>
        </div>
        <div className='note-footer'>
          <button className='save' onClick={this.handleSaveClick}>
            Save
          </button>
        </div>
      </div>

    );
  }
}

export default AddNote;

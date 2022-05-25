import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import SignUp from './components/SignUp';
import CSV from './components/CSV';
import React from 'react';
import AddNote from './components/AddNote';
import * as Papa from 'papaparse';
import axios from 'axios';



//const App = () => {}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: '',
      searchText: ''
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/users')
      .then(res => {
        this.setState({users: res.data})
        console.log('axios complete' + res.data)
      })
      .catch(err =>{
        console.log('Error from ShowAllNuevans');
      })
  }

  //------------DELETE FUNCTION-------------

//this needs to just be a delete from database axios route and re render
  deleteNote = (id) => {
    console.log(id)
    const link = 'http://localhost:8082/' + id

    axios
      .delete(link)
      .then(res => {
        console.log('axios complete' + res.data)
      })
      .catch(err =>{
        console.log('Error from ShowAllNuevans');
      })

    //  const newNotes = this.state.notes.filter((note) => note.id !== id);
  //    this.setNotes(newNotes);

  };




  //------------SETTING STATE-------------

  setNotes = (newNotes) => {
    console.log('in setnotes for app.js')
    this.setState({notes: newNotes})

  }

  setSearchText = (searchText) => {
    this.setState({searchText: searchText})
  }



  //------------RENDERING-------------

  render () {

    return(
      <div className='container'>
        <nav>
          <a className="main-link" href="/index.html">Needfindr</a>

          <Search handleSearchNote={this.setSearchText} />


        </nav>

        <AddNote />

        <NotesList
          users={this.state.users}
          handleDeleteNote={this.deleteNote}
        />

      </div>
    );

  }
}

export default App;

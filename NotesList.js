import Note from './Note';
import React from 'react';
import axios from 'axios';


class NotesList extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     //rawUsers: '',
  //   users: '',
     posts: ''
   }
 }

 componentDidMount() {
    axios
      .get('http://localhost:8082/users')
      .then(res => {
      //  this.setState({users: res.data})
        console.log('axios complete' + res.data)
      })
      .catch(err =>{
        console.log('Error from ShowAllNuevans');
      })

//trying to get all the posts in one list

/*
    console.log('innnn postList')
    let theList = [];

//WHY ARE MY FOR LOOPS NOT WORKING
    for (let user = 0; user < this.state.users.length; user++) {
      console.log('user ' + user)
      for (let post = 0; post < user.posts.length; post++) {
        console.log('post  ' + post)
        theList.append(
            {
              key: user.id,
              id: user.id,
              name: user.name,
              email: user.email,
              username: user.username,
              title: post.title,
              description: post.description,
              noteId: post.id
          }
        );
      }
    }
    this.setState({posts: theList})
    console.log('THE POSTS: ' + this.state.posts)

    */

  };


 render () {

   try {
     //change this so that it loops through the posts in state
     let newNotes = this.props.users.map((user) => {
       //not looping through the posts
       console.log('USER POSTS LENGTH: ' + user.posts.length)
       console.log(user.posts)
       const newPosts = user.posts.map((post) => {
         console.log(post)


         console.log(user.name)
         console.log(user.email)
         console.log(user.username)
         console.log(post.title)
         console.log(post.description)

         return (
           <Note
             key={user.id}
             id={user.id}
             name={user.name}
             email={user.email}
             username={user.username}
             title={post.title}
             description={post.description}
             noteId={post.id}
             handleDeleteNote={this.props.handleDeleteNote}
           />
         );

       });
      // for (let i = 0; i < user.posts.length; i++) {


      console.log('newposts' + newPosts.length + '  ' + newPosts)

     })
     console.log('newnotes' + newNotes.length + '  ' + newNotes)

     for (let i = 0; i < newNotes.length; i++) {
       console.log('hello')
       for (let x = 0; x < i.length; x++) {
         console.log('as')

         console.log(newNotes[i][x])
       }
     }



   } catch(e) {
     console.log('NOTESLIST MAPPING ERROR ' + e)
   }


   console.log(this.newNotes)
   return (
     <div className='notes-list'>
       {this.newNotes}
     </div>
   );
  }
}

export default NotesList;

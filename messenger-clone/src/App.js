import React,{useState,useEffect} from 'react'
import './App.css';
import {FormControl,Input} from '@material-ui/core'
import Message from './Message'
import { db } from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import  '@fortawesome/free-brands-svg-icons'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function App() {
  const [input,setInput]=useState('');
  const[messages,setMessage]=useState([]);
  const[username,setUsername]=useState('');
 
  //useState = variable in REACT
  //useEffect = run code on a condition in REACT
  useEffect(()=>{
    //run when the app component loads...
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessage(snapshot.docs.map(doc=>({id: doc.id ,message:doc.data()})))

    })
  },[])
  useEffect(()=>{
     setUsername(prompt('Please Enter Your Name..'));
  },[])//condition
  
  const sendMessage=(e)=>{
    e.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
   
    setInput('');
  }
  return (
    <div className="App">
    <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
     <h1>Messenger</h1>
     <h2 className="h_tag">Welcome {username}</h2>
     <form className="app_form">
       <FormControl className="app_formControl">
         
        <Input className="app_Input" placeholder='Enter a message...' value={input} onChange={e=>setInput(e.target.value)}/>
    <IconButton className="app_IconButton" disabled={!input} onClick={sendMessage} type="submit" color="primary" variant='contained'> 
      <SendIcon/>
    </IconButton>
   
</FormControl>
</form>
<FlipMove>
     {
       messages.map(({id,message})=>(
         <Message key={id} username={username} message={message}/>
         
       ))
     }
     </FlipMove>
    </div>
  );
}

export default App;

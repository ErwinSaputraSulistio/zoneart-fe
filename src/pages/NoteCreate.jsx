import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Form from '../components/Form'

const NoteCreate = () => {
  const navigate = useNavigate()
  const [newNote, setNewNote] = useState({})

  const submitNewNote = async(e) => {
    e.preventDefault()
    try {
      const createResult = await axios.post('http://localhost:8000/notes', newNote)
      if(createResult) {
        navigate("/")
      }
    }
    catch(err) {
      console.log(err)
    }
  }

  return(
    <Form 
      dataInput={ newNote } 
      setDataInput={ setNewNote } 
      submitFunction={ (e) => { submitNewNote(e) } }
    />
  )
}

export default NoteCreate
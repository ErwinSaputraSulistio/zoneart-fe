import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../configs/contexts/globalContext'
import axios from 'axios'
import Form from '../components/Form'

const NoteUpdate = () => {
  const { noteList } = useContext(GlobalContext)
  const navigate = useNavigate()
  const { id } = useParams()
  const [editedNote, setEditedNote] = useState({})

  const setDefaultEditedNote = () => {
    if(id) {
      const searchIndex = noteList.findIndex((note) => { 
				return note._id === id
			})
      setEditedNote(noteList[searchIndex])
    }
  }
  const submitEditedNote = async(e) => {
    e.preventDefault()
    try {
      const createResult = await axios.put(`http://localhost:8000/notes/${editedNote._id}`, editedNote)
      if(createResult) {
        navigate("/")
      }
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    setDefaultEditedNote()
  }, [])

  return(
    <Form
      dataInput={ editedNote } 
      setDataInput={ setEditedNote } 
      submitFunction={ (e) => { submitEditedNote(e) } }
    />
  )
}

export default NoteUpdate
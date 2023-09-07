import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../configs/contexts/globalContext'
import axios from 'axios'
import styles from '../styles/pages/NoteList.module.scss'
import Note from '../components/Note'

const NoteList = () => {
  const navigate = useNavigate()
  const { noteList, setNoteList } = useContext(GlobalContext)
  
  const getAllNotes = async() => {
    try {
      const notesData = await axios.get('http://localhost:8000/notes')
      setNoteList(notesData.data.data)
    }
    catch(err) {
      console.log(err)
    }
  }
  const deleteNote = async(id) => {
    try {
      const deleteResult = await axios.delete(`http://localhost:8000/notes/${id}`)
      if(deleteResult) {
        const newNotes = noteList.filter((note) => {
          return note._id !== id
        })
        setNoteList(newNotes)
      }
    }
    catch(err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    getAllNotes()
  }, [])

  return(
    <div className={ styles.noteList }>
      <div className={ styles.noteListTitle }>
        <span style={{ textDecoration: 'underline' }}>Note List</span>
        <button onClick={ () => { navigate("/create") } }>Add New Note</button>
      </div>
      <div className={ styles.noteListCards }>
        {
          noteList.map((note, index) => {
            return(
              <Note 
                data={ note }
                updateFunction = { () => { navigate(`/update/${note._id}`) } }
                deleteFunction = { () => { deleteNote(note._id) } } 
                key={ index }
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default NoteList
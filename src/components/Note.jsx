import styles from '../styles/components/Note.module.scss'

const Note = ({ data, updateFunction, deleteFunction }) => {
  return(
    <div className={ styles.noteCard }>
      <div className={ styles.noteCardJudul }>{ data.judul }</div>
      <div className={ styles.noteCardSetting }>
        <button onClick={ () => { updateFunction() } }>Update</button>
        <button onClick={ () => { deleteFunction() } }>Delete</button>
      </div>
      <div className={ styles.noteCardIsi }>{ data.isi }</div>
    </div>
  )
}

export default Note
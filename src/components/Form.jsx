import { useNavigate } from 'react-router-dom'
import styles from '../styles/components/Form.module.scss'

const Form = ({ dataInput, setDataInput, submitFunction }) => {
  const navigate = useNavigate()

  return(
    <form
      className={ styles.formContainer }
      onSubmit={ (e) => { submitFunction(e) } } 
    >
      <input 
        className={ styles.formInput }
        type='text' 
        placeholder='Judul'
        value={ dataInput.judul } 
        onChange={ 
          (e) => {
            setDataInput({
              ...dataInput,
              judul: e.target.value
            })
          }  
        }
        required
      />
      <input 
        className={ styles.formInput }
        type='text' 
        placeholder='Isi' 
        value={ dataInput.isi }
        onChange={ 
          (e) => {
            setDataInput({
              ...dataInput,
              isi: e.target.value
            })
          }  
        }
        required
      />
      <button className={ styles.formButton }>Submit</button>
      <button className={ styles.formButton } onClick={ () => { navigate("/") } }>Back</button>
    </form>
  )
}

export default Form
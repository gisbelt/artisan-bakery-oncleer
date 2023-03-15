import { useForm } from '../hooks/useForm'

export const ContactForm = () => {

    const { formState, onInputChange } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const { name, email, subject, message } = formState;

    return (
        <div className="contact_form">
            <form action="" autoComplete='off'>
                <div className="form_input input1 ">
                    <input 
                        type="text" 
                        placeholder='Nombre'
                        name='name'
                        value={ name }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="form_input input2 ">
                    <input 
                        type="text" 
                        placeholder='Correo'
                        name='email'
                        value={ email }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="form_input input3 ">
                    <input 
                        type="text" 
                        placeholder='Asunto'
                        name='subject'
                        value={ subject }
                        onChange={ onInputChange }
                    />
                </div>
                <div className="form_textarea input4 ">
                    <textarea 
                        placeholder='Mensaje'
                        name='message'
                        value={ message }
                        onChange={ onInputChange }
                        cols={30} 
                        rows={20}
                    >
                    </textarea>
                </div>
                <div className="form_button">
                    <button className='button'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

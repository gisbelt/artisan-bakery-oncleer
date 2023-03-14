import { Line } from '../../ui/components/Line'
import { useForm } from '../hooks/useForm'

export const ContactPage = () => {

    const { formState, onInputChange } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const { name, email, subject, message } = formState;

    return (
        <section className='contact'>
            <div className="contact_body">
                <div className="contact_body_text">
                    <h2>Ponte en Contacto</h2>
                    <Line />
                </div>                
            </div>

            <div className="contact_form">
                <form action="">
                    <div className="form_input input1 ">
                        <input 
                            type="text" 
                            placeholder='Nombre:'
                            name='name'
                            value={ name }
                            onChange={ onInputChange }
                        />
                    </div>
                    <div className="form_input input2 ">
                        <input 
                            type="text" 
                            placeholder='Correo:'
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </div>
                    <div className="form_input input3 ">
                        <input 
                            type="text" 
                            placeholder='Asunto:'
                            name='subject'
                            value={ subject }
                            onChange={ onInputChange }
                        />
                    </div>
                    <div className="form_textarea input4 ">
                        <textarea 
                            placeholder='Mensaje:'
                            name='message'
                            value={ message }
                            onChange={ onInputChange }
                            cols={500} 
                            rows={500}
                        >
                        </textarea>
                    </div>
                </form>
            </div>
        </section>
    )
}

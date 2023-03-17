import { useState } from 'react';
import { useForm } from '../hooks/useForm'

interface Fields {
    class: string;
    type: string;
    placeholder: string;
    name: string;
}

interface Props {
    fields: Fields[];
}

export const ContactForm = (props: Props) => {

    const { formState, onInputChange, onInputBlur, formErrors } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const { name, email, subject, message } = formState;

    return (
        <div className="contact_form">
            <form action="" autoComplete='off'>
                { props.fields.map((field, index) => (
                     <div className={ field.class } key={ index }>
                        <input 
                            type={ field.type } 
                            placeholder={ field.placeholder }
                            name={ field.name }
                            value={ formState[field.name] }
                            onChange={ onInputChange }
                            onBlur={ onInputBlur }
                        />
                        {
                            formErrors[field.name] 
                            && 
                            (  <p 
                                    style={{
                                        color: '#E37E7D', 
                                        padding: '0px 25px', 
                                        marginTop: '20px',
                                        width: '100%',
                                        letterSpacing: '0px',
                                        lineHeight: '0'
                                    }}
                                >
                                    {formErrors[field.name]}
                                </p> 
                            )
                        }
                    </div>
                ))}
                <div className="form_textarea input4 ">
                    <textarea 
                        placeholder='Mensaje'
                        name='message'
                        value={ message }
                        onChange={ onInputChange }
                        onBlur={ onInputBlur }
                        cols={30} 
                        rows={20}
                    >
                    </textarea>
                    {   
                        formErrors['message']  
                        && 
                        <p  
                            style={{
                                color: '#E37E7D', 
                                padding: '0px 25px', 
                                marginTop: '20px',
                                width: '100%',
                                letterSpacing: '0px',
                                lineHeight: '0'
                            }}
                        >
                        { formErrors['message'] }
                        </p>
                    }
                </div>
                <div className="form_button">
                    <button className='button'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

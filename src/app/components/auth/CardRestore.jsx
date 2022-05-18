import React, { useState } from 'react'
import './scss/cardAuth.scss'


const CardRestore = ({ viewRestore, changeOption }) => {

    const [msmConfirmation, setMsmConfirmation] = useState(false)

    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('')

    const onChange = (e) => {
        const { value } = e.target
        setEmail(value)
    }

    // Envío de correo electrónico para recuperar contraseña
    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setMsmConfirmation(true)
            setEmail('')
        }, 1500);
    }

    return (
        <div className={`containerAccess ${!viewRestore ? 'restore' : ''}`}>
            <div className='titLoggin'>
                <h1>Recuperar contraseña</h1>
                <p>Para recuperar su contraseña, indroduzca el correo con que se registró.</p>
            </div>
            <div className="contAccess">
                <form onSubmit={onSubmit}>
                    <div className="formBody" >
                        <label htmlFor="accessUser">
                            Correo electrónico
                            <i className="far fa-envelope" />
                            <input
                                id="accessUser"
                                type="email"
                                name='email'
                                placeholder="Ingrese correo electrónico"
                                value={email}
                                onChange={onChange}
                                disabled={loading}
                                required />
                        </label>
                    </div>
                    <div className="formFooter">
                        <button type='submit' disabled={loading}>
                            {
                                loading ? 'ENVIANDO...' : 'ENVIAR'
                            }
                        </button>
                        {
                            msmConfirmation &&
                            <p className='sucess'>Enviamos un mensaje  de recuperación a su correo electrónico con las intrucciones para continuar con este proceso.</p>
                        }
                        <span onClick={() => changeOption('login')}>¿Deseas iniciar sesión?</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CardRestore

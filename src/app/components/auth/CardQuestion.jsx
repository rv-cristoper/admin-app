import React, { useState } from 'react'
import './scss/cardAuth.scss'


const CardQuestion = ({ viewAnyQuestion, closeAnyQuestion, disableAnyQuestion }) => {

    const [msmConfirmation, setMsmConfirmation] = useState(false)

    const [data, setData] = useState({
        message: '',
        email: ''
    })

    const [loading, setLoading] = useState(false)

    const openSocialMedia = (value) => {
        window.open(`${value}`, '_blank')
    }

    const onChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setMsmConfirmation(true)
            setData({
                message: '',
                email: ''
            })
        }, 1500);
    }

    const { message, email } = data;

    return (
        <div className={`contSeparate ${viewAnyQuestion ? 'open' : ''}`} style={{ zIndex: `${disableAnyQuestion ? '0' : '1'}` }}>
            <div className="containerAccess">
                <div className='returnAcces' onClick={closeAnyQuestion}>
                    <i className="fas fa-reply" />
                    Retornar
                </div>
                <div className='titLoggin'>
                    <h1>¿Necesitas ayuda?</h1>
                </div>
                <div className="contAccess">
                    <form onSubmit={onSubmit}>
                        <div className="formBody" >
                            <label htmlFor="accessUser">
                                Escribe tu mensaje aquí
                                <textarea
                                    placeholder="Ingrese mensaje"
                                    name='message'
                                    value={message}
                                    onChange={onChange}
                                    disabled={loading}
                                    required
                                />
                            </label>
                        </div>
                        <div className="formBody" >
                            <label htmlFor="accessUser">
                                Su dirección de correo electrónico
                                <i className="far fa-envelope" />
                                <input
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
                                <p className='sucess'>Gracias por escribirnos. Nuestro equipo de soporte te contactará lo antes posible.</p>
                            }
                        </div>
                        <div className='indSocial'>
                            <p>Para mayor información sobre nuestros servicios visitanos en:</p>
                            <div>
                                <img src="https://res.cloudinary.com/cristoper/image/upload/v1640839572/banecoin/5296499_fb_facebook_facebook_logo_icon_eigfmp.png" alt="socialImag" title='Facebook' onClick={() => openSocialMedia('https://www.facebook.com/banexcoin')} />
                                <img src="https://res.cloudinary.com/cristoper/image/upload/v1640839572/banecoin/3225191_app_instagram_logo_media_popular_icon_okgugc.png" alt="socialImag" title='Instagram' onClick={() => openSocialMedia('https://www.instagram.com/banexcoin/')} />
                                <img src="https://res.cloudinary.com/cristoper/image/upload/v1640839572/banecoin/5296501_linkedin_network_linkedin_logo_icon_yh9vhm.png" alt="socialImag" title='Linkedin' onClick={() => openSocialMedia('https://www.linkedin.com/company/banexcoin/')} />
                                <img src="https://res.cloudinary.com/cristoper/image/upload/v1640839572/banecoin/5296514_bird_tweet_twitter_twitter_logo_icon_za3jmz.png" alt="socialImag" title='Twiter' onClick={() => openSocialMedia('https://twitter.com/banexcoin')} />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default CardQuestion

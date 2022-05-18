import React, { useState } from 'react'

const AddUser = ({ setAddUserModal, addUSer }) => {

    const [data, setData] = useState({
        id: '',
        created: '',
        updated: '',
        status: 1,
        username: '',
        password: '',
        countryCode: '',
        phone: '',
        fname: '',
        lname: '',
        address: '',
        birthdate: ''
    })

    const getDate = () => {
        const date = new Date()
        const fecha = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        const hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        return fecha + ' ' + hora;
    }

    const getBirthdate = (value) => {
        const date = new Date(value)
        const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        const day = date.getDate() + 1
        const nMonth = date.getMonth()
        return day + ' de ' + month[Number(nMonth)];
    }

    // Validación al momento de insertar caracteres en el formulario, si se envía un campo true, solo permitira el ingreso de caracteres numéricos.
    const onChangeInputs = (e, number) => {
        const { name, value } = e.target
        if (number) {
            const re = /^[0-9.\b]+$/
            if (value === '' || re.test(value)) {
                setData({
                    ...data,
                    [name]: value
                })
            }
        } else {
            setData({
                ...data,
                [name]: value
            })
        }

    };

    const handleSubmitAdd = (e) => {
        e.preventDefault()
        const newData = {
            ...data,
            id: Math.random().toString(36).substr(2, 9), // Generción de Id aleatorio
            created: getDate(),
            birthdate: getBirthdate(data.birthdate)
        }
        addUSer(newData)
    }

    const { username, password, countryCode, phone, fname, lname, address, birthdate } = data

    return (
        <form onSubmit={handleSubmitAdd}>
            <div>
                <label>
                    <p>Nombre:</p>
                    <input name="fname" type="text" value={fname} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Apellido:</p>
                    <input name="lname" type="text" value={lname} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Teléfono:</p>
                    <input name="phone" type="text" value={phone} onChange={(e) => onChangeInputs(e, true)} required autoComplete="off" maxLength={9} />
                </label>
                <label>
                    <p>Código postal:</p>
                    <input name="countryCode" type="text" value={countryCode} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Fecha de nacimiento:</p>
                    <input name="birthdate" type="date" value={birthdate} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Dirección:</p>
                    <input name="address" type="text" value={address} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Usuario:</p>
                    <input name="username" type="text" value={username} onChange={onChangeInputs} required autoComplete="off" />
                </label>
                <label>
                    <p>Contraseña:</p>
                    <input name="password" type="password" value={password} onChange={onChangeInputs} required autoComplete="off" />
                </label>
            </div>
            <div>
                <button type="button" onClick={() => setAddUserModal(false)}> Cancelar </button>
                <button type="submit"> Agregar </button>
            </div>
        </form>
    )
}

export default AddUser

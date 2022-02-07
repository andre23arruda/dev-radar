import React, { useEffect, useState } from 'react'
import { postApi } from '../../services/api'

// styles
import './FormCard.scss'

function FormCard({ devs, setDevs }) {
    const [name, setName] = useState('')
    const [techs, setTechs] = useState('')
    const [username, setUsername] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    async function formSubmit(event) {
        event.preventDefault()
        const formData = {
            name,
            techs,
            username,
            latitude,
            longitude,
        }
        const response = await postApi('dev-radar/devs/', formData)
        try {
            if (response.id) {
                console.log(response)
                alert('Dev cadastrado com sucesso!')
                cleanForm()
                setDevs([...devs, response])
            } else {
                alert('Erro ao cadastrar Dev!')
            }
        } catch(err) {
            alert('Erro ao cadastrar Dev!')
        }
    }

    function cleanForm() {
        setName('')
        setTechs('')
        setUsername('')
        setLatitude('')
        setLongitude('')
    }

    function getUseRPosition(position) {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getUseRPosition)
    }, [])

    return (
        <form className="form-card" onSubmit={ formSubmit }>
            <h2>Cadastrar</h2>

            <fieldset>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={ e => setName(e.target.value) }
                    value={ name }
                    />
            </fieldset>

            <fieldset>
                <label htmlFor="techs">Tecnologias</label>
                <input
                    type="text"
                    id="techs"
                    name="techs"
                    onChange={ e => setTechs(e.target.value) }
                    value={ techs }
                    />
            </fieldset>

            <fieldset>
                <label htmlFor="username">Usuário do Github</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={ e => setUsername(e.target.value) }
                    value={ username }
                />
            </fieldset>

            <fieldset className="form-group">
                <div>
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        type="number"
                        id="latitude"
                        name="latitude"
                        onChange={ e => setLatitude(e.target.value) }
                        value={ latitude }
                    />
                </div>

                <div>
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        type="number"
                        id="longitude"
                        name="longitude"
                        onChange={ e => setLongitude(e.target.value) }
                        value={ longitude }
                    />
                </div>
            </fieldset>

            <button>
                Salvar
            </button>
        </form>
	)
}

export default FormCard

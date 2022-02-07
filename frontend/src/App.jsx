import React, { useEffect, useState } from 'react'

import FormCard from './components/FormCard'
import UserCard from './components/UserCard'

// utils
import { getApi } from './services/api'

import './global.scss'
import './App.scss'


function App() {
	const [devs, setDevs] = useState([])

	async function loadDevsList() {
        const response = await getApi('dev-radar/devs')
        setDevs(response)
    }

	useEffect(() => {
        loadDevsList()
    }, [])


	return (
		<div className="page-container">
			<FormCard
				devs={ devs }
				setDevs={ setDevs }
			/>

			<section className="cards">
				{ devs.map(dev => (
					<UserCard
						key={ dev.id }
						dev={ dev }
					/>
				))}
			</section>

		</div>
	)
}

export default App

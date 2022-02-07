import React from 'react'

// styles
import './UserCard.scss'

function UserCard({ dev }) {
    return (
		<div className="user-card">
			<header>
				<img src={ dev.avatar } alt={ dev.username } />

				<div className="user">
					<strong>{ dev.name }</strong>
					<span>{ dev.techs }</span>
				</div>
			</header>

			<div className="bio">
				{ dev.bio }
			</div>

			<a href={ `https://github.com/${ dev.username }` }>
				Acessar perfil no Github
			</a>
		</div>
	)
}

export default UserCard

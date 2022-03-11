// importing react router
import { NavLink } from 'react-router-dom'

// importing styles
import './navbar.css'

// importing components
import SearchBar from '../../components/search/SearchBar'

export default function Navbar() {
	return(

		<nav className='row navbar'>

			<NavLink to='/'
			>
				logo
			</NavLink>
			

			<SearchBar />
			
			<NavLink to='/account-register'
			>
				register
			</NavLink>
				


		</nav>
	)
}
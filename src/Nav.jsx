import './nav.css'

function Nav(props){
    return(
        <div className="nav">
            <img className='nav__logo' src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt='netflix logo'></img>
            <img className='nav__account-logo'src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='account logo'></img>
        </div>
    )
}

export default Nav;
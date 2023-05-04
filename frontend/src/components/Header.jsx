import { Link } from 'react-router-dom'


function Header() {


  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Home</Link>
      </div>
      <div className='logo'>
        <Link to='/about'>About</Link>
      </div>
      <div className='logo'>
        <Link to='/resume'>Resume</Link>
      </div>
      <div className='logo'>
        <Link to='/projects '>Projects</Link>
      </div>
      <div className='logo'>
        <Link to='/contact'>Contact</Link>
      </div>

    </header>
  )
}

export default Header
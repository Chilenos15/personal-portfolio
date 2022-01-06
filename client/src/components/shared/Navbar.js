import { Link } from 'react-router-dom';

const Navbar = ({}) => {
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/contacts'>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
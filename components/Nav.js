import Link from 'next/link'
import navstyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav className={navstyles.Nav}>
        <ul>
     <li>
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/countict">countict</Link>

    
     </li>

        </ul>




    </nav>
  )
}

export default Nav
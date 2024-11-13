import Link from 'next/link'

const Navbar = () => {
  return (
    <ul>
        <li><Link href='./'></Link>Home</li>
        <li><Link href='./dashboards'></Link>Dashboards</li>
        <li><Link href='./'></Link>LLM</li>
    </ul>
  )
}

export default Navbar

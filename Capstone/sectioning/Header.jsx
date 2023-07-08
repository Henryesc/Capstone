import { NavLink } from "react-router-dom"
import data from "../navs/navs.json"

const Header = () => {

  const navs = data && data.map(item => {
    return (
      <li>
          <NavLink key={item.id} to={item.href}>{item.name}</NavLink>
      </li>
    )
  })

  return (
    <header>
      <nav>
        <ul className="y-wrap">
          {navs}
        </ul>
      </nav>
    </header>
  )
}
export default Header
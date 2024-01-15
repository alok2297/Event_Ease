import { NavLink } from "react-router-dom";
import "./Breadcrumbs.module.css"
import styles from "./Breadcrumbs.module.css";
export const Breadcrumbs = (props) => {
  return (
    <nav className={styles.bread}>
        <ul>
            {props.links.map((link, index)=>(
                <li key={index}>
                <NavLink key={index} to={link.path}>{link.name}</NavLink>
                {index !== props.links.length - 1 && <span key={index}>/</span>}
            </li>
            ))}
        </ul>
    </nav>
  )
}




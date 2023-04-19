import { Link } from 'react-router-dom';
import styles from "./Navigation.module.scss"

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <Link to="/">Dashboard</Link>
      <Link to="/modifyReservation">Reservation</Link>
      <Link to="/modifyBoats">Boats</Link>
    </nav>
  )
}
export default Navigation
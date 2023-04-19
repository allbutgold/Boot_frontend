import ReservationDetail from "../components/ReservationDetail";
import AddReservation from "../components/AddReservation.jsx";
import styles from "./ModifyReservation.module.scss";

const ModifyReservation = () => {
  return ( 
    <div className={styles.Reservation}>
      
      <AddReservation />
      <ReservationDetail />

    </div>

  );
}

export default ModifyReservation;
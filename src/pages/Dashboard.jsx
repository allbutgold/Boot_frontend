import styles from "./Dashboard.module.scss";
import ReservationCount from "../components/ReservationCount";
import BoatsCount from "../components/BoatsCout";
import AvailableBoats from "../components/AvailableBoats";

const Dashboard = () => {
  return ( 
    <div className={styles.Dashboard}>
      <h1>Dashboard</h1>
      <ReservationCount />
      <BoatsCount />
      <AvailableBoats />
    </div>
  );
}

export default Dashboard;
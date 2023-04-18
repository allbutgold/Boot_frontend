import ReservationCount from "../components/ReservationCount";
import BoatsCount from "../components/BoatsCout";

const Dashboard = () => {
  return ( 
    <div>
      <h1>Dashboard</h1>
      <ReservationCount />
      <BoatsCount />
    </div>
  );
}

export default Dashboard;
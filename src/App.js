import Home from "./pages/Home";
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/style.css'
import '../src/assets/plugins/fontawesome/css/all.min.css'
import '../src/assets/plugins/fontawesome/css/fontawesome.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'slick-carousel/slick/slick.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import DocProfile from "./pages/DocProfile";
import BookAppointment from './pages/BookAppointment'
import DiseasePrediction from './pages/DiseasePrediction'
import FindAmbulance from './pages/FindAmbulance'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import '../src/assets/style.css'
import User from "./dashboard/User/User";
import Admin from "./dashboard/Admin/Admin";
import Doctor from "./dashboard/Doctor/Doctor";
import Patients from "./dashboard/Doctor/Patients";
import MedicalRecord from "./dashboard/User/MedicalRecord";
import Billing from "./dashboard/User/Billing";
import Favourites from "./dashboard/User/Favourites";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/searchDoctor' Component={Search} />
        <Route path='/docProfile' Component={DocProfile} />
        <Route path='/bookAppointment' Component={BookAppointment} />
        <Route path='/diseasePrediction' Component={DiseasePrediction} />
        <Route path='/findAmbulance' Component={FindAmbulance} />
        {/* User Dashboard */}
        <Route path='/userDashboard' Component={User} />
        <Route path='/medicalRecord' Component={MedicalRecord} />
        <Route path='/billing' Component={Billing} />
        <Route path='/favourites' Component={Favourites} />
        {/* Admin Dashboard */}
        <Route path='/adminDashboard' Component={Admin} />
        <Route path='/doctorDashboard' Component={Doctor} />
        <Route path='/mypatients' Component={Patients} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

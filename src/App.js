import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeContainer from "./Fantasy_Kingdom/Pages/Home/HomeContainer/HomeContainer";
import Rides from "./Fantasy_Kingdom/Pages/Home/Rides/Rides";
import Contract from "./Fantasy_Kingdom/Pages/Contract/Contract";
import Footer from "./Fantasy_Kingdom/Pages/Shared/Footer";
import MyOrders from "./Fantasy_Kingdom/Pages/MyOrders/MyOrders";
import ManageAllOrders from "./Fantasy_Kingdom/Pages/ManageAllOrders/ManageAllOrders";
import AddRides from "./Fantasy_Kingdom/Pages/AddRides/AddRides";
import NotFound from "./Fantasy_Kingdom/Pages/NotFound/NotFound";
import Navbaar from "./Fantasy_Kingdom/Pages/Home/Header/Navbar/Navbaar";
import RidesPackage from "./Fantasy_Kingdom/Pages/RidesPackage/RidesPackage";
import PackageConfirmation from "./Fantasy_Kingdom/Pages/PackageConfirmation/PackageConfirmation";
import Login from "./Fantasy_Kingdom/Pages/Login/Login";
import AuthContext from "./Fantasy_Kingdom/Context/AuthContext";
// On Scroll Animation
Aos.init();

function App() {
  return (
    <AuthContext>
      <div className="App">
        <Router>
          <Navbaar />
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>

            <Route path="/home">
              <HomeContainer />
            </Route>

            <Route path="/rides">
              <Rides />
            </Route>

            <Route path="/ridesPackage">
              <RidesPackage />
            </Route>

            <Route path="/packageConfirmation/:packageId">
              <PackageConfirmation />
            </Route>

            <Route path="/contract">
              <Contract />
            </Route>

            <Route path="/myOrders">
              <MyOrders />
            </Route>

            <Route path="/addRides">
              <AddRides />
            </Route>

            <Route path="/manageAllOrders">
              <ManageAllOrders />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </AuthContext>
  );
}

export default App;

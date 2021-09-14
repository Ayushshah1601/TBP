import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './AuthComponents/Register';
import Login from './AuthComponents/Login';
import Success from './AuthComponents/Success.jsx'
import Dashboard from './PortalComponents/Dashboard';
import Search from './PortalComponents/Search';
import SearchCompany from './PortalComponents/SearchCompany';
import SearchInvoice from './PortalComponents/SearchInvoice';
import { useSelector } from 'react-redux';
import NotFound from './NotFound';
import WelcomeTesting from './AuthComponents/WelcomeTesting';
import Invoices from './PortalComponents/Invoices';
import ClientProfiles from './PortalComponents/ClientProfiles';


function App() {
  const status = useSelector(state => state.status);
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" component={WelcomeTesting}></Route>
          <Route exact path="/home" component={WelcomeTesting}></Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/success" component={Success} />

          {status === "LOGIN" ? (
            <Route exact path="/dashboard" component={Dashboard} />
          ) : (
            <Redirect to="/login" />
          )}

          {status === "LOGIN" ? (
            <Route exact path="/portal/searching/:searchContent" component={Search} />
          ) : (
            <Redirect to="/login" />
          )}

          {status === "LOGIN" ? (
            <Route exact path="/portal/search/company/:company_name" component={SearchCompany} />
          ) : (
            <Redirect to="/login" />
          )}

          {status === "LOGIN" ? (
            <Route exact path="/portal/search/inv/:inv_number" component={SearchInvoice} ></Route>
          ) : (
            <Redirect to="/login" />
          )}

          {status === "LOGIN" ? (
            <Route exact path="/portal/search/invoices/:company_name" component={Invoices} />
          ) : (
            <Redirect to="/login" />
          )}

          {status === "LOGIN" ? (
            <Route exact path="/portal/allcompanies" component={ClientProfiles} />
          ) : (
            <Redirect to="/login" />
          )}

          <Route component={NotFound} />
        </Switch>
      </Router>

    </div>
  );
}
export default App
